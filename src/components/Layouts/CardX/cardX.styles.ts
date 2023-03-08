import styled from "styled-components";

export const CardContainer = styled.div`
  height: 11rem;
  
  .thumb {
    display: flex;
    gap: 0.5rem;
    height: 100%;
    width: 100%;
  }

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
`;
