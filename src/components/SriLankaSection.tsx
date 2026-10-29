import { Link } from 'react-router-dom';
import { useReveal } from './hooks';

export function SriLankaSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="section section--soft" id="sri-lanka">
      <div className="container">
        <div ref={ref} className="reveal sl">
          <div className="sl__img">
            <img
              src="/sri-lanka.jpg"
              alt="A teacher presenting the ClassLms dashboard to students, with callouts for core modules, user groups and one platform"
              width={1200}
              height={1032}
              loading="lazy"
            />
          </div>
          <div className="sl__copy">
            <span className="eyebrow">Made for Sri Lanka</span>
            <h2>
              Built For Tuition Classes And Institutes <span className="accent">In Sri Lanka</span>
            </h2>
            <p>Designed around how teachers, tutors and institutes run their classes, and ready to grow with them.</p>
            <Link to="/how-it-works" className="btn btn--primary btn--lg">Start Teaching</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
