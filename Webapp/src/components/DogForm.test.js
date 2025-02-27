import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import DogForm from './DogForm';

// DogForm component tests
test('renders the DogForm component', () => {
  
  // Render DogForm with array trails
  render(<DogForm trails={[]} />);

  const formTitle = screen.getByText('Find your Perfect Route');
  expect(formTitle).toBeInTheDocument(); // Expects text to be on screen 
});

// No map component test due to dependency conflicts
