import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner";
import About from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

const Home = () => {
  const [activeDark, setActiveDark] = useState(
    localStorage.getItem("activeDark") === "true" ? true : false
  );

  const toggleDarkMode = () => {
    setActiveDark((prevState) => {
      const newState = !prevState;
      localStorage.setItem("activeDark", newState);
      return newState;
    });
  };

  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 50,
    });
  }, []);

  return (
    <MainContent
      id="home"
      className={activeDark ? "active-dark main-content" : " main-content"}
    >
      <DarkBtn className="dark-mode-btn main-btn" onClick={toggleDarkMode}>
        {activeDark ? <MdLightMode /> : <MdOutlineDarkMode />}
      </DarkBtn>
      <Banner />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Contact />
    </MainContent>
  );
};

export default Home;

const MainContent = styled.div`
  margin-left: 270px;
  max-width: calc(100% - 270px);
  width: 100%;

  @media only screen and (max-width: 1024px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

const DarkBtn = styled.button`
  &.dark-mode-btn {
    position: fixed;
    top: 30px;
    right: 30px;
    background-color: #20c997;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    /* display: none; */
    transition: all 0.5s ease-in-out;

    svg {
      width: 100%;
      height: 100%;
      fill: #fff;

      path {
        stroke: #fff;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &.dark-mode-btn {
      top: 20px;
      right: 20px;
      width: 35px;
      height: 35px;
    }
  }
`;
