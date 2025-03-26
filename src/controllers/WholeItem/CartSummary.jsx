import React from "react";
import { useDispatch } from "react-redux";
import { checkout } from "../redux_store/action/productsAction";

const CartSummary = ({ giftWrap, setGiftWrap, total }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:items-end items-center w-full pb-5">
      <div className="md:w-[50%] w-full">
        <div className="flex items-center justify-start mt-6 pt-4">
          <input
            type="checkbox"
            id="giftWrap"
            checked={giftWrap}
            onChange={() => setGiftWrap(!giftWrap)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
          />
          <label htmlFor="giftWrap" className="ml-2 text-gray-700">
            For <span className="font-semibold">$10.00</span> Please Wrap The
            Product
          </label>
        </div>

        <div className="flex justify-between font-semibold text-lg mt-4 border-t pt-4">
          <span>Subtotal</span>
          <span>${Number(total).toFixed(2)}</span>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={() => dispatch(checkout())}
            className="w-full py-3 bg-black text-white rounded-md shadow-md"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
