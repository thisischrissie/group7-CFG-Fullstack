import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropDownList from '../components/Dropdown';

//Dropdown tests
//Jest function
describe('DropDownList component', () => {
    it('renders correctly', () => {
        //This variable defines the props that will be passed to the DropDownList component during testing
      const dropdownProps = {
        options: ['Option 1', 'Option 2', 'Option 3'],
        onSelect: jest.fn(),
        placeholder: 'Select an option',
      };
  
      //find the select element in the rendered component
      const { getByRole } = render(<DropDownList {...dropdownProps} />);
  
      // Ensure the select element is rendered
      const selectElement = getByRole('combobox');
      expect(selectElement).toBeInTheDocument();
  
      // Ensure all options are rendered
      dropdownProps.options.forEach((option) => {
        const optionElement = getByRole('option', { name: option });
        expect(optionElement).toBeInTheDocument();
      });
    });
  });