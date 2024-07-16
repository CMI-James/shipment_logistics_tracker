import React from "react";
import Modal from "react-modal";
import cancel from "/images/cancel.svg";
import { TailSpin } from "react-loader-spinner";

Modal.setAppElement("#root");

const DeleteModal = ({ isOpen, onRequestClose, onConfirm, deleteLoading }) => {
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
          width: "20rem",
          height: "auto",
          borderRadius: "10px",
        },
      }}
    >
      <div className="p-4">
        <button
          className="absolute w-[1.5rem] top-1 right-1"
          type="button"
          onClick={onRequestClose}
        >
          <img src={cancel} alt="" className="w-[2rem] animate-pulse" />
        </button>
        <h2 className="text-center text-lg">Are you sure?</h2>
        <div className="flex justify-around mt-4">
          <button
           disabled={deleteLoading}
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-4 rounded flex justify-center items-center"
          >
            {deleteLoading ? (
              <TailSpin
                visible={true}
                height="24"
                width="24"
                color="#ffffff"
                ariaLabel="tail-spin-loading"
              />
            ) : (
              "Yes"
            )}
          </button>
          <button
            onClick={onRequestClose}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
