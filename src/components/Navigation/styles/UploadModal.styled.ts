import styled from "styled-components";

export const UploadModal = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);

  .modal-window__wrapper {
    width: 48rem;
    height: 90%;
    border-radius: 0.75rem;
    background: ${({ theme }) => theme.colors.bg};
    position: relative;
    padding: 1.5rem 1rem;
    box-shadow: 0px 0px 20px 2px rgba(299, 299, 299, 0.2);
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 30em) {
    .modal-window__wrapper {
      width: 100%;
      height: 100%;
    }
  }

  .close-modal--btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.6rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .modal-heading {
    display: inline-block;
    width: 100%;
    font-size: ${({ theme }) => theme.size.bg};
    text-transform: capitalize;
    text-align: center;
  }

  .upload-form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    height: 100%;
    margin-top: 4rem;
    height: 100%;

    &::-webkit-scrollbar {
      display: none;
    }

    .file-field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .uploaded-video {
      width: 15rem;
      aspect-ratio: 16/9;
    }

    .uploaded-img {
      width: 10rem;
      height: 10rem;
      overflow: hidden;
      border-radius: 0.5rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    .inp-field {
      height: 3.5rem;
      min-height: 3.5rem;
    }

    .text-field {
      resize: none;
      /* min-height: 10rem; */
    }

    .inp-field,
    .text-field {
      border-radius: 0.5rem;
      outline: none;
      padding: 0.5rem;
      background: inherit;
      color: ${({ theme }) => theme.colors.white};
    }

    .upload-btn {
      margin-top: auto;
      margin-bottom: 1.75rem;
      padding: 1rem 0;
      border-radius: 0.5rem;
      transition: all 0.2s ease;
      background: red;

      :disabled {
        background: ${({ theme }) => theme.colors.gray};
        cursor: none;
      }

      :hover:not(:disabled) {
        filter: brightness(80%);
      }
    }
  }
`;
