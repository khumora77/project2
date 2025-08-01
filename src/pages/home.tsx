import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

const Home = () => {
  return (
    <div className="min-h-screen flex items-start pt-20 px-10">
      <div className="w-[400px] text-left">
        <h1 className="text-9xl font-extrabold text-white">Our</h1>
        <h2 className="text-6xl font-bold text-black mb-2">Best Logistic</h2>
        <h3 className="text-4xl font-bold text-white mb-6">Company</h3>
        <p className="text-white mb-8 leading-relaxed">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has rootsContrary to popular belief, Lorem Ipsum is not simply random
          sContrary to popular belief, Lorem Ipsum is not simply random text. It
          has rootsContrary to popular belief, Lorem Ipsum is not simply random
        </p>
        <span className="flex space-x-6 text-black text-xl">
          <FaFacebookF className="cursor-pointer hover:text-white transition" />
          <FaTwitter className="cursor-pointer hover:text-white transition" />
          <FaLinkedin className="cursor-pointer hover:text-white transition" />
          <TiSocialInstagram className="cursor-pointer hover:text-white transition" />
        </span>
      </div>
    </div>
  );
};

export default Home;
