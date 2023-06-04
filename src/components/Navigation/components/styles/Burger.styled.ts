import styled from "styled-components";

export const Burger = styled.input`
  /* display: none; */
`;

export const BurgerLabel = styled.label`
  font-size: 2.4rem;
  cursor: pointer;
  display: none;
  height: max-content;
  width: max-content;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 100%;

  @media (max-width: 42.5em) {
    display: flex;
  }
`;
