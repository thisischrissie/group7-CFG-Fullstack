import { render, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";

// RadioButton Test
describe("RadioButton component", () => {
  it("renders correctly", () => {
    // Define props for the RadioButton component
    const radioButtonProps = {
      name: "test",
      items: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
      ],
      onChange: jest.fn(), // Mock function for onChange event
      value: "Option 1", // Value of the selected radio button
    };

    // Render the RadioButton component with the defined props
    const { getByLabelText } = render(<RadioButton {...radioButtonProps} />);

    // Ensure that each radio button is rendered correctly
    radioButtonProps.items.forEach((item) => {
      const radioElement = getByLabelText(item.value);
      expect(radioElement).toBeInTheDocument();
      expect(radioElement).toHaveAttribute("type", "radio");
      expect(radioElement).toHaveAttribute("name", radioButtonProps.name);
      expect(radioElement).toHaveAttribute("value", item.value);
      expect(radioElement).toHaveAttribute(
        "id",
        `${radioButtonProps.name}${item.value}`
      );
      expect(radioElement).toHaveProperty(
        "checked",
        item.value === radioButtonProps.value
      );
    });
  });

  it("calls onChange handler when radio button is clicked", () => {
    // Define props for the RadioButton component
    const radioButtonProps = {
      name: "test",
      items: [
        { value: "Option 1" },
        { value: "Option 2" },
        { value: "Option 3" },
      ],
      onChange: jest.fn(), // Mock function for onChange event
      value: "Option 1", // Value of the selected radio button
    };

    // Render the RadioButton component with the defined props
    const { getByLabelText } = render(<RadioButton {...radioButtonProps} />);

    // Find and click on the second radio button
    const secondRadioElement = getByLabelText("Option 2");
    fireEvent.click(secondRadioElement);

    // Ensure that the onChange handler is called with the correct value
    expect(radioButtonProps.onChange).toHaveBeenCalledWith("Option 2");
  });
});
