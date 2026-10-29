import { features } from '../content';
import { Icon } from '../components/Icon';
import { featureGuide } from './featureGuide';

export function FeaturesPage() {
  return (
    <section className="ft">
      <div className="container">
        <header className="ft__head">
          <span className="eyebrow">Features</span>
          <h1>Everything Your <span className="accent">Institute Needs</span></h1>
          <p>One platform to manage teaching, learning and day-to-day operations.</p>
        </header>

        <div className="ft__grid">
          {features.map((f, i) => (
            <article className="ft__card" key={f.title}>
              <span className="ico"><Icon name={f.icon} /></span>
              <h2>{f.title}</h2>
              <p>{f.text}</p>
              <ul>
                {featureGuide[i].does.slice(0, 3).map((d) => (
                  <li key={d}><Icon name="check" size={15} />{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
