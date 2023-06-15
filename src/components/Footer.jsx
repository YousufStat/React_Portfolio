import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div name="" className="bg-[#0a192f] w-full h-screen max-h-28 box-border">
      <div className="mx-auto flex justify-center text-center pt-6">
        <div className="flex-none p-2">
          <a className="text-slate-300" href="https://www.linkedin.com/in/md-yousuf-5b08901b6/">
          <FaLinkedin size={30} className="ml-4"/>Linkedin
          </a>
        </div>
        <div className="flex-initial p-2">
          <a className="text-slate-300" href="https://github.com/YousufStat">
          <FaGithub size={30} className="ml-3"/>Github
          </a>
        </div>
        <div className="flex-initial p-2">
          <a className="text-slate-300" href="https://www.facebook.com/profile.php?id=100012880443652">
          <FaFacebook size={30} className="ml-5"/>Facebook
          </a>
        </div>
        <div className="flex-initial p-2">
          <a className="text-slate-300" href="https://drive.google.com/file/d/1IFjVPaGePBgf5xcVGzjALgylPZWxSFdJ/view?usp=drive_link">
          <BsFillPersonLinesFill size={30} className="ml-4"/>Resume
          </a>
        </div>
        <div className="text-center ml-6 mt-6">
          {" "}
          <a className="text-white" href="/">
            Copyright &copy; 2023 Yousuf. All Rights Reserved
          </a>
        </div>
      </div>
    </div>
  );
}
