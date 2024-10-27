import React, { useState } from "react";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
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
  // const [isEdit, setIsEdit] = useState(false);
  // const [name, setName] = useState();
  // const handleEditBtn = () => {
  //   console.log("click edit btn");
  //   setIsEdit(true);
  // };
  // const handleOnChange = (e) => {
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // };
  // const handleUpdateContact = (e) => {
  //   console.log(id);
  //   if (e.key === "Enter") {
  //     setContacts(contacts.map((el) => el.id === id && console.log("updated")));
  //   }
  // };
  return (
    <>
      <Header />
      <Toaster />
    </>
  )}

  export default HomePage;
