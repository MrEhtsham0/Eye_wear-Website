import React from 'react';
import Image from 'next/image';
import logo from '../../../public/assets/logo.png';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTiktok, FaPhone } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            {/* Top Navbar */}
            <div className="flex items-center justify-between w-full bg-black text-white p-2">
                <div className="flex items-center ml-20">
                    <Link href="/">
                    <Image src={logo} alt="logo" width={100} height={60} />
                    </Link>
                    <p className="ml-20 text-2xl hover:text-red-600 cursor-pointer">Most Trusted Eyewear in Pakistan</p>
                </div>
                <div className="hover:text-red-600 cursor-pointer text-2xl">
                    <p>WhatsApp us: +923211848495</p>
                </div>
                <div className="flex items-center space-x-3 mr-20">
                    <a href="https://www.instagram.com" target="_blank" className="px-3">
                        <FaInstagram className="text-xl" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" className="px-3">
                        <FaFacebookF className="text-xl" />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" className="px-3">
                        <FaTiktok className="text-xl" />
                    </a>
                    <a href="tel:+923211848495" className="px-3">
                        <FaPhone className="text-xl" />
                    </a>
                </div>
            </div>

            {/* Bottom Navbar */}
            <div className="w-full bg-black text-white p-3 mt-2">
                <div className="ml-10 text-xl flex space-x-5">
                    <Link href="/" className="hover:text-red-600">Home</Link>
                    <Link href="/about" className="hover:text-red-600">About</Link>
                    <Link href="/contact" className="hover:text-red-600">Contact us</Link>
                    <Link href="/returnpolicy" className="hover:text-red-600">Return Policy</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
