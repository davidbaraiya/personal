import React from "react";
import styled from "styled-components";
import Title from "./Title";
// import myCV from "../assets/docs/Dinesh-Baraiya-Resume-React.pdf";

const About = () => {
  const titleName = {
    headName: "about me",
    subName: "know me more",
  };

  const aboutMe = [
    {
      id: 1,
      label: "Name",
      value: "dinesh baraiya",
    },
    {
      id: 2,
      label: "Email",
      value: "dineshbariya18@gmail.com",
      email: true,
    },
    {
      id: 3,
      label: "contact",
      value: "9104630512",
    },
    {
      id: 4,
      label: "From",
      value: "gujarat, india ",
    },
  ];

  return (
    <section id="about" className="about-section pt-80">
      <div className="container">
        <Title titleName={titleName} />
        <Row className="row">
          <div className="col-md-7 col-12">
            <div className="left-side" data-aos="fade-up">
              <h3>
                I'm <span className="color-primary"> baraiya dinesh </span>{" "}
                frontend web developer
              </h3>
              <p>
                I help you build brand for your business at an affordable price.
                Thousands of clients have procured exceptional results while
                working with our dedicated team. when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Delivering work within time and budget which meets client's
                requirements is our moto.
              </p>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <ul className="right-side p-0" data-aos="fade-down">
              {aboutMe.map(({ label, value, id, email }) => (
                <li key={id} className="d-flex">
                  <label>{label} : </label>
                  <p className={email ? "text-lowercase" : "text-capitalize"}>
                    {value}
                  </p>
                </li>
              ))}
            </ul>
            {/* <a href={myCV} download className="main-btn" data-aos="zoom-in">
              download CV
            </a> */}
          </div>
        </Row>
      </div>
    </section>
  );
};

export default About;

const Row = styled.div`
  .right-side li {
    list-style-type: none;
    border-bottom: 1px solid #eaeaea;
    padding-top: 12px;
    padding-bottom: 12px;

    P {
      margin: 0;
    }
    label {
      font-weight: 600;
    }
  }
`;
