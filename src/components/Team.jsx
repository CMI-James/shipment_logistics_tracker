import React from 'react';

const teamMembers = [
  {
    name: "Walter Blair",
    position: "Shipping And Logistics",
    image: "path/to/walter-blair.jpg",
  },
  {
    name: "Garreth Paul",
    position: "Parcel Packaging And Safety",
    image: "path/to/garreth-paul.jpg",
  },
  {
    name: "Amanda Anderson",
    position: "Customer Care Unit",
    image: "path/to/amanda-anderson.jpg",
  },
  {
    name: "John D. Tyler",
    position: "Warehousing And Local Transport",
    image: "path/to/john-d-tyler.jpg",
  },
];

const Team = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Our Team</h2>
      <p className="mb-6">
        Meet some of the people through whom we have come this far. Thank you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
