'use client';

import { GitHubIcon, TelegramIcon, CornerArrowIcon } from '../icons';
import { EXT_LINK_PROPS } from '../../lib/constants';
import { socialLinks } from '../../data/site';
import { useApp } from '../../lib/context';
import { FadeIn } from '../FadeIn';
import Image from 'next/image';
import './About.css';

export const About = () => {
  const { tr } = useApp();
  const a = tr.about;

  const teamList = a.team_list || [];

  return (
    <FadeIn>
      <section id="about" className="section-wrap">
        <div className="animate-fade-in-up">
          <span className="section-tag">{a.tag}</span>
          <h2 className="section-title">{a.title}</h2>
          <p className="section-sub">{a.sub}</p>
        </div>

        <div className="about-two-col about-fade-el">
          <div>
            <p className="about-descr-text">
              {a.p1_intro} <strong className="about-descr-bold">{a.p1_bold}</strong> {a.p1_rest}
            </p>
            <p className="about-descr-text">
              {a.p2} <strong className="about-descr-bold">{a.p2_bold}</strong>
            </p>

            {/* GitHub */}
            <a href={socialLinks.github} {...EXT_LINK_PROPS} className="about-social-card">
              <div className="about-gh-icon-wrapper">
                <GitHubIcon size={18} className="about-gh-icon" />
              </div>
              <div className="about-card-body">
                <div className="about-card-title">github.com/vexorteam</div>
                <div className="about-card-subtitle">{a.github_sub}</div>
              </div>
              <CornerArrowIcon />
            </a>

            {/* Telegram */}
            <a
              href={socialLinks.telegram}
              {...EXT_LINK_PROPS}
              className="about-social-card tg-card-bg"
            >
              <div className="tg-icon-wrapper">
                <TelegramIcon />
              </div>
              <div className="about-card-body">
                <div className="tg-card-title">{socialLinks.telegramDisplay}</div>
                <div className="about-card-subtitle">{a.telegram_sub}</div>
              </div>
              <CornerArrowIcon stroke="currentColor" className="tg-arrow-icon" />
            </a>
          </div>

          {/* Process */}
          <div className="about-process-container">
            <div className="about-process-title no-select">{a.process_title}</div>
            {(a.process || []).map((step, i, arr) => {
              const isLast = i === arr.length - 1;
              return (
                <div key={step.n} className={`about-process-step ${isLast ? 'last' : ''}`}>
                  <span className="about-process-num no-select">{step.n}</span>
                  <div>
                    <div className="about-process-step-label">{step.label}</div>
                    <div className="about-process-step-desc">{step.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="team-grid about-fade-team-el">
          {teamList.map((m, i) => {
            const currentSkills = m.skills || [];
            const hasSkills = currentSkills.length > 0;

            const thisPlaceholder = socialLinks.placeholder;
            const avatarUrl = m.avatar || `${thisPlaceholder}?id=${i}`;

            return (
              <div
                key={m.name}
                className="team-member-card"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <Image
                  src={avatarUrl || '/assets/avatar-placeholder.jpg'}
                  alt={m.name}
                  width={60}
                  height={60}
                  className="team-member-avatar no-select"
                  priority={false}
                />
                <div className="team-member-name">{m.name}</div>
                <div className="team-member-role no-select">{m.role}</div>
                <div className={`team-member-desc ${hasSkills ? 'has-skills' : ''}`}>{m.desc}</div>

                {hasSkills && (
                  <div className="team-member-skills no-select">
                    {currentSkills.map(s => (
                      <span key={s} className="team-member-skill-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </FadeIn>
  );
};
