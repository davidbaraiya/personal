import { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import portfolioData from "../apis/portfolioData";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const [category, setCategory] = useState(portfolioData);
  const [active, setActive] = useState(null);

  const handleCategory = (cat) => {
    const filterCat = portfolioData.filter((item) => {
      return item.category === cat;
    });
    setCategory(filterCat);
    setActive(cat);
  };

  const titleName = {
    headName: "portfolio",
    subName: "my work",
  };

  return (
    <Section id="portfolio" className="portfolio-section pt-80">
      <div className="container">
        <Title titleName={titleName} />
        <div className="tabs d-flex justify-content-center mb-4 mb-md-5 gap-3">
          <button
            className={`main-btn ${active === "webDesign" ? "active" : ""}`}
            onClick={() => handleCategory("webDesign")}
          >
            web design
          </button>
          <button
            className={`main-btn ${active === "reactApp" ? "active" : ""}`}
            onClick={() => handleCategory("reactApp")}
          >
            react app
          </button>
        </div>
        <div className="row portfolio-row">
          {category.map((curVal) => (
            <div
              className="col-md-4 col-sm-4 col-12"
              key={curVal.id}
              data-aos="zoom-in"
            >
              <PortfolioCard curVal={curVal} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;

const Section = styled.section`
  .portfolio-row {
    gap: 20px 0;
  }
`;
