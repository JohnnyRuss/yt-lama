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

  const [openSearchModal, setOpenSearchModal] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>("");

  const providedResults = useAppSelector(({ videos }) => videos.titles);

  useEffect(() => {
    if (!searchKey) return;

    const timeout = setTimeout(() => {
      dispatch(getVideosTitles({ query: searchKey }));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchKey]);

  // function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
  //   console.log(e.currentTarget);
  //   if (e.currentTarget.closest(".search-modal")) {
  //     console.log(1);
  //   } else {
  //     console.log(2);
  //   }
  // }

  return (
    <Styled.SearchBox className="search-form">
      <div className="search-wrapper">
        <div className="search-field__box">
          <input
            type="text"
            placeholder="search"
            onFocus={() => setOpenSearchModal(true)}
            // onBlur={handleBlur}
            onChange={(e) => setSearchKey(e.target.value)}
            value={searchKey}
          />
          {openSearchModal && (
            <div className="search-modal">
              {providedResults.map((r) => (
                <p
                  onClick={() => {
                    setOpenSearchModal(false);
                    setSearchKey("");
                    navigate("/search", {
                      state: {
                        partial: searchKey,
                        full: r.title,
                      },
                    });
                  }}
                  key={r._id}
                >
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
