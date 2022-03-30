import React from "react";
import "./Education.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Education = () => {
  const clients = [
    {
      degree:'B.tech',
      collegeName: 'Indian Insttitute of Technology(IIT) Ropar',
      review:'Electrical Engineering',
      year:'2019-2023'
    },
    {
      degree:'Intermediate',
      collegeName:"Morning Star Childrens's senior secondary Academy"   ,
      review:'Science side',
      year:'2018'
    },
    {
      degree:'High-school',
      collegeName:"Morning Star Childrens's senior secondary Academy"   ,
      review:'Science side',
      year:'2016'
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Education</span>
       
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <span>{client.degree}</span>
                <span>{client.collegeName}</span>
                <span>{client.review}</span>
                <span>{client.year}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Education;
