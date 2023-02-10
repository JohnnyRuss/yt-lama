import styled, { css } from "styled-components";

const userFig = css`
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  min-height: 4rem;
  background: green;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CommentsContainer = styled.div`
  .add-comment__field {
    display: flex;
    gap: 1rem;

    .user-fig {
      ${userFig}
    }

    .text-field {
      width: 100%;
      resize: none;
      border-radius: 0.5rem;
      padding: 0.5rem;
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
