import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon, type IconName } from '../components/Icon';
import { contact, contactInterests, whatsappLink } from '../content';

type Values = { name: string; email: string; phone: string; interest: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unavailable';

const ENDPOINT = 'https://api.web3forms.com/submit';

const empty: Values = { name: '', email: '', phone: '', interest: contactInterests[0], message: '' };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Please enter a valid email address.';
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.';
  else if (!/^\+?[0-9\s\-()]{7,20}$/.test(v.phone.trim()) || v.phone.replace(/\D/g, '').length < 7) e.phone = 'Please enter a valid phone number.';
  if (!v.message.trim()) e.message = 'Please tell us how we can help.';
  return e;
}

/** '0703474125' -> '94703474125' (Sri Lankan mobile, international format for wa.me). */
function waNumber(n: string) {
  const d = n.replace(/\D/g, '');
  return d.startsWith('0') ? `94${d.slice(1)}` : d;
}

export function ContactPage() {
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [reason, setReason] = useState('');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#send-message') document.getElementById('ct-name')?.focus({ preventScroll: true });
  }, [hash]);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!contact.accessKey) {
      setStatus('unavailable');
      return;
    }

    const form = e.currentTarget as HTMLFormElement;
    const botcheck = (form.elements.namedItem('botcheck') as HTMLInputElement | null)?.checked ?? false;

    setStatus('sending');
    setReason('');
    try {
      // Only include the spam-trap field when it was actually ticked (bots), never as `false`.
      const payload: Record<string, unknown> = {
        access_key: contact.accessKey,
        subject: `New ClassLms enquiry from ${values.name.trim()}`,
        from_name: 'ClassLms website',
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        interested_in: values.interest,
        message: values.message.trim(),
      };
      if (botcheck) payload.botcheck = true;

      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setStatus('sent');
        setValues(empty);
      } else {
        // The mail service answered but refused: show its reason so the cause is visible.
        const msg = typeof data?.message === 'string' ? data.message : `The mail service replied with status ${res.status}.`;
        console.error('[contact form] Web3Forms rejected the message:', res.status, data);
        setReason(msg);
        setStatus('error');
      }
    } catch (err) {
      // No answer at all: offline, blocked by an ad blocker / firewall, or a browser (CORS) block.
      console.error('[contact form] Could not reach Web3Forms:', err);
      setReason('');
      setStatus('error');
    }
  };

  const details: { icon: IconName; label: string; value: string; href?: string }[] = [
    contact.email && { icon: 'mail' as IconName, label: 'Email', value: 'Email us', href: `mailto:${contact.email}` },
    contact.phone && { icon: 'clock' as IconName, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    contact.address && { icon: 'eye' as IconName, label: 'Address', value: contact.address },
    contact.hours && { icon: 'calendar' as IconName, label: 'Hours', value: contact.hours },
  ].filter(Boolean) as { icon: IconName; label: string; value: string; href?: string }[];

  return (
    <section className="ct" id="contact-page">
      <div className="container">
        <header className="ct__head">
          <span className="eyebrow">Contact</span>
          <h1>Get In Touch <span className="accent">With Us</span></h1>
          <p>Questions about ClassLms, pricing or setting up your classes or institute? Send us a message and we will get back to you.</p>
        </header>

        <div className="ct__grid">
          <aside className="ct__side">
            {details.map((d) => (
              <div className="ct__card" key={d.label}>
                <span className="ct__ico"><Icon name={d.icon} size={20} /></span>
                <div>
                  <small>{d.label}</small>
                  {d.href ? <a href={d.href}>{d.value}</a> : <b>{d.value}</b>}
                </div>
              </div>
            ))}

            {contact.whatsapp && (
              <a
                className="ct__wa"
                href={`https://wa.me/${waNumber(contact.whatsapp)}?text=${encodeURIComponent('Hello, I have a question about ClassLms.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ct__wa-ico"><Icon name="whatsapp" size={24} /></span>
                <span>
                  <b>Chat on WhatsApp</b>
                  <small>Message us directly</small>
                </span>
                <Icon name="arrow" size={18} className="ct__wa-arrow" />
              </a>
            )}

            <Link to="/faq" className="ct__card ct__card--link">
              <span className="ct__ico"><Icon name="help" size={20} /></span>
              <div>
                <small>Quick answers</small>
                <b>Read the FAQ</b>
              </div>
              <Icon name="arrow" size={18} className="ct__arrow" />
            </Link>
            <Link to="/pricing" className="ct__card ct__card--link">
              <span className="ct__ico"><Icon name="card" size={20} /></span>
              <div>
                <small>Plans</small>
                <b>See pricing</b>
              </div>
              <Icon name="arrow" size={18} className="ct__arrow" />
            </Link>
            <Link to="/how-it-works" className="ct__card ct__card--link">
              <span className="ct__ico"><Icon name="book" size={20} /></span>
              <div>
                <small>Learn more</small>
                <b>How ClassLms works</b>
              </div>
              <Icon name="arrow" size={18} className="ct__arrow" />
            </Link>
          </aside>

          <form id="send-message" className="ct__form" onSubmit={onSubmit} noValidate aria-labelledby="ct-form-title">
            <h2 id="ct-form-title">Send us a message</h2>

            <div className="ct__row">
              <div className="ct__field">
                <label htmlFor="ct-name">Full name <span aria-hidden="true">*</span></label>
                <input id="ct-name" type="text" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'ct-name-err' : undefined} />
                {errors.name && <p className="ct__err" id="ct-name-err">{errors.name}</p>}
              </div>
              <div className="ct__field">
                <label htmlFor="ct-email">Email <span aria-hidden="true">*</span></label>
                <input id="ct-email" type="email" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'ct-email-err' : undefined} />
                {errors.email && <p className="ct__err" id="ct-email-err">{errors.email}</p>}
              </div>
            </div>

            <div className="ct__row">
              <div className="ct__field">
                <label htmlFor="ct-phone">Phone <span aria-hidden="true">*</span></label>
                <input id="ct-phone" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={set('phone')} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'ct-phone-err' : undefined} />
                {errors.phone && <p className="ct__err" id="ct-phone-err">{errors.phone}</p>}
              </div>
              <div className="ct__field">
                <label htmlFor="ct-interest">I am interested in</label>
                <select id="ct-interest" value={values.interest} onChange={set('interest')}>
                  {contactInterests.map((o) => (<option key={o}>{o}</option>))}
                </select>
              </div>
            </div>

            <div className="ct__field">
              <label htmlFor="ct-message">Message <span aria-hidden="true">*</span></label>
              <textarea id="ct-message" rows={3} value={values.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'ct-message-err' : undefined} />
              {errors.message && <p className="ct__err" id="ct-message-err">{errors.message}</p>}
            </div>

            <input type="checkbox" name="botcheck" className="ct__trap" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <button type="submit" className="btn btn--primary btn--lg ct__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : <>Send Message <Icon name="arrow" size={18} /></>}
            </button>

            <div role="status" aria-live="polite">
              {status === 'sent' && (
                <p className="ct__note ct__note--ok">Thank you! Your message has been sent. We will get back to you soon.</p>
              )}
              {status === 'error' && (
                <div className="ct__note ct__note--err">
                  <p>
                    {reason
                      ? 'Sorry, your message could not be sent.'
                      : 'Sorry, we could not send your message. Please check your connection, turn off any ad blocker for this site, and try again.'}
                  </p>
                  {reason && <p className="ct__why">Reason: {reason}</p>}
                  {whatsappLink('Hello, I have a question about ClassLms.') && (
                    <p>
                      You can also{' '}
                      <a href={whatsappLink('Hello, I have a question about ClassLms.')} target="_blank" rel="noopener noreferrer">
                        message us on WhatsApp
                      </a>
                      .
                    </p>
                  )}
                </div>
              )}
              {status === 'unavailable' && (
                <p className="ct__note">We are still setting up our contact channels. Please check back soon or browse our FAQ in the meantime.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
