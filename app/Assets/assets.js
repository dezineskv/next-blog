import logo_black from "./logo_black.png";
import blog_profile1 from "./blog_profile1.png";
import blog_img1 from "./blog_img1.jpg";
import blog_img2 from "./blog_img2.jpg";
import blog_img3 from "./blog_img3.jpeg"
import logo2 from "./logo2.jpg";

export const assets = {
  logo_black,
  blog_profile1,
  blog_img1,
  blog_img2,
  blog_img3,
  logo2,
};

export const blog_data = [
  {
    id: 1,
    title: "How to learn to code",
    description:
      "Students learning to code reveal how their blood, sweat and tears will pay off.",
    image: blog_img1,
    date: Date.now(),
    category: "all",
    author_img: blog_profile1,
    author: "author's name 1",
  },
  {
    id: 2,
    title: "Frontend development",
    description:
      "Learning HTML, CSS, JavaScript, React, Next and many other stack...",
    image: blog_img2,
    date: Date.now(),
    category: "category",
    author_img: blog_profile1,
    author: "author's name 2",
  },
  {
    id: 3,
    title: "Maintianing a work-life balance",
    description: "Healthy progress includes taking breaks plus working hard.",
    image: blog_img3,
    date: Date.now(),
    category: "other",
    author_img: blog_profile1,
    author: "author's name 3",
  },
];
