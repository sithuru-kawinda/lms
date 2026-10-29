import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { articles, guideGroups } from './guide';

const ids = articles.map((a) => a.id);
const fromHash = () => {
  const h = window.location.hash.replace('#', '');
  return ids.includes(h) ? h : 'home';
};

export function GuidePage() {
  const [active, setActive] = useState(fromHash);

  // Scroll to the topic in the URL on first load.
  useEffect(() => {
    const h = window.location.hash.replace('#', '');
    if (h && ids.includes(h)) document.getElementById(h)?.scrollIntoView();
  }, []);

  // Highlight the topic currently being read.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = ids[ids.length - 1];
      setActive(current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const go = (id: string) => {
    window.history.replaceState(null, '', `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="gd">
      <div className="container gd__grid">
        <aside className="gd__side" aria-label="How it works topics">
          <div className="gd__brand">
            <span className="gd__brand-ico"><Icon name="book" size={18} /></span>
            <div><b>How It Works</b><small>ClassLms Guide</small></div>
          </div>

          <nav className="gd__nav gd__nav--desktop">
            {guideGroups.map((g) => (
              <div className="gd__group" key={g.label}>
                <h2 lang="si">{g.label}</h2>
                {g.ids.map((id) => {
                  const a = articles.find((x) => x.id === id)!;
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      lang="si"
                      className={id === active ? 'is-on' : ''}
                      aria-current={id === active ? 'true' : undefined}
                      onClick={(e) => { e.preventDefault(); go(id); }}
                    >
                      {a.title}
                    </a>
                  );
                })}
              </div>
            ))}
          </nav>

          <label className="gd__select">
            <span>Topic</span>
            <select lang="si" value={active} onChange={(e) => go(e.target.value)}>
              {guideGroups.map((g) => (
                <optgroup key={g.label} label={g.label}>
                  {g.ids.map((id) => (
                    <option key={id} value={id}>{articles.find((x) => x.id === id)!.title}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
        </aside>

        <div className="gd__content" lang="si">
          {articles.map((a, i) => {
            const Title = i === 0 ? 'h1' : 'h2';
            return (
              <article className="gd__article" id={a.id} key={a.id}>
                <span className="gd__eyebrow">{a.group}</span>
                <Title>{a.title}</Title>
                <p className="gd__sub">{a.subtitle}</p>

                {a.paragraphs?.map((p) => (<p className="gd__p" key={p}>{p}</p>))}
                {a.bullets && <ul className="gd__bullets">{a.bullets.map((b) => (<li key={b}>{b}</li>))}</ul>}
                {a.list && <ol className="gd__list">{a.list.map((l) => (<li key={l}>{l}</li>))}</ol>}

                {a.blocks?.map((b) => (
                  <div className="gd__block" key={b.heading}>
                    <h3>{b.heading}</h3>
                    {b.paragraphs?.map((p) => (<p className="gd__p" key={p}>{p}</p>))}
                    {b.bullets && <ul className="gd__bullets">{b.bullets.map((x) => (<li key={x}>{x}</li>))}</ul>}
                    {b.list && <ol className="gd__list">{b.list.map((x) => (<li key={x}>{x}</li>))}</ol>}
                  </div>
                ))}

                {i === articles.length - 1 && (
                  <Link to="/contact#send-message" className="btn btn--primary btn--lg gd__cta">Get Started</Link>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
