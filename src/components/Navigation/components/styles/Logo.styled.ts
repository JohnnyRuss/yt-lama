import styled from "styled-components";

export const Logo = styled.div`
  height: 100%;
  width: 20rem;

  .logo-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    width: 100%;

    .logo {
      height: 100%;
      width: max-content;
      overflow: hidden;
      margin-right: -2rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    .logo-text {
      ${({ theme }) => theme.size.base};
    }

    @media (max-width: 42.5em) {
      width: max-content;

      .logo-text {
        display: none;
      }
    }
  }
`;
