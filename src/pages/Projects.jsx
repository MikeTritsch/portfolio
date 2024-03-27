import React, { useRef, useState } from "react";
import watch from "../assets/images/watch2.jpg";
import brew from "../assets/images/brew.jpg";
import tech from "../assets/images/tech.jpg";
import Nav from "../components/Nav";
import { Fade } from "react-awesome-reveal";
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
            <h1 className="project-title">WatchTogethr</h1>
            <h2 className="project-description"></h2>
            <ul className="languages">
              <li>React</li>
              <li>JavaScript</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
            <p className="project-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum accumsan tellus, quis malesuada est venenatis sit amet. Ut euismod lacus at nunc posuere, vel fermentum mi suscipit. Duis tristique tellus at ligula pulvinar consequat.
            </p>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
        </Swiper>
      </Fade>
    </>
  );
};

export default Projects;
