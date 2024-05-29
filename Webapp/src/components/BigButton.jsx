import styled from "styled-components";

export const BigButton = styled.button`
  border-radius: 20px;
  border: 1px solid #60412a;
  background-color: #8a5d3d;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  font-family: "Varela Round", sans-serif;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostBigButton = styled(BigButton)`
  background-color: transparent;
  border-color: #ffffff;
`;
