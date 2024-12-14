import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "./AuthContext";
import cancel from "/images/cancel.svg";
import Select from "react-select";
import countryList from "react-select-country-list";
import ShipmentStatusTracker from "./ShipmentStatusTracker";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineContentCopy, MdOutlineCreateNewFolder } from "react-icons/md";
import DeleteModal from "./components/DeleteModal";
import { Rings, TailSpin, Triangle } from "react-loader-spinner";
import Header from "./components/Header";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [unlock, setUnlock] = useState(false);

  const countryOptions = countryList()
    .getData()
    .map((country) => {
      if (country.label === "Korea, Democratic People's Republic of") {
        return { value: "KP", label: "North Korea" };
      }
      if (country.label === "Korea, Republic of") {
        return { value: "KR", label: "South Korea" };
      }
      return country;
    });
  useEffect(() => {
    if (!currentUser) {
      navigate("/admin");
    } else {
      setUnlock(true);
    }
  }, [currentUser, navigate]);

  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentShipmentId, setCurrentShipmentId] = useState(null);
  const [shipments, setShipments] = useState([]);
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

  const [trackingCode, setTrackingCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [deleteLoading, setDeleteLoading] = useState(false); // Add this line
  const fetchShipments = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "shipments"));
    const shipmentsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setShipments(shipmentsData);
    setLoading(false);
  };
  useEffect(() => {
    fetchShipments();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      resetForm();
    }
  };
  const toggleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };

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
    setLoading(true);
    e.preventDefault();
    try {
      if (editMode) {
        const shipmentRef = doc(db, "shipments", currentShipmentId);
        await updateDoc(shipmentRef, { sender, receiver, ...shipmentDetails });
        toast.success("Shipment updated successfully");
        setLoading(false);
      } else {
        const trackingCode = generateTrackingCode();
        const shipmentData = {
          sender,
          receiver,
          ...shipmentDetails,
          trackingCode,
          createdAt: new Date(), // Ensure createdAt is set when adding a new shipment
        };
        await addDoc(collection(db, "shipments"), shipmentData);
        toast.success("Shipment added successfully");
        setLoading(false);
      }
      setShowModal(false);
      resetForm();
    } catch (error) {
      toast.error("Error saving shipment: " + error.message);
      setLoading(false);
    } finally {
      fetchShipments();
    }
  };

  const handleEditShipment = (shipment) => {
    setCurrentShipmentId(shipment.id);
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
    setEditMode(true);
    setShowModal(true);
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
    setEditMode(false);
    setCurrentShipmentId(null);
  };
  const handleDeleteShipment = async () => {
    setDeleteLoading(true); // Add this line
    try {
      const shipmentRef = doc(db, "shipments", currentShipmentId);
      await deleteDoc(shipmentRef);
      toast.success("Shipment deleted successfully");
      setDeleteModal(false);
      resetForm();
    } catch (error) {
      toast.error("Error deleting shipment: " + error.message);
    } finally {
      setDeleteLoading(false); // Add this line
      fetchShipments();
    }
  };
  const copyToClipboard = (trackingCode) => {
    navigator.clipboard.writeText(trackingCode)
      .then(() => {
        toast.success(`Tracking Code Copied!`);
      })
      .catch((err) => {
        toast.error('Failed to copy tracking code');
      });
  };
  // Filter shipments based on search criteria
  const filteredShipments = shipments.filter((shipment) => {
    const {
      trackingCode,
      sender,
      receiver,
      contentName,
      countryFrom,
      countryTo,
      status,
      shippingDate,
      arrivalDate,
      customClearanceFee,
    } = shipment;
    const searchString = searchInput.toLowerCase();

    return (
      trackingCode.toLowerCase().includes(searchString) ||
      sender.name.toLowerCase().includes(searchString) ||
      sender.phone.toLowerCase().includes(searchString) ||
      sender.email.toLowerCase().includes(searchString) ||
      receiver.name.toLowerCase().includes(searchString) ||
      receiver.phone.toLowerCase().includes(searchString) ||
      receiver.email.toLowerCase().includes(searchString) ||
      contentName.toLowerCase().includes(searchString) ||
      countryFrom.label.toLowerCase().includes(searchString) ||
      countryTo.label.toLowerCase().includes(searchString) ||
      status.toLowerCase().includes(searchString) ||
      customClearanceFee.toLowerCase().includes(searchString)
    );
  });
  const filteredShipmentsSorted = filteredShipments
    .filter((shipment) => shipment.createdAt) // Ensure we only sort shipments with a createdAt field
    .sort((a, b) => {
      return b.createdAt.seconds - a.createdAt.seconds; // Sort by createdAt timestamp
    });

  return (
    <div className="relative">
      {unlock && (
        <div>
          <Header />

          <div className="absolute inset-0 bg-orange-450 brightness-75 -z-10"></div>
          <div className="min-h-screen w-full flex flex-col items-center relative">
            <div className="flex px-[0.5rem]  py-[2rem]    flex-col  lg:w-[40%] md:w-[60%] w-full">
              <motion.div
                initial={{ y: "10vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                {" "}
                <div className="flex w-full justify-center mb-[1rem] gap-[0.5rem]">
                  <input
                    type="text"
                    placeholder="Search by tracking code, name, number, email, cargo, country from, or country to"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="rounded-md w-full bg-white px-[1rem] border   text-[#102541] text-[1rem] "
                  />
                  <button
                    onClick={toggleModal}
                    className="rounded-md bg-green-600 min-w-fit flex items-center gap-1 text-white px-[1rem] py-[0.5rem]  text-[1.5rem] "
                  >
                    <MdOutlineCreateNewFolder />{" "}
                    <span className="text-[1rem]">New</span>
                  </button>
                </div>
              </motion.div>
              <div className="flex flex-col items-center gap-[0.2rem] w-full ">
                {loading ? (
                  <TailSpin
                    visible={true}
                    height="48"
                    width="48"
                    color="#ffffff"
                    ariaLabel="tail-spin-loading"
                  />
                ) : (
                  filteredShipmentsSorted.map((shipment, index) => (
                    <motion.div
                      initial={{ y: "10vh", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        delay: index * 0.05,
                      }}
                      key={shipment.id}
                      className="flex justify-between rounded-md bg-[#102541] px-[1rem] py-[0.5rem] text-white text-[1.2rem] w-full"
                    >
                      <p className="">{shipment.trackingCode}</p>
                      <div className="flex gap-[1rem]">
                         
                      <button
                              onClick={() => copyToClipboard(shipment.trackingCode)}
                              className="text-white"
                            >
                              <MdOutlineContentCopy />
                            </button>

                        <button onClick={() => handleEditShipment(shipment)}>
                          <FaEdit className="fill-blue-400" />
                        </button>
                        <button
                          onClick={() => {
                            setCurrentShipmentId(shipment.id);
                            setDeleteModal(true);
                          }}
                        >
                          <MdDelete className="fill-red-500" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
            <DeleteModal
              isOpen={deleteModal}
              deleteLoading={deleteLoading}
              onRequestClose={toggleDeleteModal}
              onConfirm={handleDeleteShipment}
            />
            <div className="flex items-center justify-center w-full">
              <Modal
                isOpen={showModal}
                onRequestClose={toggleModal}
                style={{
                  overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                  content: {
                    top: "55%",
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
                    onClick={toggleModal}
                  >
                    <img
                      src={cancel}
                      alt=""
                      className="w-[2rem] animate-pulse"
                    />
                  </button>
                  <h2 className="text-[1.5rem] text-center">
                    {editMode ? "Edit Shipment" : "New Shipment"}
                  </h2>
                  <form
                    onSubmit={handleSaveShipment}
                    className="flex flex-col items-center"
                  >
                    <div className="flex mt-8 w-full flex-col md:flex-row justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-center">Sender Details</h3>
                        <label className="flex  gap-2">
                          Name:
                          <input
                            className="px-1 w-full"
                            type="text"
                            value={sender.name}
                            onChange={(e) =>
                              handleInputChange(
                                { name: e.target.value },
                                "sender"
                              )
                            }
                            required
                          />
                        </label>
                        <label className="flex gap-2">
                          Phone:
                          <input
                            className="px-1 w-full"
                            type="text"
                            value={sender.phone}
                            onChange={(e) =>
                              handleInputChange(
                                { phone: e.target.value },
                                "sender"
                              )
                            }
                            required
                          />
                        </label>
                        <label className="flex gap-2">
                          Email:
                          <input
                            className="px-1 w-full"
                            type="email"
                            value={sender.email}
                            onChange={(e) =>
                              handleInputChange(
                                { email: e.target.value },
                                "sender"
                              )
                            }
                            required
                          />
                        </label>
                      </div>
                      <div className="flex flex-col gap-2  ">
                        <h3 className="text-center">Receiver Details</h3>
                        <label className="flex gap-2">
                          Name:
                          <input
                            className="px-1 w-full"
                            type="text"
                            value={receiver.name}
                            onChange={(e) =>
                              handleInputChange(
                                { name: e.target.value },
                                "receiver"
                              )
                            }
                            required
                          />
                        </label>
                        <label className="flex gap-2">
                          Phone:
                          <input
                            className="px-1 w-full"
                            type="text"
                            value={receiver.phone}
                            onChange={(e) =>
                              handleInputChange(
                                { phone: e.target.value },
                                "receiver"
                              )
                            }
                            required
                          />
                        </label>
                        <label className="flex gap-2">
                          Email:
                          <input
                            className="px-1 w-full"
                            type="email"
                            value={receiver.email}
                            onChange={(e) =>
                              handleInputChange(
                                { email: e.target.value },
                                "receiver"
                              )
                            }
                            required
                          />
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-2 mt-8">
                      <h3 className="text-center">Shipment Details</h3>

                      <label className="flex justify-between items-center gap-2">
                        Origin:
                        <Select
                          className="w-[65%]  md:w-[75%]"
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
                      <label className="flex justify-between items-center gap-2">
                        Destination:
                        <Select
                          className=" w-[65%]  md:w-[75%]"
                          options={countryOptions}
                          value={shipmentDetails.countryTo}
                          onChange={(value) =>
                            handleInputChange(
                              { countryTo: value },
                              "shipmentDetails"
                            )
                          }
                          required
                        />
                      </label>
                      <label className="flex w-full items-center justify-between gap-2">
                        Shipping Date:
                        <DatePicker
                          className=" "
                          selected={shipmentDetails.shippingDate}
                          onChange={(date) =>
                            handleDateChange(date, "shippingDate")
                          }
                          required
                        />
                      </label>
                      <label className="flex w-full items-center justify-between gap-2">
                        Arrival Date:
                        <DatePicker
                          className=" "
                          selected={shipmentDetails.arrivalDate}
                          onChange={(date) =>
                            handleDateChange(date, "arrivalDate")
                          }
                          required
                        />
                      </label>
                      <label className="flex  justify-between">
                        Content:
                        <input
                          className=" w-[65%] md:w-[75%]"
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
                      <label className="flex justify-between ">
                        Custom Fee:
                        <input
                          className="w-[65%]  md:w-[75%]"
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
                      <div className="flex flex-col gap-2 mt-2">
                        <h4>Status</h4>
                        <ShipmentStatusTracker
                          status={shipmentDetails.status}
                          onChange={(status) =>
                            handleInputChange({ status }, "shipmentDetails")
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded flex justify-center items-center"
                      >
                        {loading ? (
                          <TailSpin
                            visible={true}
                            height="24"
                            width="24"
                            color="#ffffff"
                            ariaLabel="tail-spin-loading"
                          />
                        ) : editMode ? (
                          "Update Shipment"
                        ) : (
                          "Add Shipment"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
