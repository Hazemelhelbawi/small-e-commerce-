import React from "react";
import CartItem from "./CartItem";

function CartTable({ cartItems, onRemove }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse table-fixed">
        <thead className="">
          <tr className="border-b text-lg ">
            <th className="py-5 text-left w-1/4 ">Product</th>
            <th className="py-5 text-center w-1/4 ">Price</th>
            <th className="py-5 text-center w-1/4 ">Quantity</th>
            <th className="py-5 text-center w-1/4 ">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              productId={item.id}
              count={item.count}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
