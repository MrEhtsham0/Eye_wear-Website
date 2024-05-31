"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConfirmModal from './ConfirmModal';
import glass1 from '../../../public/assets/glass1.png';
import glass2 from '../../../public/assets/glass2.png';
import glass3 from '../../../public/assets/glass3.png';
import glass4 from '../../../public/assets/glass4.png';
import glass5 from '../../../public/assets/glass5.png';
import glass6 from '../../../public/assets/glass6.png';
import glass7 from '../../../public/assets/glass7.png';
import glass8 from '../../../public/assets/glass8.png';
import glass9 from '../../../public/assets/glass9.png';
import glass10 from '../../../public/assets/glass10.png';
import glass11 from '../../../public/assets/glass11.png';
import glass12 from '../../../public/assets/glass12.png';
import glass13 from '../../../public/assets/glass13.png';
import glass14 from '../../../public/assets/glass14.png';
import glass15 from '../../../public/assets/glass15.png';
import glass16 from '../../../public/assets/glass16.png';
import sun1 from '../../../public/assets/sun1.png';
import sun2 from '../../../public/assets/sun2.png';
import sun3 from '../../../public/assets/sun3.png';
import sun4 from '../../../public/assets/sun4.png';

const Slider = () => {
    const glasses = [
        { id: 1, src: glass9, alt: 'Luxury Glass 1', name: 'Aviator Classic', price: '$50', description: '' },
        { id: 2, src: glass10, alt: 'Luxury Glass 2', name: 'Elegant Vision', price: '$60', description: '' },
        { id: 3, src: glass11, alt: 'Luxury Glass 3', name: 'Prestige Pro', price: '$55', description: '' },
        { id: 4, src: glass12, alt: 'Luxury Glass 4', name: 'Sophisticated Shades', price: '$70', description: '' },
    ];

    const screenGlasses = [
        { id: 5, src: glass13, alt: 'Screen Glass 1', name: 'Digital Defender', price: '$30', description: '' },
        { id: 6, src: glass14, alt: 'Screen Glass 2', name: 'Blue Light Blocker', price: '$35', description: '' },
        { id: 7, src: glass15, alt: 'Screen Glass 3', name: 'Screen Shield', price: '$40', description: '' },
        { id: 8, src: glass16, alt: 'Screen Glass 4', name: 'Tech Protector', price: '$45', description: '' },
    ];

    const sunGlasses = [
        { id: 9, src: sun1, alt: 'Sun Glass 1', name: 'Sunny Days', price: '$25', description: '' },
        { id: 10, src: sun2, alt: 'Sun Glass 2', name: 'Beach Breeze', price: '$30', description: '' },
        { id: 11, src: sun3, alt: 'Sun Glass 3', name: 'Summer Shade', price: '$28', description: '' },
        { id: 12, src: sun4, alt: 'Sun Glass 4', name: 'Outdoor Explorer', price: '$32', description: '' },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleQuickReview = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleDelete = () => {
        console.log("Item deleted.");
        setModalOpen(false);
    };

    return (
        <div>
            <h1 className='text-3xl font-bold m-3 text-center'>Shop By Category</h1>
            <div className='grid grid-cols-4 m-10'>
                <Image
                    src={glass1}
                    alt="Category 1"
                    width={250}
                    height={100}
                    className='rounded-full transition-transform duration-300 transform hover:scale-110'
                />
                <Image
                    src={glass5}
                    alt="Category 2"
                    width={250}
                    height={100}
                    className='rounded-full transition-transform duration-300 transform hover:scale-110'
                />
                <Image
                    src={glass3}
                    alt="Category 3"
                    width={250}
                    height={100}
                    className='rounded-full transition-transform duration-300 transform hover:scale-110'
                />
                <Image
                    src={glass4}
                    alt="Category 4"
                    width={250}
                    height={100}
                    className='rounded-full transition-transform duration-300 transform hover:scale-110'
                />
                <Image
                    src={glass2}
                    alt="Category 5"
                    width={250}
                    height={100}
                    className='rounded-full transition-transform duration-300 transform hover:scale-110 mt-5'
                />
                <Image
                    src={glass6}
                    alt="Category 6"
                    width={250}
                    height={100}
                    className='rounded-full transition-transform duration-300 transform hover:scale-110 mt-5'
                />
                <Image
                    src={glass7}
                    alt="Category 7"
                    width={250}
                    height={100}
                    className='rounded-full transition-transform duration-300 transform hover:scale-110 mt-5'
                />
                <Image
                    src={glass8}
                    alt="Category 8"
                    width={250}
                    height={100}
                    className='rounded-full transition-transform duration-300 transform hover:scale-110 mt-5'
                />
            </div>

            {/* Luxury glasses portion */}
            <h1 className='text-3xl font-bold m-3 text-center'>Luxury Glasses</h1>
            <div className='grid grid-cols-4 m-5'>
                {glasses.map((glass) => (
                    <div key={glass.id}>
                        <Image
                            src={glass.src}
                            alt={glass.alt}
                            width={260}
                            height={100}
                        />
                        <h2 className="text-lg font-semibold mt-2">{glass.name}</h2>
                        <p className="text-gray-500">{glass.description}</p>
                        <p className="text-black font-bold">{glass.price}</p>
                        <button
                            type="button"
                            onClick={() => handleQuickReview(glass)}
                            className="bg-black text-white px-20 py-2 rounded-md font-bold mt-2"
                        >
                            Quick Review
                        </button>
                    </div>
                ))}
            </div>

            {/* Screen Glasses portion */}
            <h1 className='text-3xl font-bold m-10 text-center'>Screen Glasses</h1>
            <div className='grid grid-cols-4 m-5'>
                {screenGlasses.map((glass) => (
                    <div key={glass.id}>
                        <Image
                            src={glass.src}
                            alt={glass.alt}
                            width={260}
                            height={100}
                        />
                        <h2 className="text-lg font-semibold mt-2">{glass.name}</h2>
                        <p className="text-gray-500">{glass.description}</p>
                        <p className="text-black font-bold">{glass.price}</p>
                        <button
                            type="button"
                            onClick={() => handleQuickReview(glass)}
                            className="bg-black text-white px-20 py-2 rounded-md font-bold mt-2"
                        >
                            Quick Review
                        </button>
                    </div>
                ))}
            </div>

            {/* Male Sun Glasses portion */}
            <h1 className='text-3xl font-bold m-10 text-center'>Male Sun Glasses</h1>
            <div className='grid grid-cols-4 m-5'>
                {sunGlasses.map((glass) => (
                    <div key={glass.id}>
                        <Image
                            src={glass.src}
                            alt={glass.alt}
                            width={260}
                            height={100}
                        />
                        <h2 className="text-lg font-semibold mt-2">{glass.name}</h2>
                        <p className="text-gray-500">{glass.description}</p>
                        <p className="text-black font-bold">{glass.price}</p>
                        <button
                            type="button"
                            onClick={() => handleQuickReview(glass)}
                            className="bg-black text-white px-20 py-2 rounded-md font-bold mt-2"
                        >
                            Quick Review
                        </button>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <ConfirmModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onConfirm={handleDelete}
                    product={selectedProduct}
                />
            )}
        </div>
    );
};

export default Slider;
