import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeProduct,
} from "../redux_store/action/productsAction";
import { getProductsWithId } from "../FetchedItems";

function CartItem({ productId, count, onRemove, isMobile }) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProduct(productId) {
      let fetchedProduct = await getProductsWithId(productId);
      setProduct(fetchedProduct.data);
    }
    fetchProduct(productId);
  }, [productId]);

  const handleRemove = () => {
    dispatch(removeProduct(productId));
  };

  return isMobile ? (
    // Mobile View
    <div className="flex flex-col border p-4 space-y-3">
      <div className="flex items-center gap-4">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-16 h-16 object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold">{product?.title}</p>
          <button
            onClick={handleRemove}
            className="text-[#8A8A8A] font-semibold underline mt-2"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">${product?.price}</p>
        <div className="inline-flex items-center justify-center gap-x-5 border font-semibold rounded-md px-3 py-1">
          <button onClick={() => dispatch(decrement(productId))}>-</button>
          <span className="mx-2">{count}</span>
          <button onClick={() => dispatch(increment(productId))}>+</button>
        </div>
        <p className="font-semibold">${(product?.price * count).toFixed(2)}</p>
      </div>
    </div>
  ) : (
    // Desktop Table View
    <tr className="border-b text-lg">
      <td className="flex items-start gap-4 py-4">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-16 h-16 md:w-28 md:h-36 object-cover"
        />
        <div className="flex flex-col justify-between items-start h-full">
          <p className="font-semibold">{product?.title}</p>
          <button
            onClick={handleRemove}
            className="text-[#8A8A8A] font-semibold underline mt-4"
          >
            Remove
          </button>
        </div>
      </td>
      <td className="text-center">${product?.price}</td>
      <td className="text-center">
        <div className="inline-flex items-center justify-center gap-x-5 border font-semibold rounded-md px-3 py-1">
          <button onClick={() => dispatch(decrement(productId))}>-</button>
          <span className="mx-2">{count}</span>
          <button onClick={() => dispatch(increment(productId))}>+</button>
        </div>
      </td>
      <td className="text-center">${(product?.price * count).toFixed(2)}</td>
    </tr>
  );
}

export default CartItem;
