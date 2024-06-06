import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; //Important for .toBeInTheDocument
import BreedCard from "./BreedCard";
import Banner from "./dogFactAPI";
import SearchBar from "./searchBar";
import DogForm from './DogForm';

// DDog Banner component test
describe("Banner component", () => {
  test("renders a dog fact on the screen", async () => {
    // Fetch function to return dummy data
    global.fetch = jest.fn().mockResolvedValue({
      // Ensures that when fetch is called within the component, it resolves with the specified data
      ok: true,
      json: () => Promise.resolve({ facts: ["Fact 1", "Fact 2", "Fact 3"] }),
    });

    render(<Banner />); //render component

    // Wait for the dog fact to be displayed
    const factElement = await screen.findByText(/fact/i);

    // Check if the fact is displayed
    expect(factElement).toBeInTheDocument();
  });
});

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

// BreedCard component tests
test("renders the BreedCard component", () => {

  // Render card with mock data
  render(
    <BreedCard
      imageUrl="example.jpg"
      imageAlt="Example Dog"
      dogBreed="Example Breed"
    />
  ); // Adjust props as needed
  const breedName = screen.getByText("Example Breed"); // Adjust text to match what's on the front side of the card
  expect(breedName).toBeInTheDocument(); // Expects BreedName to be in document if true = test pass
});

// DogForm component tests
test('renders the DogForm component', () => {
  
  // Render DogForm with array trails
  render(<DogForm trails={[]} />);

  const formTitle = screen.getByText('Find your Perfect Route');
  expect(formTitle).toBeInTheDocument(); // Expects text to be on screen 
});

// No map component test due to dependency conflicts