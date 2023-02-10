import styled from "styled-components";

export const ActiveVideoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex: 1;
  padding: 1rem 0;
`;

export const MainThread = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 4rem;

  .video-box {
    height: 30vw;
    width: 100%;
    background: red;

    .frame {
      width: 100%;
      height: 100%;
    }
  }

  .video-title {
  }

  .view--actions__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__views {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.5rem;
    }

    &__actions {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1.5rem;

      .actionField {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
        }

        .label {
          text-transform: capitalize;
        }
      }
    }
  }

  .channel-subscribe__container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &__chanel {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;

      .chanel-fig {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      .chanel-info {
        display: flex;
        flex-direction: column;

        span:last-child {
          font-size: ${({ theme }) => theme.size.sm};
        }
      }
    }

    &__subscribe {
      background: red;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      text-transform: capitalize;
    }
  }

  .video-description {
    font-size: ${({ theme }) => theme.size.sm};
  }
`;

export const SideBar = styled.aside`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .thumb {
    display: flex;
    gap: 0.5rem;
    height: 11rem;

    .thumb-fig {
      width: 40%;
      height: 100%;
      overflow: hidden;
      border-radius: 0.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .thumb-details {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      padding: 0.3rem 0;
      width: 60%;

      .thumb-chanel {
        font-size: ${({ theme }) => theme.size.sm};
      }

      .thumb--views--date__container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.75rem;
        font-size: ${({ theme }) => theme.size.xsm};
      }
    }
  }
`;
