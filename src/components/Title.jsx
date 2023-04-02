import React from "react";
import styled from "styled-components";

const Title = ({ titleName }) => {
  const { headName, subName } = titleName;

  return (
    <HeadTitle
      className="title-wrapper"
      data-aos="fade-zoom-in"
      data-aos-offset="50"
    >
      <h2>{headName}</h2>
      <p>{subName}</p>
    </HeadTitle>
  );
};

export default Title;

const HeadTitle = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  h2 {
    font-size: 132px !important;
    text-transform: uppercase;
    color: #dee3e4;
    font-weight: bold;
    opacity: 0.4;
    margin-bottom: 0;
    line-height: 1;
  }
  p {
    position: absolute;
    align-self: center;
    font-size: 34px;
    font-weight: 600;
    margin: 0;
    text-transform: capitalize;
    display: block;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -10px;
      background-color: #20c997;
      width: 50%;
      height: 3px;
      display: block;
      margin: 0;
      animation: line_moving 1s linear alternate-reverse infinite;
    }

    @keyframes line_moving {
      0% {
        width: 0%;
      }
      50% {
        width: 50%;
      }
      100% {
        width: 80%;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    h2 {
      font-size: 80px !important;
    }
  }
  @media only screen and (max-width: 575px) {
    h2 {
      font-size: 50px !important;
    }
    P {
      font-size: 18px;
    }
  }
`;
