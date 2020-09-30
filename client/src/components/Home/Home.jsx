import React from "react";
import styled from "styled-components";
import NavBar from "../AppBar/NavBar";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const CsContainer = styled.div`
  background-color: #111;
`;

function Home() {
  return (
    <CsContainer>
      <NavBar />
      <Banner apiEndpoint="/movies/action" />
      <Category title="Trending" apiEndpoint="/movies/trending" isLarge />
      <Category
        title="Netflix Originals"
        apiEndpoint="/movies/netflixOriginals"
      />
      <Category title="Top Rated" apiEndpoint="/movies/topRated" />
      <Category title="Action" apiEndpoint="/movies/action" />
      <Category title="Comedy" apiEndpoint="/movies/comedy" />
      <Category title="Horror" apiEndpoint="/movies/horror" />
      {/* <Category title="Romance" apiEndpoint="/movies/romance" /> */}
      <Category title="Documentaries" apiEndpoint="/movies/documentaries" />
    </CsContainer>
  );
}

export default Home;
