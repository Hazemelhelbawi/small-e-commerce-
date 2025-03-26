import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartTable from "./CartTable"; // Import the table component

import { MdKeyboardArrowRight } from "react-icons/md";
import { getProducts } from "../FetchedItems";
import { setProducts } from "../redux_store/action/productsAction";
import CartSummary from "./CartSummary";

function findTotal(productCart, products) {
  let sum = 0;
  productCart.forEach((item) => {
    let price = Number(products[item.id - 1]?.price) || 0;
    sum += item.count * price;
  });
  return sum.toFixed(2);
}

function TotalProducts() {
  const { productCart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [giftWrap, setGiftWrap] = useState(false);

  useEffect(() => {
    async function fetchData() {
      let products = await getProducts();
      dispatch(setProducts(products.data));
    }
    fetchData();
  }, [dispatch]);

  const subtotal = findTotal(
    productCart,
    useSelector((state) => state.products)
  );
  const total = giftWrap ? Number(subtotal) + 10 : Number(subtotal);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-[42px]">Shopping Cart</h1>
      </div>
      <div className="flex items-center justify-center gap-x-2 py-5">
        <span>Home</span>
        <MdKeyboardArrowRight />
        <span>Your Shopping Cart</span>
      </div>{" "}
      <div className=" pt-5 ">
        {productCart.length > 0 ? (
          <>
            <CartTable cartItems={productCart} />

            {/* other options */}
            <CartSummary
              giftWrap={giftWrap}
              setGiftWrap={setGiftWrap}
              total={total}
            />
          </>
        ) : (
          <h3 className="h-screen" style={{ textAlign: "center" }}>
            No Items in Cart
          </h3>
        )}
      </div>
    </div>
  );
}

export default TotalProducts;
