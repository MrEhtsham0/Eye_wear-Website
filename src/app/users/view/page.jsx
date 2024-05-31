// components/CustomerList.js
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerCard from '@/app/componets/CustomerCard';
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers'); // Fetching customers from API route
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold m-4 bg-gray-300 text-white hover:text-red-600 text-center">Display Customers Data</h2>
      {customers.length === 0 ? (
        <p className="bg-gray-400 text-white text-center p-4 rounded-lg">No customers found.</p>
      ) : (
        <div className="grid grid-cols-1">
          {customers.map((customer) => (
            <div key={customer._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerList;