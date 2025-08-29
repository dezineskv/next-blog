import Image from "next/image";
import { Sidebar } from "../Components/AdminComponents/Sidebar";
import { assets } from "../Assets/assets";
  import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark"/>
        <Sidebar />
        <div className="flex flex-col w-full">
          {/* // navbar */}
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium text-sm">ADMIN PANEL</h3>
            <Image src={assets.blog_profile1} width={40} alt="admin profile" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
