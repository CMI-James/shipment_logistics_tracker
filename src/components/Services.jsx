import React from 'react';

const Services = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">More</h2>
        <p className="text-gray-600 mb-8">
          WE HAVE A WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU WITH YOUR EVERY SHIPPING NEED
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <div className="text-orange-500 text-6xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">WAREHOUSING</h3>
            <p className="text-gray-700">
              Sea Wave Logistics as a Warehousing Agent, provides high level professional warehousing services assuring the safe arrival of your shipment.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <div className="text-orange-500 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-bold mb-2">PACKAGING AND STORAGE</h3>
            <p className="text-gray-700">
              Sea Wave Logistics has designed a customized packaging solutions specifically for the prevention of transit damages like breakages, scratches, abrasions etc.
            </p>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <div className="text-orange-500 text-6xl mb-4">🚆</div>
            <h3 className="text-xl font-bold mb-2">RAILWAY LOGISTICS</h3>
            <p className="text-gray-700">
              Sea Wave Logistics Rail Freight services have been designed for those clients who require a safe and efficient way to move their cargo from places in mint condition.
            </p>
          </div>
        </div>
        <a href="#" className="text-orange-500 font-bold mt-8 inline-block">All Services</a>
      </div>
    </div>
  );
};

export default Services;
