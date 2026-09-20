import { ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { theme } from '../../configuration/theme';
import { About } from './About';

describe('About', () => {
  it('exibe os links sociais com nome acessível, nova aba e rel seguro', () => {
    render(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>
    );

    const links = screen.getAllByRole('link');
    expect(links.map((l) => l.getAttribute('aria-label'))).toEqual([
      'GitHub',
      'LinkedIn',
      'Instagram'
    ]);
    for (const link of links) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link.getAttribute('rel')).toContain('noopener');
    }
  });
});
