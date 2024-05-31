import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
            <div className="bg-white shadow-md rounded-lg p-5 w-11/12 max-w-4xl">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                    <Image src={logo} alt="Logo" width={200} height={80} className="rounded-md" />
                    <h1 className="text-4xl font-bold text-center text-blue-600 mt-5 md:mt-0">About Us</h1>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-5">
                    Welcome to our eyewear store! We are dedicated to providing you with the most trusted eyewear products in Pakistan. Our mission is to offer high-quality and stylish eyewear that meets the needs of every customer.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-5">
                    We understand that your eyewear is more than just a tool to improve your vision; it is a fashion statement and a reflection of your personality. That is why we offer a wide range of eyewear options to cater to different styles and preferences. From classic designs to the latest trends, we have something for everyone.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-5">
                    Our team is committed to providing exceptional customer service and ensuring that your shopping experience is seamless and enjoyable. Whether you are looking for prescription glasses, sunglasses, or contact lenses, we are here to help you find the perfect fit.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-5">
                    Thank you for choosing our eyewear store. We look forward to serving you and helping you see the world more clearly.
                </p>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Vision</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-5">
                        To be the leading provider of high-quality eyewear products in Pakistan, recognized for our commitment to quality, style, and customer satisfaction.
                    </p>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-5">
                        To offer a diverse range of eyewear products that cater to the needs of our customers, while providing exceptional customer service and ensuring a seamless shopping experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
