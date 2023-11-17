import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Internship
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Blockchain Developer Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  3.0 Verse
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Sept 2023 - Dec 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  In my ongoing internship at 3.0 Verse, I hold the role of a
                  Full Stack Blockchain Developer intern with a primary focus on
                  frontend development utilizing React JS. My responsibilities
                  encompass crafting interactive and user-friendly interfaces to
                  enhance the overall user experience. On the backend, I am
                  actively engaged in Solidity for Smart Contract development.
                  My duties extend to Integration and Deployment using Ether Js
                  and Hardhat, ensuring seamless functionality and performance.
                  This experience allows me to blend my frontend expertise with
                  blockchain technologies.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, C.S.E with Specislation in Cloud Computing
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Graphic Era University, Dehradun
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2019 - Year 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  As a graduate student, I possess a robust skill set in web
                  development, showcasing proficiency in key technologies such
                  as HTML, CSS, Tailwind CSS, JavaScript, and React JS. My
                  expertise extends to backend technologies, where I am
                  well-versed in Node.js and Express.js. Moreover, I bring
                  valuable skills in Java, SQL, Solidity, and Blockchain,
                  providing a comprehensive understanding of industry-relevant
                  technologies. This diverse skill set positions me as a
                  versatile professional capable of contributing effectively to
                  dynamic and innovative projects within the industry.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
