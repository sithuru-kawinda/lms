import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { nav } from '../content';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { useScrolled } from './hooks';

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav${scrolled || open ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {nav.map((n) => (
            <NavLink key={n.href} to={n.href} end={n.href === '/'}>{n.label}</NavLink>
          ))}
        </nav>
        <div className="nav__actions">
          <Link to="/contact#send-message" className="btn btn--primary">Get Started</Link>
        </div>
        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
      {open && (
        <div className="nav__drawer">
          {nav.map((n) => (
            <NavLink key={n.href} to={n.href} end={n.href === '/'} onClick={() => setOpen(false)}>{n.label}</NavLink>
          ))}
          <Link to="/contact#send-message" className="btn btn--primary btn--block" onClick={() => setOpen(false)}>Get Started</Link>
        </div>
      )}
    </header>
  );
}
