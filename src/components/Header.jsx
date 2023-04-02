import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import myProfile from "../assets/images/myProfile.jpeg";
import SocialIcons from "./SocialIcons";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [active, setActive] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLink = useMemo(
    () => [
      {
        id: 1,
        link: "home",
        path: "home",
      },
      {
        id: 2,
        link: "about me",
        path: "about",
      },
      {
        id: 3,
        link: "what i do",
        path: "servies",
      },
      {
        id: 4,
        link: "remume",
        path: "resume",
      },
      {
        id: 5,
        link: "portfolio",
        path: "portfolio",
      },
      {
        id: 6,
        link: "contact us",
        path: "contact",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const links = navLink.map(({ path }, i) => ({
        section: document.getElementById(path),
        index: i,
      }));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      links.forEach(({ section, index }) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActive(index);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLink]);

  const MenuStyle = toggleMenu
    ? { transform: "translateX(240px)" }
    : { transform: "translateX(0)" };

  return (
    <>
      <MobileMenu
        className="mobile-menu"
        style={MenuStyle}
        onClick={() =>
          toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
        }
      >
        {toggleMenu ? <GrClose /> : <HiOutlineMenuAlt1 />}
      </MobileMenu>
      <HeaderStyle
        className={"side-header " + (toggleMenu ? " active-menu" : "")}
      >
        <div
          className="img-wrapper-div mx-auto"
          data-aos="fade-right"
          data-aos-offset="0"
        >
          <img src={myProfile} alt="myProfile" className="w-100" />
        </div>
        <div className="profile-name" data-aos="zoom-in">
          Dinesh Baraiya
        </div>
        <ul className=" nav-links p-0" data-aos="fade-up">
          {navLink.map(({ link, id, path }, i) => (
            <li key={id}>
              <Link
                to={path}
                smooth={true}
                duration={300}
                onClick={() => setActive(i)}
                className={active === i ? "active" : ""}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <SocialIcons />
      </HeaderStyle>
    </>
  );
};

export default Header;

const HeaderStyle = styled.header`
  max-width: 270px;
  width: 100%;
  background-color: #111418;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  padding: 30px 15px;
  color: #fff;
  text-align: center;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  z-index: 5;
  transition: all 0.5s ease-in-out;

  .img-wrapper-div {
    border-radius: 100%;
    width: 150px;
    height: 150px;
    border: 8px solid #343a40;
    margin-bottom: 20px;

    img {
      border-radius: 100%;
    }
  }
  .profile-name {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .nav-links li a {
    margin-bottom: 15px;
    transition: all 0.4s ease;
    text-decoration: none;
    display: block;
    color: #fff;

    &.active {
      color: #20c997;
    }
    &:hover {
      color: #20c997;
    }
  }

  @media only screen and (max-width: 1024px) {
    max-width: 250px;
    transform: translateX(-100%);

    &.active-menu {
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 768px) {
    .img-wrapper-div {
      width: 110px;
      height: 110px;
      border: 5px solid #343a40;
    }
    .profile-name {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;

const MobileMenu = styled.div`
  &.mobile-menu {
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: #20c997;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    display: none;
    transition: all 0.5s ease-in-out;

    svg {
      width: 100%;
      height: 100%;
      fill: #fff;

      path {
        stroke: #fff;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    display: flex !important;
  }
  @media only screen and (max-width: 768px) {
    &.mobile-menu {
      top: 20px;
      left: 20px;
      width: 35px;
      height: 35px;
    }
  }
`;
