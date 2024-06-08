import React from "react";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; //Important for .toBeInTheDocument
import BreedCard from "./BreedCard";
//tara

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
    const breedName = screen.getByText("Example Breed"); // Example data - testing if truw
    expect(breedName).toBeInTheDocument(); // Expects BreedName to be in document if true = test pass
  });