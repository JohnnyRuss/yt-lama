/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getVideosTitles } from "../../../store/reducers/thunks/videoSlice.thunks";

import { BsSearch } from "react-icons/bs";
import * as Styled from "./styles/SearchBox.styled";

const SearchBox: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<boolean>(false);

  const providedResults = useAppSelector(({ videos }) => videos.titles);

  function handleClick(title: string) {
    setSearchKey("");
    setActiveSearch(false);

    navigate("/search", {
      state: {
        partial: searchKey,
        full: title,
      },
    });
  }

  function handleBodyClick(ev: MouseEvent) {
    if ((ev.target as Element).closest(".search-wrapper")) return;

    setSearchKey("");
    setActiveSearch(false);
  }

  useEffect(() => {
    if (!searchKey) return;

    if (!activeSearch) setActiveSearch(true);

    const timeout = setTimeout(() => {
      searchKey && dispatch(getVideosTitles({ query: searchKey }));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchKey]);

  useEffect(() => {
    activeSearch && document.addEventListener("click", handleBodyClick);

    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, [activeSearch]);

  return (
    <Styled.SearchBox className="search-form">
      <div className="search-wrapper">
        <div className="search-field__box">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearchKey(e.target.value)}
            value={searchKey}
          />
          {searchKey && (
            <div className="search-modal">
              {providedResults.map((r) => (
                <p onClick={() => handleClick(r.title)} key={r._id}>
                  {r.title}
                </p>
              ))}
            </div>
          )}
        </div>
        <button>
          <BsSearch />
        </button>
      </div>
    </Styled.SearchBox>
  );
};

export default SearchBox;
