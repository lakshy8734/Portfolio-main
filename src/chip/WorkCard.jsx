import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div id="work-card" className="container mx-auto mt-16 px-4">
      <Slider {...settings}>
        {reversedData.map((data) => {
          return (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="flex flex-col justify-center items-center gap-4 px-2"
            >
              <POPUP className="img-content relative">
                <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
                  <img
                    loading="lazy"
                    src={data.img}
                    alt={data.title}
                    className="object-cover w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                  />
                </div>

                <div className="popup h-[280px] w-fit shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4">
                  <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                    {data.desc}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Link
                      to={data.link}
                      target="_blank"
                      className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                    >
                      <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                      <p className="text-black">Demo</p>
                    </Link>
                    <br className="w-[2px] bg-white" />
                    <Link
                      to={data.git}
                      target="_blank"
                      className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                    >
                      <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                      <p className="text-black">Code</p>
                    </Link>
                  </div>
                </div>
              </POPUP>
              <p className="text-gray-800 text-xl font-medium sm:text-lg">
                {data.title}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scale(1.1);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
