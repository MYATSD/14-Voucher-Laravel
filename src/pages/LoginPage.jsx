import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PreventComponent from "../components/PreventComponent";

const LoginPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLoginBtn = async (e) => {
    e.preventDefault();
    console.log("login");
    const res = await fetch("https://contact.sankyitar.store/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("auth", JSON.stringify(data.token));
      nav("/home");
    }
  };
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <PreventComponent fail={"/home"} check={localStorage.getItem("auth")} authenticate={"/"}>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div className="w-1/3 border border-black p-10 bg-main">
          <h1 className="font-serif text-2xl font-semibold mb-10 text-center">
            Login form
          </h1>

          <div className="w-full flex items-center justify-center">
            <form action="" className="flex flex-col gap-2 w-full">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="xxx@gmail.com"
                className="border p-2 "
                name="email"
                onChange={handleOnChange}
              />
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder=""
                className="border p-2 "
                name="password"
                onChange={handleOnChange}
              />

              <button
                className="border p-2 bg-side mt-5 border-black bg-yellow-300"
                onClick={handleLoginBtn}
              >
                Login
              </button>
              <Link to={"/register"}>
                <span className="text-sm underline text-slate-700 text-center">
                  Didn't have account yet? Please Register.
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </PreventComponent >
  );
};

export default LoginPage;
