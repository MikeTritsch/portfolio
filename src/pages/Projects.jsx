import React, { useRef, useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import Nav from "../components/Nav";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <>
      <Nav />
      <Fade triggerOnce={true}>
        <h1 className="page-title">Projects</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="watch-togethr">
            <ul className="languages">
              <li>
                React
                <FaReact />
              </li>
              <li>
                JavaScript
                <IoLogoJavascript />
              </li>
              <li>
                Node
                <FaNodeJs />
              </li>
              <li>Express <SiExpress/></li>
              <li>MongoDB <SiMongodb/></li>
            </ul>
            <a
              className="links"
              href="https://github.com/MikeTritsch/watchtogethr"
              target="_blank"
            >
              <FaGithub className="git-icon wt-icon-color" />
            </a>
            <CiLink className="link-icon wt-icon-color" />

            <p className="project-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum accumsan tellus, quis malesuada est venenatis sit amet.
              Ut euismod lacus at nunc posuere, vel fermentum mi suscipit. Duis
              tristique tellus at ligula pulvinar consequat.
            </p>
          </SwiperSlide>
          <SwiperSlide className="brew">
            <ul className="languages">
              <li>
                React
                <FaReact />
              </li>
              <li>
                JavaScript
                <IoLogoJavascript />
              </li>
              <li>
                Node
                <FaNodeJs />
              </li>
              <li>Express <SiExpress/></li>
              <li>MongoDB <SiMongodb/></li>
            </ul>
            <a
              className="links"
              href="https://github.com/MikeTritsch/watchtogethr"
              target="_blank"
            >
              <FaGithub className="git-icon wt-icon-color" />
            </a>
            <CiLink className="link-icon wt-icon-color" />

            <p className="project-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum accumsan tellus, quis malesuada est venenatis sit amet.
              Ut euismod lacus at nunc posuere, vel fermentum mi suscipit. Duis
              tristique tellus at ligula pulvinar consequat.
            </p>
          </SwiperSlide>
          <SwiperSlide className="tech">
          <ul className="languages">
              <li>
                React
                <FaReact />
              </li>
              <li>
                JavaScript
                <IoLogoJavascript />
              </li>
              <li>
                Node
                <FaNodeJs />
              </li>
              <li>Express <SiExpress/></li>
              <li>MongoDB <SiMongodb/></li>
            </ul>
            <a
              className="links"
              href="https://github.com/MikeTritsch/watchtogethr"
              target="_blank"
            >
              <FaGithub className="git-icon wt-icon-color" />
            </a>
            <CiLink className="link-icon wt-icon-color" />

            <p className="project-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum accumsan tellus, quis malesuada est venenatis sit amet.
              Ut euismod lacus at nunc posuere, vel fermentum mi suscipit. Duis
              tristique tellus at ligula pulvinar consequat.
            </p>
          </SwiperSlide>
          <SwiperSlide className="weather">
          <ul className="languages">
              <li>
                React
                <FaReact />
              </li>
              <li>
                JavaScript
                <IoLogoJavascript />
              </li>
              <li>
                Node
                <FaNodeJs />
              </li>
              <li>Express <SiExpress/></li>
              <li>MongoDB <SiMongodb/></li>
            </ul>
            <a
              className="links"
              href="https://github.com/MikeTritsch/watchtogethr"
              target="_blank"
            >
              <FaGithub className="git-icon wt-icon-color" />
            </a>
            <CiLink className="link-icon wt-icon-color" />

            <p className="project-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum accumsan tellus, quis malesuada est venenatis sit amet.
              Ut euismod lacus at nunc posuere, vel fermentum mi suscipit. Duis
              tristique tellus at ligula pulvinar consequat.
            </p>
          </SwiperSlide>
          <SwiperSlide className="password">
          <ul className="languages">
              <li>
                React
                <FaReact />
              </li>
              <li>
                JavaScript
                <IoLogoJavascript />
              </li>
              <li>
                Node
                <FaNodeJs />
              </li>
              <li>Express <SiExpress/></li>
              <li>MongoDB <SiMongodb/></li>
            </ul>
            <a
              className="links"
              href="https://github.com/MikeTritsch/watchtogethr"
              target="_blank"
            >
              <FaGithub className="git-icon wt-icon-color" />
            </a>
            <CiLink className="link-icon wt-icon-color" />

            <p className="project-bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum accumsan tellus, quis malesuada est venenatis sit amet.
              Ut euismod lacus at nunc posuere, vel fermentum mi suscipit. Duis
              tristique tellus at ligula pulvinar consequat.
            </p>
          </SwiperSlide>
        </Swiper>
      </Fade>
    </>
  );
};

export default Projects;
