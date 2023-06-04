import styled from "styled-components";

const thumb_details_h = "8rem";
const thumb_h = "28rem";

export const CardContainer = styled.div`
  width: min(100%, 40rem);

  .feed-thumb {
    height: ${thumb_h};
    width: 100%;
    aspect-ratio: 9/16;
  }

  .thumb-fig {
    height: calc(${thumb_h} - ${thumb_details_h});
    width: 100%;
    overflow: hidden;
    border-radius: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .thumb-details {
    height: ${thumb_details_h};
    padding: 0.75rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    position: relative;

    .thumb-channel__fig {
      min-width: 3.2rem;
      min-height: 3.2rem;
      max-width: 3.2rem;
      max-height: 3.2rem;
      aspect-ratio: 1/1;
      border-radius: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .thumb-identifier {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;

      &__title {
        font-size: ${({ theme }) => theme.size.bg};
        padding-top: 0.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      &__channel {
        font-size: ${({ theme }) => theme.size.sm};

        &::first-letter {
          text-transform: capitalize;
        }
      }

      &__views {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        font-size: ${({ theme }) => theme.size.xsm};
      }
    }
  }

  .delete-btn {
    background: red;
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: capitalize;
    margin-left: auto;
    color: ${({ theme }) => theme.colors.white};

    svg {
      font-size: 2rem;
    }
  }

  @media (max-width: 30em) {
    .delete-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
