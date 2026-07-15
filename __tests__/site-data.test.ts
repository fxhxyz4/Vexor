import { budgetBrackets } from '../app/data/pricing';
import { socialLinks } from '@/app/data/site';
import uk from '@/app/i18n/uk.json';
import en from '@/app/i18n/en.json';

describe('site data integrity', () => {
  describe('socialLinks', () => {
    it('should have all required fields', () => {
      expect(socialLinks.telegram).toMatch(/^https?:\/\//);
      expect(socialLinks.github).toMatch(/^https?:\/\//);
      expect(socialLinks.email).toMatch(/^mailto:/);
      expect(socialLinks.emailDisplay).toContain('@');
      expect(socialLinks.telegramDisplay).toMatch(/^@/);
      expect(socialLinks.location).toMatch(/^https?:\/\//);
    });
  });

  describe('services_list', () => {
    it('should have 6 services in uk', () => {
      expect(uk.services_list).toHaveLength(6);
    });
    it('should have 6 services in en', () => {
      expect(en.services_list).toHaveLength(6);
    });
    it('each service should have required fields', () => {
      uk.services_list.forEach(s => {
        expect(s.icon).toBeTruthy();
        expect(s.name).toBeTruthy();
        expect(s.desc).toBeTruthy();
        expect(Array.isArray(s.tags)).toBe(true);
      });
    });
  });

  describe('work.projects_list', () => {
    it('should have 4 projects in uk', () => {
      expect(uk.work.projects_list).toHaveLength(4);
    });
    it('should have 4 projects in en', () => {
      expect(en.work.projects_list).toHaveLength(4);
    });
    it('each project should have required fields', () => {
      uk.work.projects_list.forEach(p => {
        expect(p.slug).toBeTruthy();
        expect(p.type).toBeTruthy();
        expect(p.name).toBeTruthy();
        expect(p.desc).toBeTruthy();
        expect(p.gradient).toBeTruthy();
        expect(Array.isArray(p.stack)).toBe(true);
      });
    });
  });

  describe('about.team_list', () => {
    it('should have 6 team members in uk', () => {
      expect(uk.about.team_list).toHaveLength(6);
    });
    it('should have 6 team members in en', () => {
      expect(en.about.team_list).toHaveLength(6);
    });
    it('each member should have required fields and valid generated initials', () => {
      uk.about.team_list.forEach(m => {
        expect(m.name).toBeTruthy();
        expect(m.role).toBeTruthy();
        expect(m.desc).toBeTruthy();
        expect(Array.isArray(m.skills)).toBe(true);
        expect(m.skills).toHaveLength(3);

        const initials = m.name
          .split(' ')
          .map(word => word.charAt(0))
          .join('')
          .replace(/[^a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ]/g, '');

        expect(initials.length).toBeGreaterThanOrEqual(1);
        expect(initials.length).toBeLessThanOrEqual(2);
      });
    });
  });

  describe('faq', () => {
    it('should have 6 items in uk', () => {
      expect(uk.faq.items).toHaveLength(6);
    });
    it('should have 6 items in en', () => {
      expect(en.faq.items).toHaveLength(6);
    });
    it('each item should have question and answer', () => {
      uk.faq.items.forEach(item => {
        expect(item.q).toBeTruthy();
        expect(item.a.length).toBeGreaterThan(20);
      });
    });
  });

  describe('contact budget options (from pricing config)', () => {
    it('should have budget brackets configured', () => {
      expect(budgetBrackets).toBeTruthy();
    });

    it('each bracket in each currency should have correct structure', () => {
      Object.values(budgetBrackets).forEach(bracketsList => {
        expect(Array.isArray(bracketsList)).toBe(true);
        expect(bracketsList.length).toBeGreaterThan(0);

        bracketsList.forEach(b => {
          expect(b.value).toBeTruthy();
          expect(b.label).toBeTruthy();
          expect(b.label.uk).toBeTruthy();
          expect(b.label.en).toBeTruthy();
        });
      });
    });

    it('UAH budget labels should contain Ukrainian currency symbol "грн"', () => {
      const uahBrackets = budgetBrackets.UAH || budgetBrackets.UAH;
      expect(uahBrackets).toBeDefined();

      uahBrackets.slice(0, -1).forEach(b => {
        expect(b.label.uk).toContain('грн');
      });
    });

    it('USD budget labels should contain dollar sign "$"', () => {
      const usdBrackets = budgetBrackets.USD || budgetBrackets.USD;
      expect(usdBrackets).toBeDefined();

      usdBrackets.slice(0, -1).forEach(b => {
        expect(b.label.en).toContain('$');
      });
    });
  });

  describe('i18n completeness', () => {
    it('uk and en should have same top-level keys', () => {
      const ukKeys = Object.keys(uk).sort();
      const enKeys = Object.keys(en).sort();
      expect(ukKeys).toEqual(enKeys);
    });
  });
});
