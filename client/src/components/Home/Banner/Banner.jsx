import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios, { imgURL } from "../../../axios";

const CsHeader = styled.header`
  color: white;
  object-fit: contain;
  height: 500px;
  background-size: cover;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center center;
`;

const CsWrapContent = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const CsTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const CsBtn = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const CsDesc = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

const CsFade = styled.div`
  height: 7.4rem;
  margin-top: 193px;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 0.61),
    #111
  );
`;

function Banner({ apiEndpoint }) {
  const [randomMovie, setRandomMovie] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(apiEndpoint);
        setRandomMovie(data[Math.floor(Math.random() * data.length - 1)]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
    //   return () => {
    //       cleanup
    //   }
    // eslint-disable-next-line
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <CsHeader imgUrl={`${imgURL}${randomMovie?.backdrop_path}`}>
      {console.log(randomMovie)}

      <CsWrapContent>
        <CsTitle>
          {randomMovie?.title ||
            randomMovie?.name ||
            randomMovie?.original_name}
        </CsTitle>

        <div>
          <CsBtn>Play</CsBtn>
          <CsBtn>My List</CsBtn>
        </div>

        <CsDesc>{truncate(randomMovie?.overview, 150)}</CsDesc>
      </CsWrapContent>
      <CsFade />
    </CsHeader>
  );
}

export default Banner;
