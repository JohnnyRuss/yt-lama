import styled from "styled-components";

export const TopNav = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: sticky;
  z-index: 9;
  top: 0;
  background: ${({ theme }) => theme.colors.bg};
`;
