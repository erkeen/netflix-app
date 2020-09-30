import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CsNav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  background-color: ${(props) => props?.show};
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;

const CsLogo = styled.img`
  width: 80px;
  object-fit: contain;
`;

const CsAvatar = styled.img`
  width: 30px;
  object-fit: contain;
`;

// 0/0f
function NavBar() {
  const [show, setShow] = useState("none");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow("rgba(37, 37, 0.61)");
      } else {
        setShow("none");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <CsNav show={show}>
      <CsLogo
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt=""
      />
      <CsAvatar
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
        alt=""
      />
    </CsNav>
  );
}

export default NavBar;
