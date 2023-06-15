import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, everyone i'am <br/>Md Yousuf Ali.<br/>This is my portfolio web application.Now read about me.
            </p>
          </div>
          <div>
            <p>
              As a dedicated and skilled React front-end developer, my career
              objective is to leverage my expertise to contribute to the
              development of cutting-edge web applications. With a passion for
              creating intuitive user interfaces and seamless user experiences,
              my goal is to work collaboratively with talented teams to build
              innovative and visually appealing solutions that exceed client
              expectations. I strive to stay updated with the latest trends and
              best practices in front-end development, continuously enhancing my
              technical skills and knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
