'use client';

import { useApp } from '../../lib/context';
import { FadeIn } from '../FadeIn';
import './Services.css';

export const Services = () => {
  const { tr } = useApp();
  const s = tr.services;
  const list = tr.services_list;

  return (
    <section id="services" className="section-wrap">
      <FadeIn>
        <span className="section-tag">{s.tag}</span>
        <h2 className="section-title">{s.title}</h2>
        <p className="section-sub">{s.sub}</p>
      </FadeIn>

      <div className="services-grid">
        {list.map((svc, i) => (
          <FadeIn key={svc.name} delay={i * 0.05} className="service-card">
            <div className="service-icon no-select">{svc.icon}</div>
            <h3 className="service-title">{svc.name}</h3>
            <p className="service-desc">{svc.desc}</p>
            <div className="service-tags no-select">
              {svc.tags.map(tag => (
                <span key={tag} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
