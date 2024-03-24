import React from "react";
import Nav from "../components/Nav";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const Projects = () => {
  return (
    <>
      <Nav />
      <Fade triggerOnce={true}>
        <h1 className="page-title">Projects</h1>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="project-info">
              <h2 className="project-title">Brewery Experience</h2>
              <p className="project-description">
                A brewery tracker built using the Google Maps API and the Open
                Brewery Database API.
              </p>
              <ul className="languages">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-info">
              <h2 className="project-title">WatchTogethr</h2>
              <p className="project-description">
                A match-based application for those struggling to decide what to
                watch.
              </p>
              <ul className="languages">
                <li>React</li>
                <li>JavaScript</li>
                <li>Node</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-info">
              <h2 className="project-title">House of Tech</h2>
              <p className="project-description">
                A tech blog page designed using the MVC model, bringing the
                music business and tech world together.
              </p>
              <ul className="languages">
                <li>JavaScript</li>
                <li>Node</li>
                <li>Express</li>
                <li>Handlebars</li>
                <li>mySQL</li>
                <li>Sequelize</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="project-info">
              <h2 className="project-title">Weather or Not</h2>
              <p className="project-description">
              Rain? Shine? Snow? Check this weather app to see what's happening in your neck of the woods using the Open Weather API
              </p>
              <ul className="languages">
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          <p className="instructions">(Grab the cards to slide them)</p>
        </Swiper>
      </Fade>
    </>
  );
};

export default Projects;
