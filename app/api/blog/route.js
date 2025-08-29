import BlogModel from "../../../lib/models/BlogModel";
import ConnectDB from "../../../lib/config/db";
import { writeFile } from "fs/promises";
const fs = require("fs");
const { NextResponse } = require("next/server");

const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

// get blogs using api blog endpoint
export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");
  //condition for blogid thru params else get all blogs
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    //find all blogs and store in variable
    const blogs = await BlogModel.find({});
    //   return NextResponse.json({ msg: "api working" });
    return NextResponse.json({ blogs });
  }
}

// create a blog post using api endpoint
export async function POST(request) {
  const formData = await request.formData();
  const timestamp = Date.now();

  // for uploading images from public folder
  const image = formData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;

  //   return NextResponse.json({ imgUrl });
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    author_img: `${formData.get("author_img")}`,
    image: `${imgUrl}`,
  };
  await BlogModel.create(blogData);
  console.log("blog saved");
  return NextResponse.json({ success: true, msg: "blog added" });
}

// delete a blog by id via api endpoint
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  //delete the image from public folder too
  fs.unlink(`./public${blog.image}`, () => {});
  //delete from mongodb
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({ msg: "blog deleted" });
}
