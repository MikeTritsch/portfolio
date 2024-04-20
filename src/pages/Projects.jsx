import React, { useRef, useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { SiHandlebarsdotjs } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

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
              <li>
                Express <SiExpress />
              </li>
              <li>
                MongoDB <SiMongodb />
              </li>
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
              <strong className="watchtogethr-strong">WatchTogethr</strong> is
              an interactive application that allows two users to select movies
              or TV shows they like (or don't like) until they match, thus
              eliminating the common problem of not being able to decide what to
              watch.
            </p>
          </SwiperSlide>
          <SwiperSlide className="brew">
            <ul className="languages">
              <li>
                jQuery
                <DiJqueryLogo />
              </li>
              <li>
                JavaScript
                <IoLogoJavascript />
              </li>
              <li>
                HTML
                <FaHtml5 />
              </li>
              <li>
                CSS <FaCss3 />
              </li>
            </ul>
            <a
              className="links"
              href="https://github.com/BitsTuck/brewery-experience"
              target="_blank"
            >
              <FaGithub className="git-icon brew-icon-color" />
            </a>
            <a
              className="links"
              href="https://bitstuck.github.io/brewery-experience/"
              target="_blank"
            >
              <CiLink className="link-icon brew-icon-color" />
            </a>
            <p className="project-bio">
              <strong className="brew-strong">The Brewery Experience</strong> is
              an easy to use application where users can search for breweries in
              any city across the United States. Indicated on the map by beer
              icons, users can add breweries to their favorites list by typing
              the name of the brewery in the designated field.
            </p>
          </SwiperSlide>
          <SwiperSlide className="tech">
            <ul className="languages">
              <li>
                JavaScript
                <IoLogoJavascript />
              </li>
              <li>
                Handlebars
                <SiHandlebarsdotjs />
              </li>
              <li>
                Node
                <FaNodeJs />
              </li>
              <li>
                SQL <FaDatabase />
              </li>
              <li>
                Express
                <SiExpress />
              </li>
            </ul>
            <a
              className="links"
              href="https://github.com/MikeTritsch/house-of-tech"
              target="_blank"
            >
              <FaGithub className="git-icon tech-icon-color" />
            </a>
            <a
              className="links"
              href="https://house-of-tech-8cd14baeb947.herokuapp.com/"
              target="_blank"
            >
              <CiLink className="link-icon tech-icon-color" />
            </a>
            <p className="project-bio">
              <strong className="tech-strong">House of Tech</strong> is a blog
              existing at the intersection where the music business and tech
              industry meet. Users are required to create a secure account to
              create, edit, delete, and comment on posts.
            </p>
          </SwiperSlide>
          <SwiperSlide className="weather">
            <ul className="languages">
              <li>
                jQuery
                <DiJqueryLogo />
              </li>
              <li>
                JavaScript
                <IoLogoJavascript />
              </li>
              <li>
                HTML
                <FaHtml5 />
              </li>
              <li>
                CSS <FaCss3 />
              </li>
            </ul>
            <a
              className="links"
              href="https://github.com/MikeTritsch/weather-or-not"
              target="_blank"
            >
              <FaGithub className="git-icon weather-icon-color" />
            </a>
            <a
              className="links"
              href="https://miketritsch.github.io/weather-or-not/"
              target="_blank"
            >
              <CiLink className="link-icon weather-icon-color" />
            </a>
            <p className="project-bio">
              <strong className="weather-strong">Weather or Not</strong> is a simple weather forecasting application designed using the Open Weather Map API. Users are able to search for a city anywhere in the world and are presented with a six day forecast paired with respective icons.
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
              <li>
                Express <SiExpress />
              </li>
              <li>
                MongoDB <SiMongodb />
              </li>
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
