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
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
