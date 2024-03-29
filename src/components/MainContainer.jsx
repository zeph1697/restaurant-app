import React, { useEffect } from "react";
import HomeContainer from "./HomeContainer";
import RowContainer from "./RowContainer";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { useState } from "react";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className=" w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className=" w-full my-8">
        <div className=" w-full flex items-center justify-between">
          <p className=" text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:left-0 before:-bottom-2 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 cursor-default">
            Our fresh & healthy fruits
          </p>

          <div className=" hidden md:flex gap-2 items-center">
            <motion.div
              whileTap={{ scale: 0.6 }}
              className=" w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-2000)}
            >
              <MdOutlineKeyboardArrowLeft className=" text-white text-xl" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.6 }}
              className=" w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(2000)}
            >
              <MdOutlineKeyboardArrowRight className=" text-white text-xl" />
            </motion.div>
          </div>
        </div>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
