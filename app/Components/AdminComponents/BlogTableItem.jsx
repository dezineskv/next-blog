import Image from "next/image";
import React from "react";
import { assets } from "../../Assets/assets";

const BlogTableItem = ({
  authorImg,
  title,
  author,
  mongoId,
  date,
  deleteBlog,
}) => {
  const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b ">
      <th
        scope="row"
        className="items-center gap-3 hidden text-gray-900 whitespace-nowrap sm:flex px-2 py-4 font-medium"
      >
        <img
          src={authorImg ? authorImg : assets.blog_profile1}
          //   width={60}
          //   height={60}
          alt="image"
          className="w-[60px] h-[60px] ml-5"
        />
        <p>{author ? author : "no author"}</p>
      </th>
      <td className="px-2 py-4">{title ? title : "no title"}</td>
      <td className="px-2 py-4">{BlogDate.toString()}</td>
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-2 py-4 cursor-pointer"
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
          className="lucide lucide-trash2-icon lucide-trash-2"
        >
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </td>
    </tr>
  );
};

export default BlogTableItem;
