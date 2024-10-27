import React, { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState([
    {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  ]);
  const handleRegisterBtn = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await fetch("https://contact.sankyitar.store/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // const data = await res.json();
    // console.log(data);
  };
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-1/3 border border-black p-10 bg-main">
        <h1 className="font-serif text-2xl font-semibold mb-10 text-center">
          Registration form
        </h1>

        <div className="w-full flex items-center justify-center">
          <form action="" className="flex flex-col gap-2 w-full">
            <label htmlFor="">Name</label>
            <input
              onChange={handleOnChange}
              type="text"
              placeholder="Enter Your Name"
              className="border p-2"
              name="name"
            />
            <label htmlFor="">Email</label>
            <input
              onChange={handleOnChange}
              type="email"
              placeholder="xxx@gmail.com"
              className="border p-2"
              name="email"
            />
            <label htmlFor="">Password</label>
            <input
              onChange={handleOnChange}
              type="password"
              placeholder=""
              className="border p-2"
              name="password"
            />
            <label htmlFor="">Confirm your password</label>
            <input
              onChange={handleOnChange}
              type="password"
              placeholder=""
              className="border p-2"
              name="password_confirmation"
            />
            <button
              className="border p-2 mt-5 bg-side"
              onClick={handleRegisterBtn}
            >
              Register
            </button>
            <Link to={"/"}>
              <span className="text-sm underline text-slate-700 text-center">
                Already have account? Please Login.
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
