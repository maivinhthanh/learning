import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import HomePage from './HomePage';

test('loads and displays greeting', () => {
  // ARRANGE
  render(<HomePage />);

  const title = screen.getByTestId('title');

  // ASSERT
  expect(title).toHaveTextContent('We turn ideas');
});
