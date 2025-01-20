'use client'; // Required for client-side components
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Productcard from '../(components)/productcard/productcard';
import CategoriesNav from '../(components)/categories/categoriesNav';
import HeadingBar from "../(components)/headingBar/headingBar";
import Products from "../productdetails/productsData.json"
const Page = () => {
    const searchParams = useSearchParams();
    const [results, setResults] = useState([]);
    const c = searchParams.get('category');
    const [searchInput, setSearchInput] = useState(c || '');

    useEffect(() => {
        if (c) {
            setSearchInput(c);
            handleSearch(c);
        }
    }, [c]);

    // Logic for filtering products based on search input goes here...
    const handleSearch = (c) => {
        let value = c.toLowerCase();
        const filteredResults = Products.filter(item =>
            item.Category.toLowerCase().includes(value) ||
            item.Name.toLowerCase().includes(value) ||
            item.Desp.toLowerCase().includes(value)
        );
        setResults(filteredResults);
        handleSize(filteredResults.length);
    };

    const [size, setSize] = useState(true);
    const handleSize = (s) => {
        if (s > 0) {
            setSize(true);
        }
        else {
            setSize(false);
        }
    }
    return (
        <div className='flex px-0 lg:px-20'>
            <CategoriesNav />
            <div className='lg:w-4/5 w-full flex flex-col gap-5 p-8'>
                <HeadingBar title="Browse by Category" heading={c} className="" />
                {size ?
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {results.map((product) => (
                            <Productcard key={product.ProductID} product={product} />
                        ))}
                    </div>
                    :
                    <p>Product not available!!</p>
                }
            </div>
        </div>
    );
};

export default Page;
