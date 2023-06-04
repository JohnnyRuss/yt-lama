import styled from "styled-components";

export const SearchBox = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.75rem;

  .search-wrapper {
    width: 70%;
    height: 70%;
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: inherit;

    @media (max-width: 42.5em) {
      width: 100%;
    }
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

  .search-field__box {
    width: calc(100% - 5rem);
    height: 100%;
    position: relative;
    border-radius: inherit;

    .search-modal {
      position: absolute;
      z-index: 999;
      left: 0;
      right: 0;
      top: calc(100% + 0.5rem);
      border-radius: 0.75rem;
      padding: 0.75rem 0.5rem;
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.darkGray};
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      overflow: auto;
      max-height: 15rem;
      min-height: 4rem;

      ::-webkit-scrollbar {
        width: 1rem;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.darkGray};
      }

      ::-webkit-scrollbar-track {
        border-radius: 1rem;
        background: ${({ theme }) => theme.colors.gray};
      }

      p {
        cursor: pointer;
        transition: all 0.2s ease;
        padding: 0.5rem 0.25rem;
        border-radius: 0.5rem;
      }

      p:hover {
        background: ${({ theme }) => theme.colors.darkGray};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    input {
      width: 100%;
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
