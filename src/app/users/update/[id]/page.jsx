"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Page({ params }) {
    const id = params.id;
    console.log("Params id-----", id);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [leftEyesight, setleftEyesight] = useState("");
    const [rightEyesight, setrightEyesight] = useState("");

    useEffect(() => {
        console.log("id:", id);
        const getUserRecord = async () => {
            try {
                const response = await axios.get(`/api/customers/${id}`);
                setfirstName(response.data[0].firstName);
                setlastName(response.data[0].lastName);
                setemail(response.data[0].email);
                setaddress(response.data[0].address);
                setmobileNo(response.data[0].mobileNo);
                setleftEyesight(response.data[0].leftEyesight);
                setrightEyesight(response.data[0].rightEyesight);
                console.log("response.data.firstName: ", response.data[0].firstName);
                console.log("response.data.lastName: ", response.data[0].lastName);
                console.log("response.data.email: ", response.data[0].email);
                console.log("response.data.address: ", response.data[0].address);
                console.log("response.data.mobileNo: ", response.data[0].mobileNo);
                console.log("response.data.leftEyesight: ", response.data[0].leftEyesight);
                console.log("response.data.rightEyesight: ", response.data[0].rightEyesight);
            } catch (error) {
                toast.error("Error fetching user record");
            }
        }

        getUserRecord();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            address,
            mobileNo,
            leftEyesight,
            rightEyesight,
        }

        try {
            await axios.put(`/api/customers/${id}`, formData);
            toast.success("Successfully updated");
            setTimeout(() => {
                window.location.href = "/users/view";
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            toast.error("Failed to update");
        }
    }

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-md mb-4">
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Mobile Number"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={(e) => setmobileNo(e.target.value)}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Left Eyesight"
                    name="leftEyesight"
                    value={leftEyesight}
                    onChange={(e) => setleftEyesight(e.target.value)}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Right Eyesight"
                    name="rightEyesight"
                    value={rightEyesight}
                    onChange={(e) => setrightEyesight(e.target.value)}
                    className="block w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded w-full">
                    Update Customer
                </button>
            </form>
        </div>
    );
}

export default Page;
