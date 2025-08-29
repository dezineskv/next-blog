"use client";

import React, { useEffect, useState } from "react";
import { blog_data } from "../../Assets/assets";
import Image from "next/image";
import { assets } from "../../Assets/assets";
import Footer from "../../Components/Footer";
import Link from "next/link";
import axios from "axios";
import { AtSign } from "lucide";
import SearchBar from "../../Components/SearchBar";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  //   const fetchBlogData = () => {
  //     for (let i = 0; i < blog_data.length; i++) {
  //       // loop thru & find id match. convert params id to number
  //       if (Number(params.id) === blog_data[i].id) {
  //         setData(blog_data[i]);
  //         console.log(blog_data[i]);

  //         break;
  //       }
  //     }
  //   };

  // logic for mongo
  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };

  //execute once when loads
  useEffect(() => {
    fetchBlogData();
  }, []);

  // if there is data, display the blog otherwise empty fragment
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="max-h-[350px]">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={assets.logo2}
                alt="Logo"
                width={130}
                height={80}
                className="sm:w-auto"
              />
            </Link>
            {/* <div className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7pz_7px_0px_#000000]"> */}
                <div className="flex items-center gap-2 ">
              <SearchBar />
            </div>
          </div>

          <div className="text-center my-24">
            <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
              {data.title}
            </h1>
            <Image
              src={data.author_img}
              alt="Logo"
              width={80}
              height={80}
              className="mx-auto mt-6 border border-white rounded-full w-[80px] h-[80px]"
              divriority={true}
            />

            <p className="mt-1 divb-2 text-lg max-w-[740px] mx-auto">
              {data.author}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-5 mb-10 w-full">
        <div className="flex flex-col mx-auto justify-center gap-4">
          <Image
            src={data.image}
            alt="Logo"
            width={980}
            height={700}
            className="border-4 border-white mt-[-80px] mx-auto"
            priority={true}
          />
          <div className="mx-auto max-w-[980px]">
            <h1 className="text-lg">Introduction: </h1>
            <div className="blog-content">{data.description}</div>
            {/* <h3 className="my-5 text-[18px] font-semibold">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h1 className="text-lg">Conclusion: </h1>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p> */}
            <div className="my-24">
              <p className="text-black font-semibold my-4">Share</p>
              <div className="flex gap-4">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-at-sign-icon lucide-at-sign"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                  </svg>
                </p>

                <p>icons</p>
                <p>icons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
