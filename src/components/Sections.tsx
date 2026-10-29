import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  capabilities, faqs, type FaqAnswer, featureDetails, features, footerCols, problems, steps,
} from '../content';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { AnalyticsMock, CourseMock, DashboardMock, StudentMock } from './Mockups';
import { useReveal } from './hooks';

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Heading({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: ReactNode; sub?: string; center?: boolean }) {
  return (
    <Reveal className={`heading${center ? ' heading--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="checks">
      {items.map((i) => (
        <li key={i}><span><Icon name="check" size={14} /></span>{i}</li>
      ))}
    </ul>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="badge"><i />Built for modern education</span>
          <h1><span className="nowrap">Teach Smarter. Manage Everything</span> <span className="hl">In One Place.</span></h1>
          <p className="lead">
            ClassLms is the all-in-one platform for teachers and institutes. Organize courses, enroll students, schedule
            classes, track attendance and payments, and share learning materials, all in one simple place, so you spend
            less time on admin and more time teaching.
          </p>
          <div className="hero__cta">
            <Link to="/contact#send-message" className="btn btn--primary btn--lg">Get Started Teach <Icon name="arrow" size={18} /></Link>
            <Link to="/features" className="btn btn--outline btn--lg">Explore Features</Link>
          </div>
          <p className="trust">Built for teachers, tutors and educational institutes</p>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="section section--soft">
      <div className="container caps">
        <div className="caps__content">
          <Heading center={false} title={<>Everything You Need To Run <span className="accent">Your Learning Business</span></>} />
          <div className="cap-grid">
            {capabilities.map((c, i) => (
              <Reveal key={c.label} delay={i * 50}>
                <div className="cap card-hover">
                  <span className="ico"><Icon name={c.icon} /></span>
                  <b>{c.label}</b>
                  <small>{c.text}</small>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="caps__image" delay={100}>
          <img src="/classroom.jpg" alt="Illustration of students learning together in a science classroom" width={800} height={800} />
        </Reveal>
      </div>
    </section>
  );
}

export function Problems() {
  return (
    <section className="section">
      <div className="container">
        <Heading
          eyebrow="The Problem"
          title={<>Teaching Is Hard Enough. <span className="accent">Managing Everything Shouldn't Be.</span></>}
          sub="Running classes shouldn't mean juggling chat groups, spreadsheets and paper records."
        />
        <div className="problems">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <article className="problem-card">
                <span className="problem-card__num">0{i + 1}</span>
                <span className="ico"><Icon name={p.icon} /></span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type Filter = 'All' | 'Teaching' | 'Operations';

export function Features() {
  const [filter, setFilter] = useState<Filter>('All');
  const [active, setActive] = useState(features[0].title);
  const [playing, setPlaying] = useState(
    () => typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const list = features.filter((f) => filter === 'All' || featureDetails[f.title].group === filter);
  const current = list.find((f) => f.title === active) ?? list[0];
  const detail = featureDetails[current.title];

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      const i = list.findIndex((f) => f.title === current.title);
      setActive(list[(i + 1) % list.length].title);
    }, 5000);
    return () => window.clearInterval(id);
  }, [playing, list, current.title]);

  const pick = (t: string) => {
    setActive(t);
    setPlaying(false);
  };

  return (
    <section className="section section--soft" id="features">
      <div className="container">
        <Heading
          eyebrow="Features"
          title={<>Everything Your <span className="accent">Institute Needs</span></>}
          sub="One platform to manage teaching, learning and day-to-day operations."
        />
        <Reveal>
          <div className="fe">
            <div className="fe__bar">
              <b>ClassLms Features</b>
              <div className="fe__controls">
                <span className="fe__pill fe__pill--bar">Everything in one platform</span>
                <button className="fe__pause" onClick={() => setPlaying(!playing)} aria-pressed={!playing}>
                  <Icon name={playing ? 'pause' : 'play'} size={14} />
                  {playing ? 'Pause' : 'Play'}
                </button>
                <div className="fe__tabs" role="group" aria-label="Filter features">
                  {(['All', 'Teaching', 'Operations'] as Filter[]).map((f) => (
                    <button key={f} aria-pressed={filter === f} className={filter === f ? 'is-on' : ''} onClick={() => setFilter(f)}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="fe__body">
              <div className="fe__list" role="tablist" aria-orientation="vertical" aria-label="Features">
                {list.map((f) => (
                  <button
                    key={f.title}
                    role="tab"
                    aria-selected={f.title === current.title}
                    className={f.title === current.title ? 'is-on' : ''}
                    onClick={() => pick(f.title)}
                  >
                    <span className="fe__ico"><Icon name={f.icon} size={18} /></span>
                    {f.title}
                  </button>
                ))}
              </div>
              <div className="fe__detail" key={current.title} role="tabpanel">
                <div className="fe__head">
                  <div className="fe__title">
                    <span className="fe__ico"><Icon name={current.icon} size={18} /></span>
                    <h3>{current.title}</h3>
                  </div>
                  <span className="fe__pill">{detail.tag}</span>
                </div>
                <p className="fe__desc">{current.text}</p>
                <div className="fe__code">
                  <div className="fe__code-head">PREVIEW <em>sample</em></div>
                  <ul>
                    {detail.preview.map(([l, st], n) => (
                      <li key={n}>
                        <span>{l}</span>
                        <i className={/Draft|Pending|Absent|Scheduled/.test(st) ? 'warn' : ''}>{st}</i>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fe__code">
                  <div className="fe__code-head">WHAT YOU CAN DO</div>
                  <ul className="fe__do">
                    {detail.abilities.map((a) => (
                      <li key={a}><Icon name="check" size={14} />{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const showcases = [
  { title: 'Manage every course in one place', text: 'Create structured courses, organize lessons and make learning materials easily accessible to students.', visual: <CourseMock /> },
  { title: "Know what's happening in your institute", text: 'Get a clear overview of students, attendance, classes, payments and learning activity.', visual: <AnalyticsMock /> },
  { title: 'Give students a better learning experience', text: 'Make it easy for students to discover their courses, access learning materials, attend classes and track their progress.', visual: <StudentMock /> },
];

export function Showcase() {
  return (
    <section className="section">
      <div className="container showcase">
        {showcases.map((s, i) => (
          <div className={`split${i % 2 ? ' split--rev' : ''}`} key={s.title}>
            <Reveal className="split__copy">
              <span className="eyebrow">0{i + 1}</span>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
            </Reveal>
            <Reveal className="split__visual" delay={100}>
              <div className="stage">{s.visual}</div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section section--soft" id="how-it-works">
      <div className="container">
        <Heading eyebrow="How It Works" title="Up and running in three steps" />
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="step">
                <span className="step__num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function bold(text: string): ReactNode[] {
  return text.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}

export function Answer({ a }: { a: FaqAnswer }) {
  if (typeof a === 'string') return <p>{bold(a)}</p>;
  return (
    <>
      {a.intro && <p>{bold(a.intro)}</p>}
      {a.list && <ul>{a.list.map((l) => (<li key={l}>{bold(l)}</li>))}</ul>}
      {a.outro && <p>{bold(a.outro)}</p>}
    </>
  );
}

export function FAQ({ items = faqs, eyebrow = 'FAQ', title = 'Frequently Asked Questions', sub, wide = false }: { items?: { q: string; a: FaqAnswer }[]; eyebrow?: string; title?: ReactNode; sub?: string; wide?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section section--soft" id="faq">
      <div className={`container ${wide ? 'container--wide' : 'container--narrow'}`}>
        <Heading eyebrow={eyebrow} title={title} sub={sub} />
        <Reveal>
          <div className="faq">
            {items.map((f, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={f.q}>
                  <h3>
                    <button aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                      {f.q}
                      <Icon name="plus" size={20} className="faq__icon" />
                    </button>
                  </h3>
                  <div className="faq__panel" id={`faq-${i}`} role="region">
                    <div><div className="faq__body"><Answer a={f.a} /></div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const values = [
  { icon: 'layers', title: 'All in one place', text: 'Courses, students, classes, payments and materials live in a single platform instead of scattered tools.' },
  { icon: 'eye', title: 'Simple to use', text: 'A clean, focused interface so teachers and students can get started without training.' },
  { icon: 'users', title: 'Built for Sri Lankan classes', text: 'Designed around how tuition teachers and institutes actually run their classes.' },
  { icon: 'chart', title: 'Clear visibility', text: 'See students, attendance, payments and course activity at a glance.' },
] as const;

export function Values() {
  return (
    <section className="section">
      <div className="container">
        <Heading eyebrow="Why ClassLms" title="A platform that works the way you teach" />
        <div className="grid grid--4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <article className="card card-hover feature">
                <span className="ico"><Icon name={v.icon} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="section" id="get-started">
      <div className="container">
        <Reveal>
          <div className="cta">
            <h2>Ready To Make Teaching Simpler?</h2>
            <p>Bring your courses, students and institute management together with ClassLms.</p>
            <div className="cta__btns">
              <Link to="/contact#send-message" className="btn btn--white btn--lg">Get Started Teach</Link>
              <Link to="/contact#send-message" className="btn btn--glass btn--lg">Talk to Us</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const socials = [['facebook', 'Facebook'], ['instagram', 'Instagram'], ['linkedin', 'LinkedIn'], ['youtube', 'YouTube']] as const;
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>A simpler way to teach, learn and manage education.</p>
          <div className="socials">
            {socials.map(([icon, label]) => (
              <a key={label} href="#" aria-label={label}><Icon name={icon} size={18} /></a>
            ))}
          </div>
        </div>
        {footerCols.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.links.map(([l, h]) => (
                <li key={l}>{h.startsWith('/') ? <Link to={h}>{l}</Link> : <a href={h}>{l}</a>}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer__bottom">© 2026 ClassLms. All rights reserved.</div>
    </footer>
  );
}
