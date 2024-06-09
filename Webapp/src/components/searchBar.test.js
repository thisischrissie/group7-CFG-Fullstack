import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchBar from "./searchBar";

// SearchBar component test
describe("SearchBar component", () => {
    test("renders and filters breeds and displays when user starts typing", () => {
      const breeds = ["Labrador", "Poodle", "Bulldog", "German Shepherd"];
      const mockOnSearchSelect = jest.fn();
  
      render(<SearchBar breeds={breeds} onSearchSelect={mockOnSearchSelect} />); // populates search by mock data passed as props
  
      // Type 'Lab' in the input field
      const inputField = screen.getByPlaceholderText("Search breeds...");
      // Simulating User Input here
      fireEvent.change(inputField, { target: { value: "Lab" } }); // using fireEvent.change() to trigger a change event on the input field with the specified value
  
      // Check if filtered suggestions are displayed
      const suggestion1 = screen.getByText("Labrador");
      const suggestion2 = screen.queryByText("Poodle"); // Expecting Poodle to not be in the list as it doesnt corrospond alphabetically
      expect(suggestion1).toBeInTheDocument();
      expect(suggestion2).toBeNull(); //Therefore poodle should be null as it shouldn't be present if searchbar is working correctly
  
      // Click on a suggestion
      fireEvent.click(suggestion1);
  
      // Check if onSearchSelect was called with the selected breed
      expect(mockOnSearchSelect).toHaveBeenCalledWith("Labrador");
    });
  });