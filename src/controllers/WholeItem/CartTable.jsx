import React from "react";
import CartItem from "./CartItem";

function CartTable({ cartItems, onRemove }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] border-collapse table-fixed hidden md:table">
        <thead>
          <tr className="border-b text-lg">
            <th className="py-5 text-left w-1/4">Product</th>
            <th className="py-5 text-center w-1/4">Price</th>
            <th className="py-5 text-center w-1/4">Quantity</th>
            <th className="py-5 text-center w-1/4">Total</th>
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

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            productId={item.id}
            count={item.count}
            onRemove={onRemove}
            isMobile
          />
        ))}
      </div>
    </div>
  );
}

export default CartTable;
