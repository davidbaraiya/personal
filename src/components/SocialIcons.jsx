import React from "react";
import styled from "styled-components";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";

const SocialIcons = ({ iconBlack }) => {
  return (
    <SocialIconsUl
      className={iconBlack ? "icon-black" : ""}
      data-aos="fade-right"
      data-aos-offset="0"
    >
      <li>
        <a
          href="https://www.linkedin.com/in/dinesh-baraiya-0a4a0520a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/davidbaraiya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/davidbaraiya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </li>
      <li>
        <a href="mailto:dineshbaraiya18@gmail.com">
          <AiOutlineMail />
        </a>
      </li>
    </SocialIconsUl>
  );
};

export default SocialIcons;

const SocialIconsUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 0;
  margin: auto 0 0 0;

  &.icon-black {
    justify-content: flex-start;

    svg {
      fill: #000;
    }
  }

  li svg {
    width: 20px;
    height: 20px;
    display: block;
    fill: #fff;
  }

  li a:hover svg {
    fill: #20c997;
  }
`;
