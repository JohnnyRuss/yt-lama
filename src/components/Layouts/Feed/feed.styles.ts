import styled from "styled-components";

const thumb_h = "28rem";
const thumb_w = "35rem";

export const FeedContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${thumb_w}, 1fr));
  grid-auto-rows: ${thumb_h};
  gap: 2rem;
  padding: 1rem 0.75rem;

  @media (max-width: 42.5em) {
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;
