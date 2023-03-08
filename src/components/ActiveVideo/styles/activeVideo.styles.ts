import styled from "styled-components";

export const ActiveVideoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex: 1;
  padding: 1rem 0;

  @media (max-width: 80em) {
    flex-direction: column;
  }
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

    @media (max-width: 60em) {
      height: 44vw;
    }

    @media (max-width: 42.5em) {
      height: 52vw;
    }

    @media (max-width: 30em) {
      height: 60vw;
    }
  }

  .video-title {
  }

  .view--actions__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

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
      }

      .action-btn,
      .actionField .action-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.2rem;
      }

      .action-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.6rem;

        svg {
          font-size: 2rem;
        }
      }

      .action-btn .label {
        text-transform: capitalize;
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
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors.white};

      svg {
        font-size: 1.8rem;
      }

      &.subscribed {
        background: ${({ theme }) => theme.colors.gray};
      }
    }
  }

  .video-description {
    font-size: ${({ theme }) => theme.size.sm};

    .show-more--desc__btn {
      cursor: pointer;
      ${({ theme }) => theme.font.bold}
    }
  }
`;

export const SideBar = styled.aside`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem 1.5rem;

  @media (max-width: 80em) {
    width: 100%;

    .related-thumb {
      height: 22rem;
    }
  }

  @media (max-width: 61.25em) {
    .related-thumb {
      height: 16rem;
    }

    [data-thumbx-fig] {
      width: 30rem;
    }
  }
`;
