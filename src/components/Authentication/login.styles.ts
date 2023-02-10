import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .auth-box {
    width: 30rem;
    height: 40rem;
    background: ${({ theme }) => theme.colors.darkGray};
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;
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
    }
  }

  .confirm-btn {
    padding: 0.8rem 2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;
