import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <SiteFooter className="footer">
      <div className="container">
        <div className="text-center">
          <p>Copyright © 2023 Dinesh Baraiya. All Rights Reserved.</p>
        </div>
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className={" goTop-btn " + (visible ? "visible" : "")}
        title="go to top"
      >
        <MdOutlineKeyboardArrowUp />
      </button>
    </SiteFooter>
  );
};

export default Footer;

const SiteFooter = styled.footer`
  margin-left: 270px;
  max-width: calc(100% - 270px);
  width: 100%;
  padding: 40px 0;

  p {
    margin-bottom: 0;
  }

  .goTop-btn {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    bottom: 40px;
    right: 40px;
    background-color: #20c997;
    color: #fff;
    text-align: center;
    border: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out;
    animation: goToTop 2s linear infinite alternate-reverse;

    &.visible {
      opacity: 1;
      visibility: visible;
    }

    svg {
      width: 30px;
      height: 30px;
    }

    @keyframes goToTop {
      0% {
        border-radius: 89% 11% 93% 7% / 10% 83% 17% 90%;
      }
      25% {
        border-radius: 74% 26% 73% 27% / 17% 68% 32% 83%;
      }
      50% {
        border-radius: 55% 45% 53% 47% / 31% 53% 47% 69%;
      }
      100% {
        border-radius: 31% 69% 29% 71% / 55% 30% 70% 45%;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-left: 0;
    max-width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .goTop-btn {
      width: 40px;
      height: 40px;
      right: 20px;
    }
  }
`;
