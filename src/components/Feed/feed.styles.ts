import styled from "styled-components";

const thumb_h = "28rem";
const thumb_w = "35rem";
const thumb_details_h = "8rem";

export const FeedContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${thumb_w}, 1fr));
  grid-auto-rows: ${thumb_h};
  gap: 1rem;
  padding: 0.75rem;

  .feed-thumb {
    height: ${thumb_h};
    width: 100%;
    aspect-ratio: 9/16;
  }

  .thumb-fig {
    height: calc(${thumb_h} - ${thumb_details_h});
    width: 100%;
    overflow: hidden;
    background: red;
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

    .thumb-channel__fig {
      width: 3.2rem;
      height: 3.2rem;
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
`;
