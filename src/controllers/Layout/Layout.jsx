import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../FetchedItems";
import { setProducts } from "../redux_store/action/productsAction";
import { updateProductWithItsCount } from "./helperMethods";
import Card from "../cards/Card";

export default function Layout() {
  const dispatch = useDispatch();
  const { products, productCart } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    async function fetchData() {
      let products = await getProducts();
      dispatch(setProducts(products.data));
    }
    fetchData();
  }, [dispatch]);

  const updatedProductWithCount = updateProductWithItsCount(
    products,
    productCart
  );

  const totalPages = Math.ceil(updatedProductWithCount.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = updatedProductWithCount.slice(startIndex, endIndex);

  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    if (start > 1) pages.push("...");
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (end < totalPages) pages.push("...");
    return pages;
  };

  return (
    <div className=" mx-auto">
      <div className="flex items-center justify-center">
        <h1 className="text-[42px]">Fashion</h1>
      </div>
      <div className="flex items-center justify-center gap-x-2 ">
        <span>Home</span>
        <MdKeyboardArrowRight />
        <span>Fashion</span>
      </div>
      <div className="flex items-center justify-between md:pt-[100px] py-5 md:pb-6">
        <div className="flex items-center justify-center gap-x-2">
          <span>Best selling</span>

          <MdKeyboardArrowDown />
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <span className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
            <img src="/burgerMenu1.png" alt="" className="object-cover" />
          </span>
          <span className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
            <img src="/burgerMenu2.png" alt="" className="object-cover" />
          </span>
          <span className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded bg-gray-100 hover:bg-gray-200">
            <img src="/burgerMenu3.png" alt="" className="object-cover" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {visibleProducts.map((item, index) => (
          <Card item={item} key={item.id || index} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2 py-3">
          {/* Page Numbers */}
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && changePage(page)}
              className={`px-4 py-2  ${
                page === currentPage
                  ? " text-black bg-gray-300 rounded-full"
                  : "text-gray-700"
              } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2  rounded disabled:opacity-50"
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
