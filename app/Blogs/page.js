"use client";
import './page.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Blogs = () => {
  const router = useRouter();
  const [allBlogs, setAllBlogs] = useState([]);

  const hardcodedBlogs = [
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
  ];

  useEffect(() => {
    const userBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const mergedBlogs = [];
    for (let i = 0; i < hardcodedBlogs.length; i++) {
      mergedBlogs.push(hardcodedBlogs[i]);
    }
    for (let j = 0; j < userBlogs.length; j++) {
      mergedBlogs.push(userBlogs[j]);
    }
    setAllBlogs(mergedBlogs);
  }, []);
  return (
    <div className="displayimg">
      <h1>All Blogs</h1>
      <div className="images">  {allBlogs.map((item) => ( <div key={item.id} className="image-card">
            <button  className="imgbtn"  onClick={() => { router.push(`/Blogs/${item.id}`); }}>
              <img src={item.imageUrl ? item.imageUrl : `/img-${item.id}.jpg`} alt={`Blog Image ${item.name}`} /> </button> 
              <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
