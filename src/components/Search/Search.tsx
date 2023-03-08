import React from "react";
import styled from "styled-components";

import { useAppSelector } from "../../store/hooks";
import { CardX } from "../Layouts";

const SeachContainer = styled.div`
  position: relative;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.75rem 1rem;

  .search-thumb {
    height: 22rem;
  }

  [data-thumbx-fig] {
    width: 40rem;
  }

  @media (max-width: 61.25em) {
    width: 100%;

    .search-thumb {
      height: 16rem;
    }

    [data-thumbx-fig] {
      width: 30rem;
    }
  }
`;

const Search: React.FC = () => {
  const results = useAppSelector(({ videos }) => videos.videos);
  return (
    <SeachContainer>
      {results.map((v) => (
        <CardX video={v} key={v._id} className="search-thumb" />
      ))}
    </SeachContainer>
  );
};

export default Search;
