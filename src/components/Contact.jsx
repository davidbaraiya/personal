import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import SocialIcons from "./SocialIcons";
import ContactForm from "./ContactForm";

const Contact = () => {
  const titleName = {
    headName: "contact",
    subName: "get in touch",
  };
  return (
    <Section
      id="contact"
      className="contact-section pt-80 pb-80"
      style={{ background: "#F8F9FA", marginTop: "80px" }}
    >
      <div className="container">
        <Title titleName={titleName} />
        <div className="row">
          <div className="col-md-4 col-sm-5 col-12" data-aos="fade-up">
            <div className="left-side">
              <h5 className="mb-3 mb-sm-4">ADDRESS</h5>
              <div className="address">
                <p>
                  surat (394101), <br /> gujarat, <br /> india.
                </p>
              </div>
              <ul className="p-0 mb-3 mb-sm-5">
                <li>
                  <a
                    href="https://wa.me/9104630512"
                    className=" mb-0 d-flex align-items-center gap-2"
                  >
                    <BsWhatsapp />
                    9104630512
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:dineshbaraiya18@gmail.com"
                    className=" mb-0 d-flex align-items-center gap-2"
                    style={{ textTransform: "lowercase" }}
                  >
                    <AiOutlineMail />
                    dineshbaraiya18@gmail.com
                  </a>
                </li>
              </ul>
              <h5>FOLLOW ME</h5>
              <SocialIcons iconBlack={true} />
            </div>
          </div>
          <div className="col-md-8 col-sm-7 col-12">
            <div className="right-side mt-4 mt-sm-0">
              <h5 className="mb-3 mb-sm-4">SEND US A NOTE</h5>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  a {
    display: inline-block;
    color: #000;
    text-decoration: none;

    &:hover {
      color: #20c997;
    }
  }
  svg {
    width: 16px;
    height: 16px;
    display: inline-block;
  }

  @media screen and (max-width: 991px) {
    &.contact-section {
      margin-top: 40px !important;
    }
  }
`;
