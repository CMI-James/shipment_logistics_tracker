import React from 'react';

const Support = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Get Support</h2>
      <p className="mb-6">Get help from our customer care unit. You can request a quote.</p>
      <form className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input type="text" placeholder="Your Name" className="border p-4 rounded-lg"/>
          <input type="email" placeholder="Your Email" className="border p-4 rounded-lg"/>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <input type="tel" placeholder="Your Phone" className="border p-4 rounded-lg"/>
          <textarea placeholder="Write Us A Message" className="border p-4 rounded-lg h-32"></textarea>
        </div>
        <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600">Send Message</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="font-bold mb-2">Our Address</h3>
          <p>347-349 Goswell Rd, The Angel, EC1V 7JN, UK</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="font-bold mb-2">Email Us</h3>
          <p>support@seawavelogistics.com</p>
          <p>shipment@seawavelogistics.com</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h3 className="font-bold mb-2">Call Us</h3>
          <p>+1 (209) 651-4610</p>
          <p>+44 7498137429</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
