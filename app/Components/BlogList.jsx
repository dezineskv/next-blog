import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import { blog_data } from "../../app/Assets/assets";
import axios from "axios";
// import { assets } from "@/app/Assets/assets";

const BlogList = () => {
  const [menu, setMenu] = useState("all");
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };
  //run on load
  useEffect(() => {
    fetchBlogs();
  }, []);
  
  return (
    <div>
      <h1 className="text-xl sm:text-3xl font-medium my-6 pb-6 mx-auto text-center">
        Search blogs by Category
      </h1>

      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("all")}
          className={
            menu === "all" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("category")}
          className={
            menu === "cateogry"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Category
        </button>
        <button
          onClick={() => setMenu("other")}
          className={
            menu === "other" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Other
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs
          .filter((item) => (menu === "all" ? true : item.category === menu))
          .map((item) => {
            return (
              <BlogItem
                key={item._id}
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
