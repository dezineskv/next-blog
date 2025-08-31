import React from "react";
import { assets } from "../../Assets/assets";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 pt-4 pb-2 border-r border-black">
        <Link href={"/"}>
          <Image
            src={assets.logo2}
            alt="logo"
            width={130}
            height={80}
            className="pt-4"
          />
        </Link>
      </div>
      <div className="w-24 sm:w-80 h-[100vh] relative py-12 border-r border-black pr-4">
        <div className="w-[50%] sm:w-[80%] absolute right-4">
          <Link
            href="/admin/addProduct"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#ccc]"
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
              className="lucide lucide-list-plus-icon lucide-list-plus"
            >
              <path d="M16 5H3" />
              <path d="M11 12H3" />
              <path d="M16 19H3" />
              <path d="M18 9v6" />
              <path d="M21 12h-6" />
            </svg>{" "}
            <p>Add blog</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#ccc]"
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
              className="lucide lucide-rss-icon lucide-rss"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>{" "}
            <p>Blog lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#ccc]"
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
              className="lucide lucide-mail-search-icon lucide-mail-search"
            >
              <path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <circle cx="18" cy="18" r="3" />
              <path d="m22 22-1.5-1.5" />
            </svg>{" "}
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
