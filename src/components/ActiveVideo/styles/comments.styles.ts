import styled, { css } from "styled-components";

const userFig = css`
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  min-height: 4rem;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ShowCommentsLabel = styled.label`
  display: block;
  margin: 0 auto;
  width: max-content;
  text-align: center;
  display: none;

  @media (max-width: 42.5em) {
    display: block;
  }
`;

export const ShowCommentsCheckBox = styled.input`
  &:checked ~ .comments--container {
    display: block;
  }
`;

export const CommentsContainer = styled.div`
  @media (max-width: 42.5em) {
    display: none;
  }

  .add-comment__field {
    display: flex;
    gap: 1rem;

    .user-fig {
      ${userFig}
    }

    .text-field--form {
      width: 100%;
    }

    .text-field {
      width: 100%;
      resize: none;
      border-radius: 0.5rem;
      padding: 0.5rem;
      outline: none;
    }
  }

  .comments-list {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .comment-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    position: relative;
    transition: all 0.2s ease;

    .options-box {
      position: absolute;
      right: 0;
      top: 0.5rem;
      display: none;

      svg {
        font-size: 2rem;
      }

      &__list {
        position: absolute;
        z-index: 9;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        width: max-content;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background: ${({ theme }) => theme.colors.blackSecondary};
      }

      .options__action-btn {
        display: flex;
        align-items: center;
        text-transform: capitalize;
        gap: 0.5rem;

        span:first-child {
          display: flex;
          align-items: center;
        }

        svg {
          font-size: 1.8rem;
        }
      }
    }

    :hover .options-box {
      display: block;
    }

    &__author-fig {
      ${userFig}
    }

    &__details-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.2rem;
      padding-top: 0.35rem;
    }

    &__author-and--date {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    &__author-name {
    }

    &__date-creation {
      font-size: ${({ theme }) => theme.size.xsm};
      color: ${({ theme }) => theme.colors.gray};
    }

    &__text {
    }

    &__author-name,
    &__text {
      font-size: ${({ theme }) => theme.size.sm};
    }
  }
`;
