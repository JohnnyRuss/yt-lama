import styled, { css } from "styled-components";

const top_nav_h = "5rem";
const logo_w = "20rem";

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

export const Nav = styled.nav`
  height: calc(100vh - ${top_nav_h});
  position: sticky;
  top: ${top_nav_h};
  overflow: auto;
  width: 23rem;
  min-width: 23rem;
  border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }

  .features-list {
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
  }
`;

export const UserAuthAndLogoutContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .authorised-user--box {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    .authorised-user--fig {
      min-width: 4rem;
      min-height: 4rem;
      max-width: 4rem;
      max-height: 4rem;
      border-radius: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .authorised-user__info--box {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      width: 100%;
    }

    .authorised-user__email {
    }

    .authorised-user__subscribers {
      font-size: ${({ theme }) => theme.size.sm};
    }
  }

  .sign-btn {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    text-transform: capitalize;

    .sign-icon--box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const TopNavContainer = styled.nav`
  height: ${top_nav_h};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: sticky;
  z-index: 9;
  top: 0;
  background: ${({ theme }) => theme.colors.bg};

  .logo-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    width: ${logo_w};

    .logo {
      height: 100%;
      width: max-content;
      overflow: hidden;

      img {
        width: auto;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    .logo-text {
      ${({ theme }) => theme.size.base}
    }
  }

  .search-form {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .search-wrapper {
      width: 70%;
      height: 70%;
      border-radius: 1.75rem;
      display: flex;
      align-items: center;
      overflow: hidden;
      border: 1px solid gray;
    }

    button {
      width: 5rem;
      height: 100%;
      border-radius: inherit;
      border-top-left-radius: 0rem;
      border-bottom-left-radius: 0rem;
      border-left: 1px solid gray;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input {
      width: calc(100% - 5rem);
      height: 100%;
      border: none;
      border-radius: inherit;
      border-top-right-radius: 0rem;
      border-bottom-right-radius: 0rem;
      outline: none;
      padding: 0 1.25rem;
    }
  }
`;
