import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='max-w-3xl mx-auto mt-20 bg-black text-white p-6 rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold text-center mb-8'>GET IN TOUCH</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Address Card */}
        <div className='bg-black rounded-lg shadow-md p-6'>
          <div className='flex items-center mb-4'>
            <FaMapMarkerAlt className='text-4xl text-white mr-4' />
            <h2 className='text-xl font-bold'>Address</h2>
          </div>
          <pre className='whitespace-pre-wrap'>
            National Textile University
            Sheikhupur Road
            Near Syren Stop

            Northern Colorado Office
            6775 Sherman Street,
            Loveland, CO 80538
          </pre>
        </div>

        {/* Email Card */}
        <div className='bg-black rounded-lg shadow-md p-6'>
          <div className='flex items-center mb-4'>
            <FaEnvelope className='text-4xl text-white mr-4' />
            <h2 className='text-xl font-bold'>Email</h2>
          </div>
          <a href='mailto:mr_ehtsham@yahoo.com' className='text-lg hover:underline'>mr_ehtsham@yahoo.com</a>
        </div>

        {/* Phone Card */}
        <div className='bg-black rounded-lg shadow-md p-6'>
          <div className='flex items-center mb-4'>
            <FaPhone className='text-4xl text-white mr-4' />
            <h2 className='text-xl font-bold'>Phone</h2>
          </div>
          <a href='tel:+92-3211848495' className='text-lg hover:underline'>(+92) 3211848495</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
