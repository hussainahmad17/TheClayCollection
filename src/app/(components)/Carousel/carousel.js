"use client"; // Required for client-side rendering in Next.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
export default function Page() {
    return (
        <div style={{ width: '660px', marginLeft: 'auto', height:'440px' }}>
            <Carousel>
                <div>
                    <img src="https://i.pinimg.com/736x/67/a0/00/67a000e9743a2d4d7d1e3240e3db82fc.jpg" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/ab/02/80/ab0280ce432fa9b03f7940c5d496fce5.jpg" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/736x/9f/0a/a0/9f0aa03b725b0331aeacf07f9fef558a.jpg" alt="Slide 3" />
                </div>
            </Carousel>
        </div>
    );
}
 
