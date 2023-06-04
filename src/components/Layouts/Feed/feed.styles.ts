import styled from "styled-components";

export const FeedContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-auto-rows: auto;
  gap: 2rem;
  padding: 1rem 0.75rem;

  @media (max-width: 42.5em) {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;
