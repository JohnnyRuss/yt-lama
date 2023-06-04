import styled, { css } from "styled-components";

const shadowBorder = css`
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.5rem;
    height: 0.1rem;
    background: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const SideBarFeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  ${shadowBorder};

  .list-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    :hover {
      background: ${({ theme }) =>
        theme.mode === "dark" ? theme.colors.darkGray : theme.colors.gray};
      color: ${({ theme }) => theme.colors.softGray};
    }
  }

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
  }
`;
