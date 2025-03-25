"use client"; // Required for client-side components
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import React from "react";
import Productcard from "../(components)/productcard/productcard";
import CategoriesNav from "../(components)/categories/categoriesNav";
import HeadingBar from "../(components)/headingBar/headingBar";
import { useFilterProducts } from "@/hooks/useFilterProducts";
const Page = () => {
  const searchParams = useSearchParams();
  const c = searchParams.get("category");
  const results = useFilterProducts(c);

  // Logic for filtering products based on search input goes here...

  const [size, setSize] = useState(true);
  const handleSize = (s) => {
    if (s > 0) {
      setSize(true);
    } else {
      setSize(false);
    }
  };

  useEffect(() => {
    if (results) {
      handleSize(results.length);
    }
  }, [results]);

  return (
    <div className="flex px-0 lg:px-20 min-h-[90vh]">
      <CategoriesNav />
      <div className="lg:w-4/5 w-full flex flex-col gap-5 p-8">
        <HeadingBar title="Browse by Category" heading={c} className="" />
        {size ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {results.map((product) => (
              <Productcard key={product.ProductID} product={product} />
            ))}
          </div>
        ) : (
          <p>Product not available!!</p>
        )}
      </div>
    </div>
  );
};

export default Page;
