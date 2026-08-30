import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the brand and the question the app asks', () => {
  render(<App />);
  expect(screen.getByText('WorthLater')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /is it really worth it\?/i })
  ).toBeInTheDocument();
});

test('carries the two links a store listing requires', () => {
  render(<App />);
  // The privacy policy is linked from the footer and from the home page, so
  // more than one match is the expected state.
  expect(screen.getAllByRole('link', { name: /privacy policy/i }).length)
    .toBeGreaterThan(0);
  expect(
    screen.getByRole('link', { name: /terms of use/i })
  ).toHaveAttribute('href', expect.stringContaining('apple.com/legal'));
});
