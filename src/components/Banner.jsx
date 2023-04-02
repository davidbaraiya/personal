import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import background from "../assets/images/background.jpg";
import { GrDown } from "react-icons/gr";
import { Link } from "react-scroll";
// import TypeWriterEffect from "react-typewriter-effect";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <Section id="home" className="banner-section">
      <Parallax
        bgImage={background}
        bgImageAlt="background"
        strength={300}
        style={{ height: "100vh" }}
        className="parallax-bg"
        data-aos="zoom-in"
      >
        <div className="inner-content" data-aos="zoom-in">
          <span>Welcome</span>
          <div className="d-flex">
            <h1 className="d-flex">
              i'm a
              <Typewriter
                options={{
                  strings: [
                    "Dinesh Baraiya",
                    "Web Designer",
                    "React Developer",
                    "Freelancer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>
          </div>
          <p>based in gujarat, india.</p>
          <Link to="contact" className="main-btn">
            hire me
          </Link>
        </div>

        <Link to="home" className="animated">
          <GrDown />
        </Link>
      </Parallax>
    </Section>
  );
};

export default Banner;

const Section = styled.section`
  .parallax-bg {
    position: relative;
    background-position: center;
    background-size: cover;
    transition: background 1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0 0 0 / 70%);
      display: block;
      z-index: 1;
    }
  }
  .inner-content {
    position: relative;
    color: #fff;
    z-index: 2;

    span {
      display: block;
      font-size: 24px;
      margin-bottom: 15px;
    }
    .main-btn {
      margin-top: 20px;
    }

    .Typewriter {
      color: #fff;
      display: flex;
      align-items: center;

      span {
        font-size: inherit;
        margin: 0 0 0 10px;
      }
    }
  }

  .animated {
    position: relative;
    color: #fff;
    animation: fadeInDown 1.5s infinite;
    -webkit-animation: fadeInDown 1.5s infinite;
    -moz-animation: fadeInDown 1.5s infinite;
    -o-animation: fadeInDown 1.5s infinite;
    z-index: 2;
    margin-top: 100px;
    display: block;

    svg {
      width: 25px;
      height: 25px;

      polyline {
        stroke: #fff;
      }
    }
  }

  @keyframes fadeInDown {
    0% {
      top: -40px;
      opacity: 0;
    }
    100% {
      top: 10px;
      opacity: 1;
    }
  }
`;
