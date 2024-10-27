import React, { useState } from "react";
import ContactList from "./ContactList";
import { Link } from "react-router-dom";

const Header = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditBtn = () => {
    console.log("click edit btn");
    setIsEdit(!isEdit);
  };
  return (
    <div className="xl:w-[1200px] lg:w-[1000px] sm:[800px] w-[500px] mx-auto h-screen p-10 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-semibold text-3xl font-serif">Contact Lists</h1>
        <div className="flex justify-end gap-3  items-center">
          <Link to={"/addContact"}>
            <button className="border border-black rounded p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </Link>
          <button
            className={`border border-black rounded p-1 ${
              isEdit && "bg-gray-300"
            }`}
            onClick={handleEditBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </div>
      </div>

      <ContactList isEdit={isEdit} handleEditBtn={handleEditBtn} />
    </div>
  );
};

export default Header;
