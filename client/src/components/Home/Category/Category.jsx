import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios, { imgURL } from "../../../axios";

const CsRow = styled.div`
  margin-left: 20px;
  color: white;
`;

const CsPoster = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::webkit-scrollbar {
    display: none;
  }
`;

const CsImg = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: ${({ isLarge }) => (isLarge ? "400px;" : "150px;")};
  margin-right: 10px;
  transition: transform 450ms;

  &:hover {
    transform: scale(1.08);
    cursor: pointer;
  }
`;

function Category({ title, apiEndpoint, isLarge }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(apiEndpoint);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [apiEndpoint]);

  return (
    <CsRow>
      <h2>{title}</h2>
      <CsPoster className="poster__scrollbar">
        {movies.map((movie) => (
          <CsImg
            key={movie.id}
            src={`${imgURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
            isLarge={isLarge}
          />
        ))}
      </CsPoster>
    </CsRow>
  );
}

export default Category;
