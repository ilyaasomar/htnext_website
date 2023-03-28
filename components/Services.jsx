"use client";
import React from "react";
import { MdVideoSettings } from "react-icons/md";
import { GiCctvCamera } from "react-icons/gi";
import { MdDeveloperMode } from "react-icons/md";
import { FiPenTool } from "react-icons/fi";
import { SiFlutter } from "react-icons/si";
import { MdCampaign } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-10 py-10 mt-28 mb-28">
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="font-bold text-3xl md:text-5xl text-secondary">
          Services
        </h1>
        <div className="flex items-center gap-2">
          <div className="w-12 h-1 bg-secondary rounded-lg"></div>
          <p className="font-light text-xl text-gray-500">
            what we offer
          </p>
          <div className="w-12 h-1 bg-secondary rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-7 space-y-10 py-10">
          {/* card */}
          <div className="bg-white shadow-2xl rounded-3xl px-2 py-5 mt-10 hover:scale-105 duration-300">
            {/* img */}
            <div className="flex justify-center">
              <div className="bg-secondary w-16 h-16 rounded-xl flex justify-center items-center">
                <FiPenTool className="w-7 h-7 cursor-pointer text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-secondary text-xl mt-3 cursor-pointer">
                Graphic Design
              </h3>
              <p className="text-md mt-3 px-2 text-gray-600">
                graphic design is defined as “the art and practice of planning
                and projecting ideas and experiences with visual and textual
                content
              </p>
            </div>
          </div>
          {/* end card */}
          <div className="bg-white shadow-2xl rounded-3xl px-2 py-5 hover:scale-105 duration-300">
            {/* img */}
            <div className="flex justify-center">
              <div className="bg-secondary w-16 h-16 rounded-xl flex justify-center items-center">
                <MdVideoSettings className="w-7 h-7 cursor-pointer text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-secondary text-xl mt-3 cursor-pointer">
                Video Production
              </h3>
              <p className="text-md mt-3 px-2 text-gray-600">
                Video production is basically the entire process of creating a
                video. Whether it's a short film, a full-length movie, business
                marketing video, television commercial, music video, or other
                type of film.
              </p>
            </div>
          </div>
          {/* end card */}

          <div className="bg-white shadow-2xl rounded-3xl px-2 py-5 hover:scale-105 duration-300">
            {/* img */}
            <div className="flex justify-center">
              <div className="bg-secondary w-16 h-16 rounded-xl flex justify-center items-center">
                <GiCctvCamera className="w-7 h-7 cursor-pointer text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-secondary text-xl mt-3 cursor-pointer">
                Network & CCTV Camera
              </h3>
              <p className="text-md mt-3 px-2 text-gray-600">
                We offer for students professional networking training including
                CCNA and CCNP. CCTV(closed-circuit television) is a TV system in
                which signals are not publicly distributed but are monitored,
                primarily for surveillance and security purposes.
              </p>
            </div>
          </div>
          {/* end card */}
          <div className="bg-white shadow-2xl rounded-3xl px-2 py-5 hover:scale-105 duration-300">
            {/* img */}
            <div className="flex justify-center">
              <div className="bg-secondary w-16 h-16 rounded-xl flex justify-center items-center">
                <MdDeveloperMode className="w-7 h-7 cursor-pointer text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-secondary text-xl mt-3 cursor-pointer">
                Web Design & Development
              </h3>
              <p className="text-md mt-3 px-2 text-gray-600">
                Building, designing and developing business websites and web
                applications that you can monitor and manage your business such
                as your property, warehouse and accounting.
              </p>
            </div>
          </div>
          {/* end card */}
          <div className="bg-white shadow-2xl rounded-3xl px-2 py-5 hover:scale-105 duration-300">
            {/* img */}
            <div className="flex justify-center">
              <div className="bg-secondary w-16 h-16 rounded-xl flex justify-center items-center">
                <SiFlutter className="w-7 h-7 cursor-pointer text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-secondary text-xl mt-3 cursor-pointer">
                Mobile Application
              </h3>
              <p className="text-md mt-3 px-2 text-gray-600">
                We can create you a scalable mobile application that allows you
                to manage your business such as your business account, inventory
                and much more.
              </p>
            </div>
          </div>
          {/* end card */}

          <div className="bg-white shadow-2xl rounded-3xl px-2 py-5 hover:scale-105 duration-300">
            {/* img */}
            <div className="flex justify-center">
              <div className="bg-secondary w-16 h-16 rounded-xl flex justify-center items-center">
                <MdCampaign className="w-7 h-7 cursor-pointer text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-secondary text-xl mt-3 cursor-pointer">
                Branding & Degital Marketing
              </h3>
              <p className="text-md mt-3 px-2 text-gray-600">
                Creating a unique brand and design for your business is what
                makes it stand out from other businesses. Business advertising
                plays an important role in business growth and is the core of
                business.
              </p>
            </div>
          </div>
          {/* end card */}

          <div className="bg-white shadow-2xl rounded-3xl px-2 py-5 hover:scale-105 duration-300">
            {/* img */}
            <div className="flex justify-center">
              <div className="bg-secondary w-16 h-16 rounded-xl flex justify-center items-center">
                <BiSupport className="w-7 h-7 cursor-pointer text-white" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-secondary text-xl mt-3 cursor-pointer">
                IT Consultancy
              </h3>
              <p className="text-md mt-3 px-2 text-gray-600">
                IT consulting services are advisory services that help clients
                assess different technology strategies and, in doing so, align
                their technology strategies with their business or process
                strategies
              </p>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </div>
  );
};

export default Services;
