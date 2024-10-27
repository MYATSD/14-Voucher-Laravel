import React, { useEffect, useState } from "react";
import { useContactStore } from "../store/useContactStore";
import useSWR, { useSWRConfig } from "swr";
import { ring } from "ldrs";
import SkeletonLoader from "./SkeletonLoader";
// import toast  from "react-hot-toast";

const Contact = ({
  contact: { id, name, phone, email },
  isEdit,
  index,
  handleEditBtn,
}) => {
  ring.register();

  const [userName, setUserName] = useState(name);
  const [ph, setPh] = useState(phone);
  const [delLoading, setDelLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState(email);
  const { updateContact } = useContactStore();
  const fetcher = (...args) =>
    fetch(...args, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          localStorage.getItem("auth") &&
          `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
      },
    }).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://contact.sankyitar.store/api/v1/contact",

    fetcher
  );
  const { mutate } = useSWRConfig();
  const [loading, setLoading] = useState(false);

  // useEffect(() => addCount(count));
  const handleNameOnChange = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const handlePhOnChange = (e) => {
    console.log(e.target.value);
    setPh(e.target.value);
  };
  const handleEmailOnChange = (e) => {
    console.log(e.target.value);
    setEmailAddress(e.target.value);
  };
  const handleUpdateContact = async (e) => {
    console.log(id);
    if (e.key === "Enter") {
      const updatedContact = {
        id: id,
        name: userName,
        email: emailAddress,
        phone: ph,
      };
      // toast("loading");
      setLoading(true);
      // updateContact(id, updatedContact);
      await fetch(`https://contact.sankyitar.store/api/v1/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            localStorage.getItem("auth") &&
            `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
        },
        body: JSON.stringify({
          id: updatedContact.id,
          name: updatedContact.name,
          email: updatedContact.email,
          phone: updatedContact.phone,
        }),
      });
      await mutate("https://contact.sankyitar.store/api/v1/contact");
      setLoading(false);
      console.log(isLoading);
      handleEditBtn();
    }
  };
  const handleDeleteBtn = async (e) => {
    e.preventDefault();
    setDelLoading(true);
    await fetch(`https://contact.sankyitar.store/api/v1/contact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          localStorage.getItem("auth") &&
          `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
      },
    });

    mutate("https://contact.sankyitar.store/api/v1/contact");
    setDelLoading(false);
  };
  return (
    <>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <tr key={id} className={`grid grid-cols-12 w-full bg-yellow-100 `}>
          {isEdit ? (
            <>
              <td className="col-span-1  p-2 text-center">{index + 1} </td>
              <td className="col-span-3  p-2 text-center  ">
                {" "}
                <input
                  type="text"
                  className="bg-yellow-100 text-center cursor-pointer "
                  value={userName}
                  onChange={handleNameOnChange}
                  onKeyUp={handleUpdateContact}
                />
              </td>
              <td className="col-span-3  p-2 text-center">
                {" "}
                <input
                  type="text"
                  className="bg-yellow-100 text-center"
                  value={emailAddress}
                  onChange={handleEmailOnChange}
                  onKeyUp={handleUpdateContact}
                />
              </td>
              <td className="col-span-3  p-2 text-center">
                {" "}
                <input
                  type="text"
                  className="bg-yellow-100 text-center"
                  value={ph}
                  onChange={handlePhOnChange}
                  onKeyUp={handleUpdateContact}
                />
              </td>
              <td className="col-span-2  p-2 text-center ">
                <button className="border  p-1 rounded  pointer-events-none  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 stroke-red-500 pointer-events-none opacity-50 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
                {/* {loading && (
            <l-ring
              size="15"
              stroke="2"
              bg-opacity="0"
              speed="2"
              color="black"
            ></l-ring>
          )} */}
              </td>
              {/* <td className="col-span-3  p-2 text-center">
    {" "}
    <input
      type="text"
      className="bg-yellow-100"
      value={contact.phone}
    />
  </td>
  <td className="col-span-3  p-2 text-center">
    {" "}
    <input
      type="text"
      className="bg-yellow-100"
      value={contact.email}
    />
  </td> */}
            </>
          ) : (
            <>
              <td className="col-span-1  p-2 text-center">{index + 1}</td>
              <td className="col-span-3  p-2 text-center">{name}</td>
              <td className="col-span-3  p-2 text-center">{email}</td>
              <td className="col-span-3  p-2 text-center">{phone}</td>
              <td className="col-span-2  p-2 text-center">
                <button
                  className="border  p-1 rounded"
                  onClick={handleDeleteBtn}
                >
                  {delLoading ? (
                    <l-ring
                      size="15"
                      stroke="2"
                      bg-opacity="0"
                      speed="2"
                      color="black"
                    ></l-ring>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 stroke-red-500 pointer-events-none"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  )}
                </button>
              </td>
            </>
          )}{" "}
        </tr>
      )}
    </>
  );
};

export default Contact;
