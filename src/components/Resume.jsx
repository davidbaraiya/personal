import React from "react";
import styled from "styled-components";
import Title from "./Title";
import MySkill from "./MySkill";
// import { FaDownload } from "react-icons/fa";
import myEducationData from "../apis/myEducationData";
import myExperianceData from "../apis/myExperianceData";
// import myCV from "../assets/docs/Dinesh-Baraiya-Resume-React.pdf";

const Resume = () => {
  const titleName = {
    headName: "summery",
    subName: "resume",
  };

  return (
    <Section id="resume" className="resume-section pt-80">
      <div className="container">
        <Title titleName={titleName} />
        <div className="row">
          <div className="col-sm-6 col-12">
            <h2 className="mb-4">my education</h2>
            {myEducationData.map((curVal) => {
              const { id, years, degreeName, university, description } = curVal;
              return (
                <div className="edu-card" key={id} data-aos="fade-up">
                  <span>{years}</span>
                  <h4>{degreeName}</h4>
                  <p className="text-danger">{university}</p>
                  <p className="mb-0">{description}</p>
                </div>
              );
            })}
          </div>
          <div className="col-sm-6 col-12">
            <h2 className="mb-4">my experiance</h2>
            {myExperianceData.map((curVal) => {
              const { id, years, degreeName, university, description } = curVal;
              return (
                <div className="edu-card" key={id} data-aos="fade-down">
                  <span>{years}</span>
                  <h4>{degreeName}</h4>
                  <p className="text-danger">{university}</p>
                  <p className="mb-0">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
        <h3 className="mb-4">my skills</h3>
        <MySkill />
        {/* <div className="text-center" data-aos="zoom-in">
          <a href={myCV} download={myCV} className="main-btn">
            Download CV <FaDownload />
          </a>
        </div> */}
      </div>
    </Section>
  );
};

export default Resume;

const Section = styled.section`
  .edu-card {
    padding: 20px 15px;
    border: 1px solid #dee2e6;
    border-radius: 10px;
    background-color: #fff;
    margin: 30px 0;

    span {
      background-color: #20c997;
      font-weight: 400;
      padding: 2px 5px;
      border-radius: 5px;
      color: #fff;
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;
