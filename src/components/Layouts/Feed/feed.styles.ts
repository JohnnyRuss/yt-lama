import styled from "styled-components";

const thumb_h = "28rem";
const thumb_w = "35rem";

export const FeedContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${thumb_w}, 1fr));
  grid-auto-rows: ${thumb_h};
  gap: 1rem;
  padding: 0.75rem;
`;
