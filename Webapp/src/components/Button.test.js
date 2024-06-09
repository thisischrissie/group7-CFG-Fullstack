import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

// Button Test
describe('Button component', () => {
  // Test case: Button renders with provided props
  it('renders with provided props', () => {
    // Define test props
    const buttonProps = {
      buttonLink: jest.fn(), // Mock function for button click
      buttonName: 'Test Button',
      color: '#FF0000',
    };

    // Render the Button component with test props
    const { getByText } = render(<Button {...buttonProps} />);

    // Check if the button renders with the correct text content
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  // Test case: Button click event fires
  it('fires click event', () => {
    // Define test props
    const buttonProps = {
      buttonLink: jest.fn(), // Mock function for button click
      buttonName: 'Test Button',
      color: '#FF0000',
    };

    // Render the Button component with test props
    const { getByText } = render(<Button {...buttonProps} />);

    // Simulate button click
    fireEvent.click(getByText('Test Button'));

    // Expect the mock function to have been called
    expect(buttonProps.buttonLink).toHaveBeenCalled();
  });
});
