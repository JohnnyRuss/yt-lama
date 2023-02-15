import styled, { keyframes } from "styled-components";

const sp = keyframes`
    100%{
      transform: rotate(360deg);
    }
`;

export const Spin = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;

  svg {
    position: fixed;
    top: 50vh;
    font-size: 2.8rem;
    color: ${({ theme }) => theme.colors.blue};
    animation: ${sp} 1s linear infinite;
  }
`;
