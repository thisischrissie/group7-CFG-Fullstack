import React from "react";
import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Banner from "./dogFactAPI";

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