import Link from "next/link";
import React from "react";
import Image from "next/image";

function BlogItem({ title, description, category, image, id }) {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black rounded-sm hover:shadow-[-7px_7px_0px_#ccc]">
      <Link href={`/blogs/${id}`}>
        <Image src={image} width={300} height={300} alt="blog image" />
      </Link>
      <p className="ml-5 mt-5 mb-3 px-2 py-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="px-5">
        <h5 className="text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
      </div>
      <p className="mb-3 text-sm tracking-tight text-gray-700 px-5">
        {description}
      </p>
      <Link href={`/blogs/${id}`}>
        <div className="inline-flex items-center py-2 font-semibold text-center px-5 mb-3">
          Read more & icon
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
