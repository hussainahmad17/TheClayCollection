'use client'; // Required for client-side components
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Productcard from '../(components)/productcard/productcard';
import CategoriesNav from '../(components)/categories/categoriesNav';
import HeadingBar from "../(components)/headingBar/headingBar";
import Products from "../productdetails/productsData.json";
const Page = () => {
    return (
        <div className='flex px-3 lg:px-20'>
            <CategoriesNav />
            <div className='lg:w-4/5 w-full flex flex-col gap-5 p-5'>
                <HeadingBar title="All Products" heading="What we deliver" className="" />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {Products.map((product) => (
                        <Productcard key={product.ProductID} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;