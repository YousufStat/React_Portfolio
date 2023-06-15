import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#f7f7fc]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#451e45] pl-1'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#253e90]'>
          MD. YOUSUF ALI
        </h1>
        <h2 className='text-3xl sm:text-7xl font-bold text-[#4c5e92]'>
          I'm a front end web Developer.
        </h2>
        <p className='text-[#4a5679] py-4 max-w-[700px]'>
        I honed my skills in HTML, CSS, and JavaScript, constantly seeking ways to improve and expand my knowledge.
         Now i’m a front-end web developer specializing in building exceptional digital experiences.
        </p>
        <div>
          <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4f5d6b] hover:border-[#4f5d6b]'>
            View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
