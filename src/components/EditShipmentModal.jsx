// src/components/EditShipmentModal.js
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useAuth } from "../AuthContext";
import { db } from "../firebaseConfig";
import { addDoc, updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import cancel from "/images/cancel.svg";
import ShipmentStatusTracker from "../ShipmentStatusTracker";

Modal.setAppElement("#root");

const EditShipmentModal = ({ isOpen, onRequestClose, shipment, editMode }) => {
  const countryOptions = countryList().getData();
  const [sender, setSender] = useState({ name: "", phone: "", email: "" });
  const [receiver, setReceiver] = useState({ name: "", phone: "", email: "" });
  const [shipmentDetails, setShipmentDetails] = useState({
    shippingDate: new Date(),
    arrivalDate: new Date(),
    contentName: "",
    countryFrom: null,
    countryTo: null,
    customClearanceFee: "",
    status: "processed",
  });

  useEffect(() => {
    if (editMode && shipment) {
      setSender(shipment.sender);
      setReceiver(shipment.receiver);
      setShipmentDetails({
        shippingDate: new Date(shipment.shippingDate.seconds * 1000),
        arrivalDate: new Date(shipment.arrivalDate.seconds * 1000),
        contentName: shipment.contentName,
        countryFrom: shipment.countryFrom,
        countryTo: shipment.countryTo,
        customClearanceFee: shipment.customClearanceFee,
        status: shipment.status,
      });
    }
  }, [editMode, shipment]);

  const handleDateChange = (date, field) => {
    setShipmentDetails((prevDetails) => ({
      ...prevDetails,
      [field]: date,
    }));
  };

  const handleInputChange = (value, entity, isCountry = false) => {
    if (entity === "sender") {
      setSender((prevSender) => ({
        ...prevSender,
        ...value,
      }));
    } else if (entity === "receiver") {
      setReceiver((prevReceiver) => ({
        ...prevReceiver,
        ...value,
      }));
    } else {
      setShipmentDetails((prevDetails) => ({
        ...prevDetails,
        ...value,
      }));
    }
  };

  const generateTrackingCode = () => {
    const prefix = "TWL";
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    return prefix + randomNumber.toString().substring(0, 9);
  };

  const handleSaveShipment = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        const shipmentRef = doc(db, "shipments", shipment.id);
        await updateDoc(shipmentRef, { sender, receiver, ...shipmentDetails });
        toast.success("Shipment updated successfully");
      } else {
        const trackingCode = generateTrackingCode();
        const shipmentData = {
          sender,
          receiver,
          ...shipmentDetails,
          trackingCode,
        };
        await addDoc(collection(db, "shipments"), shipmentData);
        toast.success("Shipment added successfully");
      }
      onRequestClose();
      resetForm();
    } catch (error) {
      toast.error("Error saving shipment: " + error.message);
    }
  };

  const resetForm = () => {
    setSender({ name: "", phone: "", email: "" });
    setReceiver({ name: "", phone: "", email: "" });
    setShipmentDetails({
      shippingDate: new Date(),
      arrivalDate: new Date(),
      contentName: "",
      countryFrom: "",
      countryTo: "",
      customClearanceFee: "",
      status: "processed",
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: "0",
          width: "90%",
          maxWidth: "40rem",
          height: "auto",
          maxHeight: "80%",
          borderRadius: "20px",
          overflowY: "auto",
        },
      }}
    >
      <div className="w-full justify-center items-center p-[1rem] bg-zinc-100 rounded-md relative">
        <button
          className="absolute w-[1.5rem] top-1 right-1"
          type="button"
          onClick={onRequestClose}
        >
          <img src={cancel} alt="" className="w-[2rem] animate-pulse" />
        </button>
        <h2 className="text-[1.5rem] text-center">
          {editMode ? "Edit Shipment" : "New Shipment"}
        </h2>
        <form
          onSubmit={handleSaveShipment}
          className="flex flex-col items-center"
        >
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="text-center">Sender Details</h3>
              <label className="flex flex-col">
                Name:
                <input
                  type="text"
                  value={sender.name}
                  onChange={(e) =>
                    handleInputChange({ name: e.target.value }, "sender")
                  }
                  required
                />
              </label>
              <label className="flex flex-col">
                Phone:
                <input
                  type="text"
                  value={sender.phone}
                  onChange={(e) =>
                    handleInputChange({ phone: e.target.value }, "sender")
                  }
                  required
                />
              </label>
              <label className="flex flex-col">
                Email:
                <input
                  type="email"
                  value={sender.email}
                  onChange={(e) =>
                    handleInputChange({ email: e.target.value }, "sender")
                  }
                  required
                />
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-center">Receiver Details</h3>
              <label className="flex flex-col">
                Name:
                <input
                  type="text"
                  value={receiver.name}
                  onChange={(e) =>
                    handleInputChange({ name: e.target.value }, "receiver")
                  }
                  required
                />
              </label>
              <label className="flex flex-col">
                Phone:
                <input
                  type="text"
                  value={receiver.phone}
                  onChange={(e) =>
                    handleInputChange({ phone: e.target.value }, "receiver")
                  }
                  required
                />
              </label>
              <label className="flex flex-col">
                Email:
                <input
                  type="email"
                  value={receiver.email}
                  onChange={(e) =>
                    handleInputChange({ email: e.target.value }, "receiver")
                  }
                  required
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 mt-2">
            <h3 className="text-center">Shipment Details</h3>
            <label className="flex justify-between gap-2">
              Content Name:
              <input
                type="text"
                name="contentName"
                value={shipmentDetails.contentName}
                onChange={(e) =>
                  handleInputChange(
                    { contentName: e.target.value },
                    "shipmentDetails"
                  )
                }
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Country From:
              <Select
                options={countryOptions}
                value={shipmentDetails.countryFrom}
                onChange={(value) =>
                  handleInputChange(
                    { countryFrom: value },
                    "shipmentDetails"
                  )
                }
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Country To:
              <Select
                options={countryOptions}
                value={shipmentDetails.countryTo}
                onChange={(value) =>
                  handleInputChange({ countryTo: value }, "shipmentDetails")
                }
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Shipping Date:
              <DatePicker
                selected={shipmentDetails.shippingDate}
                onChange={(date) => handleDateChange(date, "shippingDate")}
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Arrival Date:
              <DatePicker
                selected={shipmentDetails.arrivalDate}
                onChange={(date) => handleDateChange(date, "arrivalDate")}
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Custom Clearance Fee:
              <input
                type="text"
                name="customClearanceFee"
                value={shipmentDetails.customClearanceFee}
                onChange={(e) =>
                  handleInputChange(
                    { customClearanceFee: e.target.value },
                    "shipmentDetails"
                  )
                }
                required
              />
            </label>
            <label className="flex justify-between gap-2">
              Status:
              <select
                name="status"
                value={shipmentDetails.status}
                onChange={(e) =>
                  handleInputChange({ status: e.target.value }, "shipmentDetails")
                }
                required
              >
                <option value="processed">Processed</option>
                <option value="shipped">Shipped</option>
                <option value="in transit">In Transit</option>
                <option value="arrived">Arrived</option>
                <option value="delivered">Delivered</option>
              </select>
            </label>
          </div>
          <div className="flex justify-center w-full mt-2">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {editMode ? "Update Shipment" : "Add Shipment"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditShipmentModal;
