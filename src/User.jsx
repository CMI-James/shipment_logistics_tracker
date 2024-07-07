import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";
import { motion } from "framer-motion";
import Header from "./components/Header";

const transitionSettings = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.99],
};

const UserPage = () => {
  const { trackingCode } = useParams();
  const [cargo, setCargo] = useState(null);
  const [inputCode, setInputCode] = useState(trackingCode || "");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (trackingCode) {
      handleSearch(trackingCode);
    }
  }, [trackingCode]);

  const handleSearch = async (code) => {
    setIsLoading(true);
    try {
      const q = query(collection(db, "shipments"), where("trackingCode", "==", code));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setCargo(querySnapshot.docs[0].data());
      } else {
        toast.error("Code not found");
        setCargo(null);
      }
    } catch (error) {
      toast.error("Error fetching cargo: " + error.message);
    }
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputCode);
  };

  return (
    <div className="relative">
      <div className="fixed z-50">
        <Header />
      </div>
      <div className="absolute inset-0 bg-orange-450 brightness-75 -z-10"></div>
      <div className="min-h-screen flex flex-col items-center pt-24 pb-6 px-4 md:px-0">
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSettings}
        >
          <label className="block text-[#102541] text-lg font-bold mb-2">
            Tracking Code:
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-[#102541] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#102541]"
            />
          </label>
          <button
            type="submit"
            className="w-full flex justify-center items-center bg-[#102541] text-white py-2 px-4 rounded-md mt-4 hover:bg-black transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <TailSpin visible={true} height="24" width="24" color="#ffffff" ariaLabel="tail-spin-loading" />
            ) : (
              "Search"
            )}
          </button>
        </motion.form>
        {isLoading && (
          <div className="w-full max-w-md mt-6 flex  justify-center">
            <TailSpin visible={true} height="80" width="80" color="#102541" ariaLabel="tail-spin-loading" />
          </div>
        )}
        {cargo && !isLoading && (
          <motion.div
            className="w-full max-w-md mt-6 bg-white p-4 rounded-lg shadow-lg text-[#102541]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionSettings}
          >
            <h3 className="text-2xl font-bold mb-4">Cargo Details</h3>
            <p className="mb-2">
              <strong>Tracking Code:</strong> {cargo.trackingCode}
            </p>
            <p className="text-xl font-bold mb-4">Sender Details</p>
            <p className="mb-2">
              <strong>Name:</strong> {cargo.sender.name}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {cargo.sender.phone}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {cargo.sender.email}
            </p>
            <p className="text-xl font-bold mb-4">Receiver Details</p>
            <p className="mb-2">
              <strong>Name:</strong> {cargo.receiver.name}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {cargo.receiver.phone}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {cargo.receiver.email}
            </p>
            <p className="mb-2">
              <strong>Content Name:</strong> {cargo.contentName}
            </p>
            <p className="mb-2">
              <strong>Country From:</strong> {cargo.countryFrom.label}
            </p>
            <p className="mb-2">
              <strong>Country To:</strong> {cargo.countryTo.label}
            </p>
            <p className="mb-2">
              <strong>Shipping Date:</strong>{" "}
              {new Date(cargo.shippingDate.seconds * 1000).toLocaleDateString()}
            </p>
            <p className="mb-2">
              <strong>Arrival Date:</strong>{" "}
              {new Date(cargo.arrivalDate.seconds * 1000).toLocaleDateString()}
            </p>
            <p className="mb-2">
              <strong>Custom Clearance Fee:</strong> {cargo.customClearanceFee}
            </p>
            <p className="mb-2">
              <strong>Status:</strong> {cargo.status}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
