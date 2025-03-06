"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/slices/authSlice";

const page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch(); // Add this line to your component
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(signup(form))
    console.log(form);
    setForm({ name: "", email: "", password: "" });
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      
      <form onSubmit={submitForm} className="flex flex-col gap-3">
      <h1>Signup Form</h1>
        <label className=" flex flex-col gap-1">
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => handleInputChange(e)}
            className="flex-1 p-1 border rounded-md focus:outline-none"

          />
        </label>
        <label className=" flex flex-col gap-1">
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => handleInputChange(e)}
            className="flex-1 p-1 border rounded-md focus:outline-none"

          />
        </label>
        <label className=" flex flex-col gap-1">
          Password:
          <input
            type="password"
            name="password"
            className="flex-1 p-1 border rounded-md focus:outline-none"

            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="flex justify-between items-center bg-blue-100 text-gray-800 p-3 rounded-md shadow w-44"
           
          
          
        />
      </form>
    </div>
  );
};

export default page;
