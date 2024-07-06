import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdRadioButtonUnchecked } from 'react-icons/md';

const ShipmentStatusTracker = ({ status, onChange }) => {
  const statuses = ['Processed', 'Shipped', 'En Route', 'Arrived'];

  const getStatusClass = (currentStatus) => {
    const currentStatusIndex = statuses.indexOf(currentStatus);
    return (statusIndex) => {
      if (statusIndex < currentStatusIndex) {
        return 'bg-green-500 text-white';
      } else if (statusIndex === currentStatusIndex) {
        return 'bg-green-500 text-white';
      } else {
        return 'bg-gray-300 text-gray-600';
      }
    };
  };

  const handleStatusClick = (newStatus) => {
    if (onChange) {
      onChange(newStatus);
    }
  };

  const statusClass = getStatusClass(status);

  return (
    <div className="flex justify-between items-center w-full max-w-lg my-4">
      {statuses.map((stat, index) => (
        <div key={stat} className="flex items-center cursor-pointer" onClick={() => handleStatusClick(stat)}>
          <div className={`rounded-full p-2 ${statusClass(index)}`}>
            {index <= statuses.indexOf(status) ? (
              <FaCheckCircle className="text-lg" />
            ) : (
              <MdRadioButtonUnchecked className="text-lg" />
            )}
          </div>
          {index !== statuses.length - 1 && (
            <div className="flex-1 h-1 mx-2 bg-gray-300">
              <div
                className={`h-1 ${statusClass(index)}`}
                style={{ width: index < statuses.indexOf(status) ? '100%' : '0%' }}
              ></div>
            </div>
          )}
          <p className="ml-2 text-sm">{stat}</p>
        </div>
      ))}
    </div>
  );
};

export default ShipmentStatusTracker;
