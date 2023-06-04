import styled from "styled-components";

export const SideBarUserAuthAndLogout = styled.div`
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
      background: red;

      img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        object-position: top;
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
