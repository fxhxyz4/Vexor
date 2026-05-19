import { services, projects, team, faq, budgetUAH, budgetUSD, stats } from '@/app/data/site';

describe('site data integrity', () => {
  describe('services', () => {
    it('should have 6 services', () => {
      expect(services).toHaveLength(6);
    });

    it('each service should have required fields', () => {
      services.forEach(service => {
        expect(service.icon).toBeTruthy();
        expect(service.name).toBeTruthy();
        expect(service.desc).toBeTruthy();
        expect(Array.isArray(service.tags)).toBe(true);
        expect(service.tags.length).toBeGreaterThan(0);
      });
    });
  });

  describe('projects', () => {
    it('should have at least 1 project', () => {
      expect(projects.length).toBeGreaterThan(0);
    });

    it('each project should have a valid link', () => {
      projects.forEach(project => {
        expect(project.link).toMatch(/^https?:\/\//);
      });
    });

    it('each project should have required fields', () => {
      projects.forEach(project => {
        expect(project.type).toBeTruthy();
        expect(project.name).toBeTruthy();
        expect(project.desc).toBeTruthy();
        expect(project.gradient).toBeTruthy();
        expect(Array.isArray(project.stack)).toBe(true);
      });
    });
  });

  describe('team', () => {
    it('should have 6 team members', () => {
      expect(team).toHaveLength(6);
    });

    it('each member should have required fields', () => {
      team.forEach(member => {
        expect(member.initials).toHaveLength(2);
        expect(member.name).toBeTruthy();
        expect(member.role).toBeTruthy();
        expect(member.desc).toBeTruthy();
        expect(Array.isArray(member.skills)).toBe(true);
        expect(member.skills).toHaveLength(3);
      });
    });
  });

  describe('faq', () => {
    it('should have at least 4 FAQ items', () => {
      expect(faq.length).toBeGreaterThanOrEqual(4);
    });

    it('each FAQ item should have question and answer', () => {
      faq.forEach(item => {
        expect(item.q).toBeTruthy();
        expect(item.a).toBeTruthy();
        expect(item.a.length).toBeGreaterThan(20);
      });
    });
  });

  describe('budget options', () => {
    it('UAH budget should have options', () => {
      expect(budgetUAH.length).toBeGreaterThan(0);
      budgetUAH.slice(0, -1).forEach(opt => expect(opt).toContain('₴'));
    });

    it('USD budget should have options', () => {
      expect(budgetUSD.length).toBeGreaterThan(0);
    });

    it('UAH and USD should have equal number of options', () => {
      expect(budgetUAH.length).toBe(budgetUSD.length);
    });
  });

  describe('stats', () => {
    it('should have 4 stats', () => {
      expect(stats).toHaveLength(4);
    });

    it('each stat should have num and label', () => {
      stats.forEach(stat => {
        expect(stat.num).toBeTruthy();
        expect(stat.label).toBeTruthy();
      });
    });
  });
});
