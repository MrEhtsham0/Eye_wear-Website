import React from 'react';
import Head from 'next/head';

const ReturnPolicy = () => {
    return (
        <div className="max-w-3xl mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
            <Head>
                <title>Return Policy - Your Eyeglass Shop</title>
                <meta name="description" content="Return policy for eyeglass shop" />
            </Head>
            <h1 className="text-3xl font-bold text-center mb-8">Return Policy</h1>
            <div className="prose">
                <p>
                    We want you to be satisfied with your eyeglass purchase. If you are not entirely satisfied,
                    we are here to help.
                </p>
                <h2 className="text-xl font-semibold mt-6 mb-2">Return Eligibility</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>Items must be returned within 30 days of purchase.</li>
                    <li>Items must be unused and in the same condition as received.</li>
                    <li>Original packaging must be intact.</li>
                </ul>
                <h2 className="text-xl font-semibold mb-2">Returns Process</h2>
                <p className="mb-4">
                    To initiate a return, please contact our customer service team at{' '}
                    <a href="mailto:mr_ehtsham@yahoo.com" className="text-blue-500 hover:underline">
                        customer-service@example.com
                    </a>{' '}
                    or call us at{' '}
                    <a href="tel:+923211848495" className="text-blue-500 hover:underline">
                        +1 (234) 567-890
                    </a>
                    . Please provide your order number and reason for return.
                </p>
                <h2 className="text-xl font-semibold mb-2">Refunds</h2>
                <p className="mb-4">
                    Once we receive your item, we will inspect it and notify you that we have received your returned
                    item. We will immediately notify you on the status of your refund after inspecting the item.
                </p>
                <p className="mb-4">
                    If your return is approved, we will initiate a refund to your credit card (or original method of payment).
                    You will receive the credit within a certain amount of days, depending on your card issuers policies.
                </p>
                <h2 className="text-xl font-semibold mb-2">Shipping</h2>
                <p className="mb-6">
                    You will be responsible for paying for your own shipping costs for returning your item.
                </p>
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p className="mb-6">
                    If you have any questions about our Return Policy, please contact us:{' '}
                    <a href="/contact" className="text-blue-500 hover:underline">
                        Contact Us
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ReturnPolicy;
