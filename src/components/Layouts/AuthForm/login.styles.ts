import styled, { css } from "styled-components";

export const AuthFormsContainer = styled.div<{ isModal?: boolean }>`
  width: 30rem;
  min-height: 40rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 0.5rem;

  ${({ isModal, theme }) =>
    isModal &&
    css`
      position: fixed;
      z-index: 9;
      top: 10rem;
      left: calc(50% - 15rem);

      &::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(3px);
      }
    `}

  .close-modal--btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.4rem;
  }

  .auth-head {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.white};

    span:first-child {
      font-size: ${({ theme }) => theme.size.bg};
      font-weight: ${({ theme }) => theme.font.medium};
    }
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    .inp-field {
      height: 3rem;
      border-radius: 0.5rem;
      padding: 0.5rem;
      background: inherit;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) =>
        theme.mode === "dark" ? theme.colors.txt : theme.colors.bg};
    }
  }

  .confirm-btn {
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  .devider {
    color: ${({ theme }) => theme.colors.white};
  }
`;
