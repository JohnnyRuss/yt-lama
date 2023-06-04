import styled from "styled-components";

export const TopNavAddVideoAndUserFig = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
  margin-right: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2.6rem;
    }
  }

  .user-fig {
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 100%;
    overflow: hidden;

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
`;
