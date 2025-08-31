import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import SearchBar from "./SearchBar";

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //create formData object
    const formData = new FormData();
    formData.append("email", email);

    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      //display backend message
      toast.success(response.data.msg);
      //if successful clear the field
      setEmail("");
      console.log(email);
    } else {
      toast.error("Error subscribing");
    }
  };

  return (
    <div className="py-5 px-5 md:px-28 md:py-12">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo2}
          alt="Logo"
          width={130}
          height={80}
          className="sm:w-auto rounded-lg"
          priority={true}
        />
        <div className="flex items-center gap-2 mt-6font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#cccccc]">
          <SearchBar />
        </div>
      </div>
      <div className="text-center pt-12 mn-8">
        <h1 className="text-3xl sm:text-5xl font-medium mt-12">Latest blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Subscribe to get the lates blogs
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[]7px_7px_0_#000000"
          onSubmit={onSubmitHandler}
        >
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            placeholder="email subscribe"
            className="pl-4 outline-none"
          ></input>
          <button
            className="border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail-plus-icon lucide-mail-plus"
            >
              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="M19 16v6" />
              <path d="M16 19h6" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
