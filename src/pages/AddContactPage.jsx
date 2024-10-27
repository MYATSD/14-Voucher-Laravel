import React, { useState } from "react";
import { useContactStore } from "../store/useContactStore";
import { useNavigate } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import { ring } from "ldrs";

const AddContactPage = () => {
  ring.register();

  // const fetcher = (...args) =>
  //   fetch(...args, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization:
  //         localStorage.getItem("auth") &&
  //         `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
  //     },
  //   }).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   "https://contact.sankyitar.store/api/v1/contact",

  //   fetcher
  // );
  // const { mutate } = useSWRConfig();
  const nav = useNavigate();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const { addNewContact, contacts } = useContactStore();
  const handleAddContactBtn = async (e) => {
    e.preventDefault();
    console.log(name);

    const newOne = {
      id: Date.now(),
      name: name,
      phone: phone,
      email: email,
      address: "no28,5street,4qrt ,Yangon",
    };

    // addNewContact(newOne);
    setLoading(true);
    await fetch("https://contact.sankyitar.store/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          localStorage.getItem("auth") &&
          `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
      },
      body: JSON.stringify({
        id: newOne.id,
        name: newOne.name,
        email: newOne.email,
        phone: newOne.phone,
      }),
    });

    // mutate("https://contact.sankyitar.store/api/v1/contact");
    // const data = await res.json();
    // console.log(data);

    console.log(contacts);
    nav("/home");
    setLoading(false);
  };
  const handleNameOnChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handlePhoneOnChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailOnChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      {loading ? (
        <div className="mx-auto  h-screen flex justify-center gap-3 text-3xl items-center">
          Loading
          <l-ring
            size="30"
            stroke="2"
            bg-opacity="0"
            speed="2"
            color="black"
          ></l-ring>
        </div>
      ) : (
        <div className="h-screen w-screen flex items-center bg-white">
          <div className="w-1/3 mx-auto border border-black bg-yellow-200">
            <div className="mt-10 ">
              <h1 className="text-3xl font-semibold font-serif text-center">
                Add Contact Form
              </h1>
              <form action="" className="flex flex-col p-5 gap-2 ">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="border  border-black p-2 w-full  "
                  onChange={handleNameOnChange}
                />
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  className="border border-black p-2 w-full  "
                  onChange={handlePhoneOnChange}
                />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="border border-black p-2 w-full  "
                  onChange={handleEmailOnChange}
                />
                <button
                  className="border border-black p-2 mt-5 w-1/3 ml-auto bg-side rounded"
                  onClick={handleAddContactBtn}
                >
                  Add Contact
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddContactPage;
