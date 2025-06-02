import { test, expect, describe } from 'vitest';
import { skills } from '../skills'; // Adjusted path

describe('Skills Data', () => {
  test('is not empty', () => {
    expect(skills.length).toBeGreaterThan(0);
  });

  test('each skill has name (string) and category (string) properties', () => {
    skills.forEach(skill => {
      expect(typeof skill.name).toBe('string');
      expect(typeof skill.category).toBe('string');
    });
  });

  test('category property for each skill is one of the expected values', () => {
    const expectedCategories = ["frontend", "backend", "mobile", "tools", "ai"];
    skills.forEach(skill => {
      expect(expectedCategories).toContain(skill.category);
    });
  });
});
