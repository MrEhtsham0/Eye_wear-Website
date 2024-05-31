"use client";
import React, { useState } from "react";
import axios from "axios"; // Importing Axios for HTTP requests
import { toast, ToastContainer } from "react-toastify"; // Importing react-toastify for displaying toast notifications
import 'react-toastify/dist/ReactToastify.css';

// Component definition for CustomerForm
const CustomerForm = ({ onAddCustomers }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobileNo: "",
    leftEyesight: "",
    rightEyesight: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, address, mobileNo, leftEyesight, rightEyesight } = formData;
    const errorsObj = {};

    if (!firstName.trim()) {
      errorsObj.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      errorsObj.lastName = "Last name is required";
    }
    if (!email.trim()) {
      errorsObj.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      errorsObj.email = "Email must be a valid email address";
    }
    if (!address.trim()) {
      errorsObj.address = "Address is required";
    }
    if (!leftEyesight.trim()) {
      errorsObj.leftEyesight = "Left eyesight is required";
    }
    if (!rightEyesight.trim()) {
      errorsObj.rightEyesight = "Right eyesight is required";
    }
    if (!mobileNo.trim()) {
      errorsObj.mobileNo = "Mobile number is required";
    }

    setErrors(errorsObj);
    return Object.keys(errorsObj).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("/api/customers", formData);
      // onAddCustomers(response.data);//props is read only cant set this
      toast.success("Customer's data added successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        mobileNo: "",
        leftEyesight: "",
        rightEyesight: "",
      });
    } catch (error) {
      console.error("Error adding customer data:", error);
      const errorMessage = error.response?.data?.message || "Failed to add Customer's data";
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-red-600 font-bold mt-2 mb-2 text-center">Please Add Your Information to Proceed Order</h1>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-4">
      <ToastContainer />
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={`bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-4 w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"} focus:border-lime-500`}
      />
      {errors.firstName && <p className="text-red-500 text-sm mb-4">{errors.firstName}</p>}
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className={`bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-4 w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"} focus:border-lime-500`}
      />
      {errors.lastName && <p className="text-red-500 text-sm mb-4">{errors.lastName}</p>}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={`bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-4 w-full border ${errors.email ? "border-red-500" : "border-gray-300"} focus:border-lime-500`}
      />
      {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}
      <input
        type="text"
        placeholder="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className={`bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-4 w-full border ${errors.address ? "border-red-500" : "border-gray-300"} focus:border-lime-500`}
      />
      {errors.address && <p className="text-red-500 text-sm mb-4">{errors.address}</p>}
      <input
        type="text"
        placeholder="Mobile Number"
        name="mobileNo"
        value={formData.mobileNo}
        onChange={handleChange}
        className={`bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-4 w-full border ${errors.mobileNo ? "border-red-500" : "border-gray-300"} focus:border-lime-500`}
      />
      {errors.mobileNo && <p className="text-red-500 text-sm mb-4">{errors.mobileNo}</p>}
      <input
        type="text"
        placeholder="Left Eyesight"
        name="leftEyesight"
        value={formData.leftEyesight}
        onChange={handleChange}
        className={`bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-4 w-full border ${errors.leftEyesight ? "border-red-500" : "border-gray-300"} focus:border-lime-500`}
      />
      {errors.leftEyesight && <p className="text-red-500 text-sm mb-4">{errors.leftEyesight}</p>}
      <input
        type="text"
        placeholder="Right Eyesight"
        name="rightEyesight"
        value={formData.rightEyesight}
        onChange={handleChange}
        className={`bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mb-4 w-full border ${errors.rightEyesight ? "border-red-500" : "border-gray-300"} focus:border-lime-500`}
      />
      {errors.rightEyesight && <p className="text-red-500 text-sm mb-4">{errors.rightEyesight}</p>}
      <button type="submit" className="bg-black text-white font-bold py-2 px-4 rounded w-full">
        Add Customer
      </button>
    </form>
    </div>
  );
};

export default CustomerForm;
