"use client";
import '@/app/CreateBlog/update/update.css';
import { useRouter } from "next/navigation";
import { useState } from "react";

const Update = () => {
  const router = useRouter();

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = () => {
    const blogId = parseInt(id); 
    const savedBlogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    let blogFound = false;
    const updatedBlogs = [];
    for (let i = 0; i < savedBlogs.length; i++) {
      const blog = savedBlogs[i];
      if (blog.id === blogId) {
        blogFound = true;
        updatedBlogs.push({
          id: blog.id,
          name: title,
          description: description,
          imageUrl: blog.imageUrl
        });
      } else {
        updatedBlogs.push(blog);
      }
    }
    if (!blogFound) {
      const newBlog = {
        id: blogId,
        name: title,
        description: description,
        imageUrl: `/img-${blogId}.jpg`
      };
      updatedBlogs.push(newBlog);
    } 
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    router.push("/Blogs");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Update Blog</h1>
      <form>
        <input  type="number"   placeholder="Enter Blog ID"  value={id}  onChange={(e) => setId(e.target.value)}/>
        <input  type="text"  placeholder="New Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="New Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="button" onClick={handleUpdate} className="button">  Update</button>
      </form>
    </div>
  );
};

export default Update;
