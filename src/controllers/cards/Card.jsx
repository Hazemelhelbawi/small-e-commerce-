import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  const { image, title, id, price, count } = item;

  return (
    <>
      <div className=" mx-auto  relative">
        <div className="w-full relative">
          {count === 0 && (
            <div className="w-16 h-16 font-jost  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B1B1B1] text-white text-sm font-bold  flex items-center justify-center text-center rounded-full">
              SOLD OUT
            </div>
          )}

          <Link to={`/productDetails/${id}`} className="w-full ">
            <img
              src={image}
              alt={title}
              className="md:h-[350px] h-[300px] mx-auto"
            />
          </Link>
        </div>

        <div className="title-container">
          <p className=" ">{title}</p>
        </div>

        <div className="price-container">
          <span className="text-start"> ${price}</span>
        </div>
      </div>
    </>
  );
}
