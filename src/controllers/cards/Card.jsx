import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  const { image, title, id, price } = item;

  return (
    <>
      <div className=" mx-auto  relative">
        <div className="w-full relative">
          {item.rating?.count === 0 && (
            <div className="absolute top-3 left-3 bg-[#B1B1B1] text-white text-sm font-bold px-3 py-1 rounded-full">
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
