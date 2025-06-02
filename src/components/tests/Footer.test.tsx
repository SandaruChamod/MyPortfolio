import { render, screen } from '@testing-library/react';
import { test, expect, describe, vi, afterEach } from 'vitest';
import Footer from '../Footer';

describe('Footer Component', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('renders without crashing', () => {
    render(<Footer />);
    // Check if a known element from the Footer is present
    expect(screen.getByText(/All rights reserved./i)).toBeInTheDocument();
  });

  test('displays the current year in the copyright notice', () => {
    const mockYear = 2024;
    vi.spyOn(global, 'Date').mockImplementation(() => ({
      getFullYear: () => mockYear,
    }) as any); // Mocking Date object

    render(<Footer />);
    expect(screen.getByText(`© ${mockYear} Sandaru Kalapuge. All rights reserved.`)).toBeInTheDocument();
  });
});
