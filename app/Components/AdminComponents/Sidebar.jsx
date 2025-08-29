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
            {/* <Image src={assets.icon}/> */}icon <p>Add blog</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#ccc]"
          >
            {/* <Image src={assets.icon}/> */}icon <p>Blog lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#ccc]"
          >
            {/* <Image src={assets.icon}/> */}icon <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
