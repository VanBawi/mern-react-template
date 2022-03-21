import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// import { FaCalendarAlt } from 'react-icons/fa';
// import { FaBell } from 'react-icons/fa';
// import { AiFillGift } from 'react-icons/ai';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
