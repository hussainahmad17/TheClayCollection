"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import Productcard from '../(components)/productcard/productcard';
import Products from "../productdetails/productsData.json"
import Description from '../(components)/description/description';
import HeadingBar from '../(components)/headingBar/headingBar';
const Page = () => {
  const searchParams = useSearchParams();
  const [results, setResults] = useState([]);
  const c = searchParams.get("id");

  useEffect(() => {
    if (c) {
      handleSearch();
    }
  }, [c]);

  // Logic for filtering products based on search input goes here...
  const handleSearch = () => {
    let value = parseInt(c, 10);
    const filteredResults = Products.filter(item =>
      item.ID === value
    );
    // console.log(filteredResults);
    setResults(filteredResults);
  };
  
  return (
    <>
      <div className='px-5 lg:px-20 py-5'>
        <Description product={results[0]}/>
        <HeadingBar title="For you" heading="People also search for" />
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-10'>
          {Products.map((product) => (
            <Productcard key={product.ProductID} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
