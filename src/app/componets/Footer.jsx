// components/Footer.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fb from '../../../public/assets/fb.svg';
import instagram from '../../../public/assets/instagram.svg';
import twitter from '../../../public/assets/twitter.svg';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 mt-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Company</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">Careers</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Support</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">Contact Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">Help Center</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Legal</h2>
                        <ul>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">Privacy Policy</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">Terms of Service</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">Cookie Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <Link href="/contact">
                            <Image
                                    src={fb}
                                    alt="Facebook"
                                    width={100}
                                    height={100}
                                    className='rounded-full transition-transform duration-300 transform hover:scale-110 filter invert'
                                    style={{ filter: 'invert(100%)' }}
                                />
                            </Link>
                            <Link href="/contact">
                            <Image
                                    src={instagram}
                                    alt="Facebook"
                                    width={100}
                                    height={100}
                                    className='rounded-full transition-transform duration-300 transform hover:scale-110 filter invert'
                                    style={{ filter: 'invert(100%)' }}
                                />
                            </Link>
                            <Link href="/contact">
                            <Image
                                    src={twitter}
                                    alt="Facebook"
                                    width={100}
                                    height={100}
                                    className='rounded-full transition-transform duration-300 transform hover:scale-110 filter invert'
                                    style={{ filter: 'invert(100%)' }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-gray-400">&copy; 2024 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
