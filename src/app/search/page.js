'use client'; // Required for client-side components
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import React from 'react';
import Productcard from '../(components)/productcard/productcard';
import HeadingBar from "../(components)/headingBar/headingBar";
import Products from "../productdetails/productsData.json"
import Description from '../(components)/description/description';
const Page = () => {
    const searchParams = useSearchParams();
    const [results, setResults] = useState([]);
    const query = searchParams.get('q');
    const [searchInput, setSearchInput] = useState(query || '');

    useEffect(() => {
        if (query) {
            setSearchInput(query);
            handleSearch(query);
            
        }
    }, [query]);
    // Logic for filtering products based on search input goes here...
    const handleSearch = (query) => {
        const filteredResults = Products.filter(item =>
            item.Category.toLowerCase().includes(query.toLowerCase()) ||
            item.Name.toLowerCase().includes(query.toLowerCase()) ||
            item.Desp.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
        handleSize(filteredResults.length);
    };

    const [size, setSize] = useState(true);
    const handleSize = (s) => {
        if (s > 0){
            setSize(true);
        }
        else{
            setSize(false);
        }
    }
    return (
        <>
            <div className='flex flex-col gap-5 px-3 lg:px-20 py-5'>
                <HeadingBar title="Searched Products" heading={query.charAt(0).toUpperCase() + query.slice(1)} className="" />
                { size ?
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
                        {results.map((product) => (
                            <Productcard key={product.ProductID} product={product} />
                        ))}
                    </div>
                    :
                    <p>Product not available!!</p>
                }

            </div>
        </>
    );
};

export default Page;
