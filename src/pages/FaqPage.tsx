import { Link } from 'react-router-dom';
import { FAQ } from '../components/Sections';
import { Icon, type IconName } from '../components/Icon';
import { whatsappLink } from '../content';

const support: { icon: IconName; title: string; text: string; link: string; href: string; primary?: boolean }[] = [
  { icon: 'chat', title: 'Talk to us', text: 'Questions about ClassLms for your classes or institute? Get in touch.', link: 'Contact us', href: '/contact' },
  { icon: 'doc', title: 'Documentation', text: 'Guides for setting up courses, students and classes.', link: 'Read the docs', href: '#' },
  { icon: 'help', title: 'Help Center', text: 'Answers to common questions and how-to articles.', link: 'Visit Help Center', href: whatsappLink('Hello, I need help with ClassLms.') || '/contact#send-message' },
];

export function FaqPage() {
  return (
    <>
      <FAQ
        wide
        eyebrow="FAQ"
        title={<>Frequently Asked <span className="accent">Questions</span></>}
        sub="Quick answers about ClassLms, who it is for and how to get started."
      />

      <section className="sup">
        <div className="container">
          <header className="sup__head">
            <h2>We’re Here To Help You <span className="accent">Get Started</span></h2>
            <p>Not finding what you need? Reach out or browse our guides.</p>
          </header>
          <div className="sup__grid">
            {support.map((c) => (
              <article className={`sup__card${c.primary ? ' is-primary' : ''}`} key={c.title}>
                <span className="sup__ico"><Icon name={c.icon} size={24} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                {c.href.startsWith('/') ? <Link to={c.href}>{c.link}<Icon name="arrow" size={18} /></Link> : <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{c.link}<Icon name="arrow" size={18} /></a>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
