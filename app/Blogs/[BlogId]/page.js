"use client";
import './page.css';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Blogs = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  const hardcodedBlogs =[
  {
    "id": 1,
    "name": "Peacock Feather",
    "description": "A close-up view of a vibrant blue peacock feather with sparkling water droplets."
  },
  {
    "id": 2,
    "name": "Kingfisher Bird",
    "description": "A colorful kingfisher bird sitting on a tree branch with a glowing forest background."
  },
  {
    "id": 3,
    "name": "Green Leaves",
    "description": "Fresh green leaves with water droplets reflecting on a serene water surface."
  },
  {
    "id": 4,
    "name": "Lord Shiva Statue",
    "description": "A majestic black statue of Lord Shiva under a cloudy night sky."
  },
  {
    "id": 5,
    "name": "Red-Headed Bird",
    "description": "A small red-headed bird perched on a red fluffy flower with a dark background."
  },
  {
    "id": 6,
    "name": "Black Tiger",
    "description": "A digitally enhanced black tiger with glowing orange eyes in a dark setting."
  },
  {
    "id": 7,
    "name": "Colorful Bird Artwork",
    "description": "A vibrant digital illustration of a multicolored bird in flight on a black background."
  },
  {
    "id": 8,
    "name": "Blue Flower",
    "description": "A delicate blue-toned flower captured in soft focus, creating a calm and dreamy effect."
  },
  {
    "id": 9,
    "name": "Leopard Portrait",
    "description": "A digitally enhanced leopard with glowing eyes and colorful lighting in a dark jungle background."
  },
  {
    "id": 10,
    "name": "Sports Bike",
    "description": "A white sports bike parked on rugged terrain under a clear sky, with 'iamabiker.com' watermark."
  }
]


  useEffect(() => {
    const blogId = Number(params.BlogId);
    let found = hardcodedBlogs.find(b => b.id === blogId);
    if (!found) {
      const savedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
      found = savedBlogs.find(b => b.id === blogId);
    }

    setBlog(found);
  }, [params.BlogId]);

  if (!blog) return <p style={{ textAlign: "center" }}>Blog not found</p>;

  return (
    <div className="description">
      <div className="box"> <h1>{blog.name}</h1>
        <img src={blog.imageUrl ? blog.imageUrl : `/img-${blog.id}.jpg`} alt={blog.name} className="blogimg1" />
        <p>{blog.description}</p>
      </div>
    </div>
  );
};

export default Blogs;
