import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import UserProfile from '../components/UserProfile';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders UserProfile component with loading state and user data', async () => {
  const mockUser = {
    name: 'John Doe',
    bio: 'A short bio',
    dogs: [
      { name: 'Buddy', images: ['dog-image.jpg'], bio: 'Buddy bio' }
    ]
  };

  fetchMock.mockResponseOnce(JSON.stringify(mockUser));

  render(<UserProfile />);

  // Check if loading state is displayed
  expect(screen.getAllByText(/loading/i)).toHaveLength(2);

  // Wait for the user data to be displayed
  await waitFor(() => expect(screen.queryAllByText(/loading/i)).toHaveLength(0));

  // Check if user data is displayed
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('A short bio')).toBeInTheDocument();
  expect(screen.getByText('Buddy')).toBeInTheDocument();
  expect(screen.getByText('Buddy bio')).toBeInTheDocument();
});