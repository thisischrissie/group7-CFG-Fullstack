import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SmallProfilePic from './SmallProfilePic';

//Arrange
test('Renders images correctly', ()=>{
    render(
        <SmallProfilePic 
        src= 'image.jpeg'
        alt='Profile picture'

        />
    );
    const smallProfilePic = screen.getByRole('img');
    expect(smallProfilePic).toBeInTheDocument();

    const picAltText = screen.getByAltText('Profile picture');
    expect(picAltText).toBeInTheDocument();

    
})
