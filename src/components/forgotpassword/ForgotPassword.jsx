import React from "react";
import {
  FaUser,
  FaLock,
  FaRegAddressCard,
  FaSchool,
  FaPhoneAlt,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { API } from "../../config/axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  //form funtion
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent refreshing of the page while submitting the register form
    try {
      const res = await API.post("/api/v1/auth/forget-password", {
        email,
        newPassword,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    console.log(email, newPassword);
  };
  return (
    <div className="form-container w-100vw h-100vh ">
      <form onSubmit={handleSubmit}>
        <div className="reset_form_container relative ml-[550px] w-[400px] h-[470px] max-w-[400px] max-h-[650px] bg-black rounded-[50px_5px] flex items-center justify-center overflow-hidden">
          <div className="absolute bg-black rounded-[50px_5px] inset-1 p-[50px_40px] z-10 text-white">
            <h3>RESET PASSWORD</h3>
            <div className="mt-10 relative flex items-center justify-start">
              <AiOutlineMail className="ml-3 text-white " />
              <input
                type="email"
                className="w-[95%] h-[30px] bg-transparent border-none outline-none border-b border-white text-[20px] pl-2 text-white placeholder-custom"
                placeholder="Email"
                autoComplete="off"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-10 relative flex items-center justify-start">
              <FaSchool className="ml-3 text-white" />
              <input
                type="text"
                className="w-[95%] h-[30px] bg-transparent border-none outline-none border-b border-white text-[20px] pl-2 text-white placeholder-custom"
                placeholder="Your first School"
                autoComplete="off"
                id="exampleInputEmail1"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
            </div>
            <div className="mt-10 relative flex items-center justify-start">
              <FaLock className="ml-3 text-white" />
              <input
                type="password"
                className="w-[95%] h-[30px] bg-transparent border-none outline-none border-b border-white text-[20px] pl-2 text-white placeholder-custom"
                placeholder="Password"
                autoComplete="off"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="relative w-[300px] h-[40px] mt-[70px] transition-all duration-1000">
              <button type="submit">RESET</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
