import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux_store/action/productsAction";
import { useEffect, useState } from "react";
import { getProductsWithId } from "../FetchedItems/index";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { CiShare2 } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiShippingContainerThin } from "react-icons/pi";

export default function Cart() {
  const { productCart } = useSelector((state) => state);
  const [getProduct, setGetProduct] = useState({});
  let { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct(productId) {
      let fetchedProduct = await getProductsWithId(productId);
      setGetProduct(fetchedProduct.data);
    }
    fetchProduct(productId);
  }, [productId]);

  const cartItem = productCart.find(
    (item) => parseInt(item.id) === parseInt(productId)
  );
  const count = cartItem ? cartItem.count : 0;

  function addToCartItem(id) {
    dispatch(increment(id));
  }

  function increaseProductQuantity(id) {
    dispatch(increment(id));
  }

  function decreaseProductQuantity(id) {
    if (count > 1) {
      dispatch(decrement(id));
    }
  }

  const ratingValue = getProduct?.rating?.rate || 0;
  const maxStars = 5;
  const filledStars = Math.round(ratingValue);
  const emptyStars = maxStars - filledStars;

  return (
    <div className="md:flex  md:flex-row flex flex-col items-center justify-between pb-5 md:gap-x-20 w-[100%]">
      <div className="md:w-[50%] w-full ">
        <img
          className="w-full "
          src={getProduct?.image}
          alt={getProduct?.title}
        />
      </div>
      <div className="md:w-[50%] md:h-full w-full">
        <span className="text-[#666666] font-bold">Fasco</span>
        <div className="text-3xl">{getProduct?.title}</div>

        <div className="pb-3 text-xl flex items-center">
          {Array(filledStars)
            .fill(null)
            .map((_, index) => (
              <RiStarSFill key={index} className="text-black" size={20} />
            ))}
          {Array(emptyStars)
            .fill(null)
            .map((_, index) => (
              <RiStarSLine key={index} className="text-gray-400" size={20} />
            ))}
          <span className="text-gray-500 text-lg pl-2">({ratingValue})</span>
        </div>

        <div className="py-3 font-semibold text-2xl">
          <span>$ {getProduct?.price}</span>
        </div>

        <div>
          <p>{getProduct?.description}</p>
        </div>

        {getProduct?.rating?.count && (
          <div className="py-4">
            <span className="text-[#666666]">
              Only{" "}
              <span className="font-bold">
                {getProduct?.rating?.count - count}
              </span>{" "}
              item(s) left in stock!
            </span>
            <div className="w-full bg-gray-300 rounded-md h-2 mt-2">
              <div
                className="bg-red-500 h-2  rounded-md transition-all duration-300"
                style={{
                  width: `${
                    ((getProduct?.rating?.count - count) /
                      getProduct?.rating?.count) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        )}

        <div className="md:pt-8 py-2">
          <span>Quantity</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-x-5 border font-semibold rounded-md px-5 py-3">
            <button
              className="text-xl"
              onClick={() => decreaseProductQuantity(productId)}
              disabled={count === 0}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className="text-xl"
              onClick={() => increaseProductQuantity(productId)}
            >
              +
            </button>
          </div>

          <div className="ps-8 w-full">
            {count === 0 ? (
              <button
                className="w-full border rounded-md py-3 border-black"
                onClick={() => addToCartItem(productId)}
              >
                Add To Cart
              </button>
            ) : (
              <Link to="/cart">
                <button className="w-full border rounded-md py-3 border-black">
                  Go to Cart
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center justify-start gap-x-2 text-lg border-b py-4">
          <CiShare2 />
          <span>share</span>
        </div>
        <div className="flex items-center justify-start gap-x-2  py-2">
          <LiaShippingFastSolid size={25} />
          <span className="font-semibold">Estimated Delivery:</span>
          <span>Jul 30 - Aug 03</span>
        </div>
        <div className="flex items-center justify-start gap-x-2 pb-8">
          <PiShippingContainerThin size={25} />
          <span className="font-semibold">Free Shipping & Returns: </span>
          <span>On all orders over $75</span>
        </div>

        <div className="flex flex-col items-center justify-center bg-[#F8F8F8] py-5 ">
          <img
            src="/checkout.png"
            alt="checkout"
            className="object-cover w-full px-28"
          />
          <h4 className="pt-5 md:px-32 text-sm">
            Guarantee safe & secure checkout
          </h4>
        </div>
      </div>
    </div>
  );
}
