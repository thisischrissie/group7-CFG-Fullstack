import { render } from '@testing-library/react';
import About from './About';

//About page test
describe('About component', () => {
  it('renders correctly', () => {
    // Render the About component
    const { getByText } = render(<About />);

    // Check if the mission statement is rendered correctly
    const missionText = getByText('Our Mission:');
    expect(missionText).toBeInTheDocument();

    // Check if developer cards are rendered correctly
    const developerCards = ['Cecilia 🐾', 'Tara 🐶', 'Emily 🦴', 'Chrissie 🐕‍🦺', 'Grace 🐩'];
    developerCards.forEach((cardTitle) => {
      const cardTitleElement = getByText(cardTitle);
      expect(cardTitleElement).toBeInTheDocument();
    });

    // Ensure that the "Top" button is rendered
    const topButton = getByText('Top');
    expect(topButton).toBeInTheDocument();
  });
});
