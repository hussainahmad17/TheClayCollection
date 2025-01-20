"use client";
import React from "react";
import { useState } from "react";
import Carousel from "./(components)/Carousel/carousel";
import HeadingBar from "./(components)/headingBar/headingBar.js";
import CategoriesNav from "./(components)/categories/categoriesNav";
import ProductsCarousel from "./(components)/ProductsCarousel/productsCarousel";
import Link from "next/link";
import Products from "./productdetails/productsData.json";
import Card from "./(components)/Testimonial/Testimonial";
import { FaRing, FaSellsy } from "react-icons/fa";
import { GiCrystalEarrings, GiApothecary, GiDominoTiles } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import { FaBowlRice } from "react-icons/fa6";

const Page = () => {
  const testimonialData = [
    {
      icon: <FaSellsy />,
      value: "10.5k",
      description: "Sellers active on our site",
      link: "/",
    },
    {
      icon: <FaSellsy />,
      value: "33k",
      description: "Monthly Product Sale",
      link: "/",
    },
    {
      icon: <FaSellsy />,
      value: "45.5k",
      description: "Customers active on our site",
      link: "/",
    },
    {
      icon: <FaSellsy />,
      value: "",
      description: "Annual gross sale on our site",
      link: "/",
    },
  ];

  const Categories = [
    {
      icon: <FaRing />,
      description: "",
      value: "Decoration",
      link: "/categories?category=Decoration",
    },
    {
      icon: <GiCrystalEarrings />,
      description: "",
      value: "Jewelry",
      link: "/categories?category=Jewelry",
    },
    {
      icon: <GiDominoTiles />,
      description: "",
      value: "Marbles & Tiles",
      link: "/categories?category=Tiles",
    },
    {
      icon: <BiSolidDish />,
      description: "",
      value: "Crockery",
      link: "/categories?category=Crockery",
    },
    {
      icon: <FaBowlRice />,
      description: "",
      value: "Bowls",
      link: "/categories?category=Bowl",
    },
  ];
  const [results, setResults] = useState([]);
  const filterProducts = (c) => {
    let value = c.toLowerCase();
    const filteredResults = Products.filter(item =>
      item.Category.toLowerCase().includes(value) ||
      item.Name.toLowerCase().includes(value) ||
      item.Desp.toLowerCase().includes(value)
    );
    setResults(filteredResults);
    handleSize(filteredResults.length);
  };
  return (
    <main className="sm:px-5 md:px-10 lg:px-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[530px] mb-20 overflow-hidden relative">
        <CategoriesNav />
        <div className="lg:w-4/5 w-full overflow-hidden z-0">
          <Carousel className="w-full max-w-full" />
        </div>
      </div>

      {/* Featured Products Carousel */}
      <div className="sm:px-0 px-5">
        <ProductsCarousel
          className="mt-20"
          title="Featured Products"
          heading="Most Popular"
          Products={Products}
          carouselId="PC1"
        />

        {/* View All Products Button */}
        <div className="flex items-center justify-center w-full h-32 border-b-2 border-gray-200  mb-20">
          <Link href="/products" className="py-3 px-10 bg-[#DB4444] text-white text-center">
            View All Products
          </Link>
        </div>

        {/* Categories Section */}
        <HeadingBar title="Categories" heading="Browse By Category" className="" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-16 border-b-2  border-gray-200 mb-20">
          {Categories.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>

        {/* Best Selling Products Carousel */}
        <ProductsCarousel
          title="This Month"
          heading="Best Selling Products"
          Products={Products}
          carouselId="PC2"
        />

        {/* Divider */}
        <div className="border-b-2 border-gray-200 mt-6 mb-20 "></div>

        {/* Explore Products Carousel */}
        <ProductsCarousel
          title="Our Products"
          heading="Explore Our Products"
          Products={Products}
          carouselId="PC3"
        />

        {/* New Arrival Section */}
        <HeadingBar title="Featured" heading="New Arrival" className="" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-h-[80vh] my-10 ">
          <div
            className="text-black bg-black text-center rounded-md row-span-2 col-span-1 sm:col-span-2 lg:col-span-2 p-6 opacity-80 flex items-end"
            style={{
              backgroundImage:
                "url(./images/tea_set_a1001.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardText link='/productdetails?id=456795' />
          </div>
          <div
            className="text-black bg-black text-center rounded-md col-span-1 sm:col-span-2 lg:col-span-2 p-6 opacity-80 flex items-end"
            style={{
              backgroundImage:
                "url(./images/decor_a1001.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
           <CardText link='/productdetails?id=456789' />

          </div>
          <div
            className="text-black bg-black text-center rounded-md p-6 opacity-80 flex items-end"
            style={{
              backgroundImage:
                "url(./images/dish_set_1001.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardText link='/productdetails?id=123460' />

          </div>
          <div
            className="text-black bg-black text-center rounded-md p-6 opacity-80 flex items-end"
            style={{
              backgroundImage:
                "url(./images/dinner_set_a401.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardText link='/productdetails?id=890124' />
          </div>
        </div>
      </div>
    </main>
  );
};

const CardText = (prop) => {
  console.log(prop.link);
  return (
    <div className="flex flex-col items-start justify-center text-sm">
      <p className="text-black font-bold text-3xl">Top Seller</p>
      <p className="text-black text-lg">100+ Reviews</p>
      <Link className="text-black font-semibold text-xl" href={`${prop.link}`}>
        Shop Now
      </Link>
    </div>
  )
}

export default Page;





