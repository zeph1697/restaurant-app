import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItem", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 my-8 md:my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className=" w-210 min-w-[210px] md:w-300 md:min-w-[300px] h-auto bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg"
          >
            <div className=" w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className=" max-w-24 max-h-24 md:max-w-32 md:max-h-32 -mt-8 drop-shadow-lg"
              />
              <motion.div
                whileTap={{ scale: 0.6 }}
                className=" w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdOutlineShoppingBag className=" text-white text-xl" />
              </motion.div>
            </div>

            <div className=" w-full flex flex-col items-end justify-end cursor-default">
              <p className=" text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>

              <p className=" mt-2 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className=" flex items-center gap-8">
                <p className=" text-lg text-headingColor font-semibold">
                  <span className=" text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className=" w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-420" />
          <p className=" mt-12 font-semibold text-2xl text-headingColor">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
