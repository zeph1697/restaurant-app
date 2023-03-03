import React from "react";
import Delivery from "../img/delivery.png";
import Background from "../img/heroBg.png";
import { HeroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section
      className=" grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
      id="home"
    >
      <div className=" py-2 flex-1 flex flex-col items-start justify-center gap-6 cursor-default">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className=" text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div>
            <img
              src={Delivery}
              className="flex w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl"
              alt="delivery"
            />
          </div>
        </div>

        <p className=" text-start text-[2.5rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className=" text-orange-600 text-[3rem] lg:text-[4rem] inline-block">
            Your City
          </span>
        </p>

        <p className=" text-base text-textColor text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nam?
          Sint voluptatibus eius quam mollitia odio sed pariatur, accusantium
          assumenda illo? Optio laboriosam, doloribus quibusdam modi omnis at
          blanditiis atque corrupti expedita voluptatem hic animi excepturi quae
          reprehenderit harum. Minima!
        </p>

        <button
          type="button"
          className=" bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto   px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      <div className=" py-2 flex-1 relative items-center justify-center">
        <img
          src={Background}
          className="ml-auto h-800 w-full lg:w-auto lg:h-650"
          alt="mainBg"
        />

        <div className=" absolute flex gap-4 md:grid md:grid-cols-2 md:gap-x-2 lg:gap-x-4 md:gap-y-16 lg:gap-y-24 md:w-max md:h-max top-0 left-0 right-0 bottom-0 items-center justify-center drop-shadow-xl cursor-default flex-wrap md:m-auto">
          {HeroData &&
            HeroData.map((n) => (
              <div
                key={n.id}
                className=" w-180 lg:w-190 p-2 bg-cardOverlay rounded-2xl backdrop-blur-md flex flex-col items-center justify-center mt-8"
              >
                <img
                  src={n.image}
                  className=" w-20 lg:w-40 -mt-12 lg:-mt-24"
                  alt="I1"
                />

                <p className=" text-base lg:text-xl font-semibold text-textColor mt-2">
                  {n.name}
                </p>

                <p className=" text-xs lg:text-sm text-lighttextGray font-semibold my-2">
                  {n.desc}
                </p>

                <p className=" text-sm font-semibold text-headingColor">
                  <span className=" text-xs text-red-500">$</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
