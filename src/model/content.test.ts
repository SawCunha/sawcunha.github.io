import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { allExperiences } from './Experience';
import { projects } from './Project';
import { skillCategories, skills } from './Skill';

describe('conteúdo do portfólio', () => {
  it('todo ícone de skill existe em public/', () => {
    const missing = skills.filter((s) => !existsSync(join(process.cwd(), 'public', s.icon)));
    expect(missing.map((s) => s.icon)).toEqual([]);
  });

  it('toda skill tem categoria listada em skillCategories', () => {
    const invalid = skills.filter((s) => !skillCategories.includes(s.category));
    expect(invalid.map((s) => s.name)).toEqual([]);
  });

  it('toda experiência tem empresa e período', () => {
    for (const e of allExperiences.experiences) {
      expect(e.company).not.toBe('');
      expect(e.period).not.toBe('');
    }
  });

  it('descrições de projeto não contêm versões voláteis', () => {
    const volatile = projects.filter((p) => p.description.includes('SNAPSHOT'));
    expect(volatile.map((p) => p.name)).toEqual([]);
  });
});
