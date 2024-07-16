// src/AdminLogin.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminLogin.css";
import header_logo from "/images/header_logo.svg";
import { TailSpin } from "react-loader-spinner";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when login starts
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Admin logged in");
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Login error:", error); // Log the error to the console for debugging
      let errorMessage = "An error occurred while logging in.";
      if (error.code) {
        switch (error.code) {
          case "auth/user-disabled":
            errorMessage = "This user account has been disabled.";
            break;

          case "auth/invalid-credential":
            errorMessage = "Invalid Email or Password.";
            break;
          case "auth/too-many-requests":
            errorMessage = "Too many login attempts. Please try again later.";
            break;
          case "auth/network-request-failed":
            errorMessage =
              "Network error. Please check your internet connection.";
            break;
          default:
            errorMessage = "An unexpected error occurred. Please try again.";
            break;
        }
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false); // Set loading to false when login completes
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col admin">
      <div className="h-[70%] lg:h-[90%] bg-opacity-90 w-[90%] lg:w-[40%] bg-white flex items-center justify-center gap-[3rem] flex-col rounded-md relative">
        <Link to="/">
          <div className="absolute top-4 left-4">
            {" "}
            <MdOutlineKeyboardArrowLeft className="text-4xl" />
          </div>
        </Link>
        <div className="flex items-center flex-col gap-[2rem]">
          <Link to="/">
            <img
              src={header_logo}
              alt="Trustway Logistics Logo"
              className="w-[12rem]"
            />
          </Link>
          <h1 className="text-[1.4rem] text-[#102541] font-bold">
            ADMIN DASHBOARD
          </h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-[2rem] w-[80%] md:w-[65%] items-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-[0.7rem] rounded-md"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-[0.7rem] rounded-md"
          />
          <button
            type="submit"
            className="bg-[#e8772e] flex justify-center items-center hover:bg-[#e36a19] font-bold w-[10rem] px-[2rem] rounded-md text-white py-[0.7rem]"
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <TailSpin
                visible={true}
                height="24"
                width="24"
                color="#ffffff"
                ariaLabel="tail-spin-loading"
              />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
