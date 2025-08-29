"use client";
import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../../Assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "other",
    author: "Kim",
    author_img: "/blog_profile1.png",
  });
  //form input value handling
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data, "data saved");
  };
  //form submit
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);

    formData.append("category", data.category);
    formData.append("author", data.author);

    formData.append("author_img", data.author_img);
    formData.append("image", image);
    // call api using axios & use api endpoint
    const response = await axios.post("/api/blog", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "other",
        author: "Kim",
        author_img: "/blog_profile1.png",
      });
    } else {
      toast.error("error");
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          {/* <Image className="mt-4" width={140} height={90} src={!image?assets.upload:URL.createObjectURL(image)} alt="upload"/> */}
          image
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="text"
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
          type="text"
          placeholder="description"
          required
          name="description"
          onChange={onChangeHandler}
          value={data.description}
        />
        <p className="text-xl mt-4">Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="category">Category</option>
          <option value="other">Other</option>
          <option value="all">All</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddProduct;
