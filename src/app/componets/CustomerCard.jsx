"use client"
import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios';
import Link from 'next/link';

const CustomerCard = ({ customer }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this Customer's Data?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            await axios.delete(`/api/customers/${id}`);
            alert("delete Successfully");
            // router.refresh("/");
            window.location.href = "/users/view";
        } catch (error) {
            alert("Error in deletion");
        }
    };

    return (
        <div className="">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {customer.firstName} `s Information
                </h2>
                <div className="grid grid-cols-8">
                    <div className="col-span-2 md:col-span-1 rounded-md p-4">
                        <p className="text-lg font-semibold mb-2">First Name:</p>
                        <p>{customer.firstName}</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 rounded-md p-4">
                        <p className="text-lg font-semibold mb-2">Last Name:</p>
                        <p>{customer.lastName}</p>
                    </div>
                    <div className="col-span-2 rounded-md p-4">
                        <p className="text-lg font-semibold mb-2">Email:</p>
                        <p>{customer.email}</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 rounded-md p-4">
                        <p className="text-lg font-semibold mb-2">Address:</p>
                        <p>{customer.address}</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 rounded-md p-4">
                        <p className="text-lg font-semibold mb-2">Mobile:</p>
                        <p>{customer.mobileNo}</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 rounded-md p-4">
                        <p className="text-lg font-semibold mb-2">Left Eyesight:</p>
                        <p>{customer.leftEyesight}</p>
                    </div>
                    <div className="col-span-2 md:col-span-1   rounded-md p-4">
                        <p className="text-lg font-semibold mb-2">Right Eyesight:</p>
                        <p>{customer.rightEyesight}</p>
                    </div>
                </div>
            </div>
            <div className="  px-6 py-4 flex justify-end items-center">
                <span className="custom-checkbox">
            <Link href={`/users/update/${customer.id}`} className="text-white underline bg-green-800 p-2">
              <button>
              Update
              </button>
            </Link>            
                    <label htmlFor={`checkbox${customer._id}`}></label>
                </span>
                <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 ml-2" onClick={() => handleDelete(customer.id)}>
                    <AiOutlineDelete className="inline-block mr-2" /> <span>Delete</span>
                </button>
            </div>
        </div>
    );
};

export default CustomerCard;
