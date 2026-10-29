import { Link } from 'react-router-dom';
import { FAQ } from '../components/Sections';
import { Icon } from '../components/Icon';
import { comparison, enterprise, pricingFaqs, pricingPlans } from '../content';

export function PricingPage() {
  return (
    <>
      <section className="pr">
        <div className="container">
          <header className="pr__head">
            <span className="eyebrow">Pricing</span>
            <h1>Simple Pricing That <span className="accent">Grows With You</span></h1>
            <p>Flexible plans designed for different stages of growth. Start simple and upgrade when you need to.</p>
          </header>
        </div>
      </section>

      <section className="pr-table">
        <div className="container">
          <div className="pr-table__wrap" tabIndex={0} role="region" aria-label="Plan comparison table, scrollable">
            <table>
              <caption className="sr-only">Feature comparison across ClassLms plans</caption>
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  {pricingPlans.map((p) => (<th scope="col" key={p.name}>{p.name}</th>))}
                </tr>
              </thead>
              <tbody>
                <tr className="pr-table__price">
                  <th scope="row">
                    <span className="pr-table__label">
                      <span className="pr-table__ico"><Icon name="card" size={16} /></span>
                      Base price / month
                    </span>
                  </th>
                  {pricingPlans.map((p) => (
                    <td key={p.name}>{p.prefix ? `${p.prefix} ` : ''}{p.base}</td>
                  ))}
                </tr>
                <tr className="pr-table__price">
                  <th scope="row">
                    <span className="pr-table__label">
                      <span className="pr-table__ico"><Icon name="users" size={16} /></span>
                      Per active student
                    </span>
                  </th>
                  {pricingPlans.map((p) => (
                    <td key={p.name}>{p.perStudent.split(' / ')[0]}</td>
                  ))}
                </tr>
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row">
                      <span className="pr-table__label">
                        <span className="pr-table__ico"><Icon name={row.icon} size={16} /></span>
                        {row.feature}
                      </span>
                    </th>
                    {row.values.map((v, i) => (
                      <td key={pricingPlans[i].name}>
                        {v === true ? (
                          <>
                            <Icon name="check" size={18} className="pr-table__check" />
                            <span className="sr-only">Included</span>
                          </>
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="pr-table__cta">
                  <th scope="row"><span className="sr-only">Choose a plan</span></th>
                  {pricingPlans.map((p) => (
                    <td key={p.name}>
                      <Link to="/contact" className={`btn ${p.featured ? 'btn--primary' : 'btn--outline'}`}>{p.cta}</Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pr-ent">
        <div className="container">
          <div className="pr-ent__card">
            <div>
              <span className="eyebrow">{enterprise.eyebrow}</span>
              <h2>{enterprise.title}</h2>
              <p>{enterprise.text}</p>
            </div>
            <Link to="/contact" className="btn btn--primary btn--lg">Contact Us</Link>
          </div>
        </div>
      </section>

      <FAQ items={pricingFaqs} eyebrow="Pricing FAQ" title="Questions About Pricing" sub="Quick answers about how our plans and pricing work." wide />
    </>
  );
}
