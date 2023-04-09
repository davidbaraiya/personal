import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { BsFillPaletteFill } from "react-icons/bs";
import { AiOutlineDesktop, AiOutlineMobile } from "react-icons/ai";
import { FaReact } from "react-icons/fa";

const Services = () => {
  const titleName = {
    headName: "services",
    subName: "What I Do?",
  };

  const servicesMenu = [
    {
      id: 1,
      icon: <BsFillPaletteFill />,
      title: "Graphic Design",
      description:
        "From logos and branding to advertising and marketing materials, graphic designers use various design elements and techniques to bring ideas to life.",
    },
    {
      id: 2,
      icon: <AiOutlineDesktop />,
      title: "Web Design",
      description:
        "Proficient in design tools: I have experience using a variety of design tools, including Adobe Photoshop, Figma, to bring my visions to life and create exceptional web designs that exceed clients' expectations.",
    },
    {
      id: 3,
      icon: <FaReact />,
      title: "React App",
      description:
        "I am constantly seeking new challenges and opportunities to expand my skills and contribute to the growth and success of my clients' businesses. If you're looking for a talented and dedicated graphic designer to bring your React projects to life, I would love to hear from you.",
    },
    {
      id: 4,
      icon: <AiOutlineMobile />,
      title: "Responsive Design",
      description:
        "Knowledge of media queries to adjust the layout according to the screen size Understanding of the mobile-first approach and designing for smaller screens first",
    },
  ];

  return (
    <Section
      id="servies"
      className="service-section pt-80 pb-80"
      style={{ background: "#F8F9FA", marginTop: "80px" }}
    >
      <div className="container">
        <Title titleName={titleName} />
        <div className="row justify-content-center">
          {servicesMenu.map(({ id, icon, title, description }) => (
            <div className="col-md-6 col-12" key={id} data-aos="zoom-in-down">
              <div className="service-inner ">
                <div className="icon-div">{icon}</div>
                <div className="content">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;

const Section = styled.section`
  .row {
    gap: 50px 0;
  }
  .service-inner {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    .icon-div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      padding: 15px;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;

      svg {
        width: 100%;
        height: 100%;
        fill: #20c997;
      }
    }
    .content {
      flex: 1;

      p {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 991px) {
    margin-top: 40px !important;
  }
  @media screen and (max-width: 576px) {
    .service-inner {
      .content {
        flex: 1 1 100%;
      }
      .icon-div {
        width: 45px;
        height: 45px;
        padding: 10px;
      }
    }
  }
`;
