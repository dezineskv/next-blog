import Link from "next/link";
import React from "react";
import Image from "next/image";

function BlogItem({ title, description, category, image, id }) {
  return (
    <>
      <div className="max-w-[330px] mb-6 sm:max-w-[300px] bg-white border border-black rounded-sm hover:shadow-[-7px_7px_0px_#ccc]">
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
              className="lucide lucide-book-open-icon lucide-book-open"
            >
              <path d="M12 7v14" />
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
            </svg>
            &nbsp;Read more
          </div>
        </Link>
      </div>
    </>
  );
}

export default BlogItem;
