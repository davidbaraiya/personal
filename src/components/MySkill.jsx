import React from "react";
import styled from "styled-components";
import skills from "../apis/skillsData";

const MySkill = () => {
  return (
    <MySkillDiv className="my-skill">
      <div className="row justify-content-center">
        {skills.map(({ id, name, image, color }) => (
          <div
            className="col-md-3 col-sm-3 col-4 mb-5"
            key={id}
            data-aos="zoom-in"
          >
            <div className="skill-div d-flex align-items-center gap-3">
              <div
                className="skill-logo-wrapper"
                style={{
                  filter: `drop-shadow(0 5px 15px #${color} )`,
                }}
              >
                <img src={image} alt={name} />
              </div>
              <span className="label" style={{ color: `#${color}` }}>
                {name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </MySkillDiv>
  );
};

export default MySkill;

const MySkillDiv = styled.div`
  .skill-logo-wrapper {
    width: 50px;
    height: 50px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .label {
    font-size: 20px;
    font-weight: 600;
  }

  @media screen and (max-width: 991px) {
    .skill-logo-wrapper {
      width: 30px;
      height: 30px;
    }
    .row.justify-content-center {
      justify-content: flex-start !important;
    }
  }

  @media screen and (max-width: 768px) {
    .skill-div {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .label {
      font-size: 14px;
      font-weight: 500;
    }
  }

  @media screen and (max-width: 575px) {
    .skill-logo-wrapper {
      width: 24px;
      height: 24px;
    }
  }
`;
