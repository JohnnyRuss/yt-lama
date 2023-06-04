import styled from "styled-components";

export const SideBar = styled.nav`
  height: calc(100vh - 5rem);
  position: sticky;
  top: 5rem;
  overflow: auto;
  width: 23rem;
  min-width: 23rem;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.colors.bg};

  @media (max-width: 42.5em) {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
