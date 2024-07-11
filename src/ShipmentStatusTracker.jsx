import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from "react-icons/md";

const ShipmentStatusTracker = ({ status, onChange }) => {
  const statuses = ["Processed", "Shipped", "En Route", "Arrived"];

  const getStatusClass = (currentStatus) => {
    const currentStatusIndex = statuses.indexOf(currentStatus);
    return (statusIndex) => {
      if (statusIndex < currentStatusIndex) {
        return "text-green-500";
      } else if (statusIndex === currentStatusIndex) {
        return "text-green-500 animate-pulse";
      } else {
        return "text-gray-300";
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
    <div className="flex items-center w-full max-w-lg my-4">
      {statuses.map((stat, index) => (
        <React.Fragment key={stat}>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => handleStatusClick(stat)}
          >
            <div className={`rounded-full p-0 ${statusClass(index)}`}>
              {index <= statuses.indexOf(status) ? (
                <FaCheckCircle className="text-xl" />
              ) : (
                <MdRadioButtonUnchecked className="text-xl" />
              )}
            </div>
            <p className="mt-2 text-sm">{stat}</p>
          </div>
          {index !== statuses.length - 1 && (
            <div className="flex-grow h-1  mx-1 relative">
              <div
                className={`absolute bottom-3 left-0 h-full ${
                  index < statuses.indexOf(status) ? "bg-green-500" : ""
                }`}
                style={{
                  width: index < statuses.indexOf(status) ? "100%" : "0%",
                }}
              ></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ShipmentStatusTracker;
