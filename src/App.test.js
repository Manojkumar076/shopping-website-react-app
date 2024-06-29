import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shopping Website title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Shopping Website/i);
  expect(titleElement).toBeInTheDocument();
});

