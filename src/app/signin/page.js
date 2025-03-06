"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice";

const page = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, "ddd");
    dispatch(login(form));
    // Your logic to handle form submission goes here
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
          password:
          <input
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
            className="flex-1 p-1 border rounded-md focus:outline-none"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
