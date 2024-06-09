import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component that uses the fadeIn animation
const FadeInDiv = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

const FadeIn = ({ children }) => {
  return <FadeInDiv>{children}</FadeInDiv>;
};

export default FadeIn;
