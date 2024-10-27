import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import { useContactStore } from "../store/useContactStore";
import useSWR from "swr";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ContactList = ({ isEdit, handleEditBtn }) => {
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
  const [count, setCount] = useState(0);

  // const [contacts, setContacts] = useState([
  //   {
  //     id: 1,
  //     name: "Hsu Myat",
  //     email: "hsu@gmail.com",
  //     phone: "0989898989",
  //   },
  //   {
  //     id: 2,
  //     name: "Hsu Myat",
  //     email: "hsu@gmail.com",
  //     phone: "0989898989",
  //   },
  //   {
  //     id: 3,
  //     name: "Hsu Myat",
  //     email: "hsu@gmail.com",
  //     phone: "0989898989",
  //   },
  //   {
  //     id: 4,
  //     name: "Hsu Myat",
  //     email: "hsu@gmail.com",
  //     phone: "0989898989",
  //   },
  // ]);

  const { contacts, fetchContact } = useContactStore();

  const { data, error, isLoading } = useSWR(
    "https://contact.sankyitar.store/api/v1/contact",

    fetcher
  );
  // useEffect(() => {
  //   if (data) {
  //     fetchContact(data.contacts.data);
  //   }
  // });
  // const updateContact = (id, updatedContact) => {
  //   setContacts(contacts.map((el) => (el.id === id ? updatedContact : el)));
  // };

  // const addCount = () => {
  //   setCount(count + 1);
  // };
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <table className="w-full">
            <thead>
              <tr className="grid grid-cols-12 w-full bg-yellow-400 ">
                <th className="col-span-1  p-2 text-center">No</th>
                <th className="col-span-3  p-2 text-center">Name</th>
                <th className="col-span-3  p-2 text-center">Email</th>
                <th className="col-span-3  p-2 text-center">Phone</th>
                <th className="col-span-2  p-2 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {data.contacts.data &&
                data.contacts.data.map((contact, index) => (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    isEdit={isEdit}
                    // /updateContact={updateContact}
                    index={index}
                    handleEditBtn={handleEditBtn}
                  />
                ))}
              {/* {isEdit && (
      <tr className="grid grid-cols-12 w-full bg-yellow-100">
        <td className="col-span-3  p-2 text-center"> 1</td>
        <td className="col-span-3  p-2 text-center">
          {" "}
          <input type="text" className="bg-yellow-100" />
        </td>
        <td className="col-span-3  p-2 text-center"></td>
        <td className="col-span-3  p-2 text-center"></td>
      </tr>
    )} */}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ContactList;
