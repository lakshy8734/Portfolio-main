import React from "react";
import mine from "../../assets/myself.jpg";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Lakshy_Resume_2024.pdf";
import { data } from "./../../data/data";

const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I am Lakshy Gupta
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Mern Stack Developer",
                2000,
                "Full Stack Blockchain Developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              I recently graduated from Graphic Era University, Dehradun.{" "}
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/lakshy-gupta-8419221b0/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/lakshy8734">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lakshy-gupta-8419221b0/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://instagram.com/_lakshy_gupta?igshid=ZDdkNTZiNTM=">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/yoyo.raftaar.10">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://twitter.com/lakshy8734">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-[75%] flex items-center sm:items-end">
            <svg
              viewBox="20 0 160 180"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 z-0"
            >
              <path
                fill="#F1C21B"
                d="M41.7,-66.8C55.1,-64.4,67.9,-55.5,72.7,-43.3C77.5,-31.1,74.3,-15.5,73.3,-0.6C72.3,14.4,73.6,28.8,67.4,38.7C61.3,48.5,47.7,53.8,35.2,61.9C22.8,69.9,11.4,80.7,0.4,80.1C-10.7,79.5,-21.3,67.5,-29.2,56.8C-37.1,46.1,-42.2,36.7,-52.6,27.4C-63,18.2,-78.8,9.1,-81.3,-1.4C-83.8,-12,-73,-24,-61.5,-31.3C-49.9,-38.6,-37.6,-41.2,-27.3,-45.4C-16.9,-49.6,-8.4,-55.3,2.8,-60.2C14.1,-65.2,28.2,-69.2,41.7,-66.8Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
              loading="lazy"
              data-aos="fade-up"
              className="h-[120%] w-full object-cover md:h-[115%] md:m-auto sm:m-0 rounded-md mt-[-40px] z-10"
              src="https://ik.imagekit.io/n4hzszl2d/myself.jpg?updatedAt=1700220807164"
              alt="mine"
            />
            <div className="absolute bottom-10 md:bottom-3 right-2 md:right-6 z-10">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="relative cursor-pointer"
              >
                <img
                  loading="lazy"
                  className="w-[135px] md:w-[90px] circle-text mt-2 md:mt-0 ml-2 md:ml-0"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
