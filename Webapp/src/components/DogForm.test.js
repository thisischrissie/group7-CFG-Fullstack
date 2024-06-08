import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; //Important for .toBeInTheDocument
import DogForm from './DogForm';
//tara

// DogForm component tests
test('renders the DogForm component', () => {
  
  // Render DogForm with array trails
  render(<DogForm trails={[]} />);

  const formTitle = screen.getByText('Find your Perfect Route');
  expect(formTitle).toBeInTheDocument(); // Expects text to be on screen 
});

// No map component test due to dependency conflicts
