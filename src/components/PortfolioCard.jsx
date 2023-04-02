import React from "react";
import styled from "styled-components";

const PortfolioCard = ({ curVal }) => {
  const { image, title, description, link } = curVal;

  return (
    <Card className="portfolio-card">
      <a
        href={link}
        target="_blank"
        className="img-wrapper mb-2"
        rel="noopener noreferrer"
      >
        <img src={image} alt={title} />
      </a>
      <div className="content">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default PortfolioCard;

const Card = styled.div`
  .img-wrapper {
    position: relative;
    transition: all 0.5s ease-in-out;
    display: block;
    border: 1px solid #000;
    background: #fff;

    
    img {
      transition: all 0.5s ease-in-out;
    }
    &::after {
      content: "View Demo";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      z-index: 1;
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: block;
      background-color: rgb(0 0 0 / 50%);
      z-index: 1;
      opacity: 0;
      transition: all 0.5s ease-in-out;
    }

    &:hover:after,
    &:hover:before {
      opacity: 1;
    }
    &:hover img {
      transform: scale(0.95);
    }
  }
`;
