"use client";
import '@/app/CreateBlog/create/create.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Create = () => {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleCreate = () => {
    if (!title || !description || !image) {
      console.log("Please fill all fields");
      return;
    }
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const newBlog = {
      id: Date.now(), 
      name: title,
      description: description,
      imageUrl: image
    };

    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    router.push(`/Blogs/${newBlog.id}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create Blog</h1>
      <form>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text"placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="button" onClick={handleCreate} className='button'> Create </button>
      </form>
    </div>
  );
};

export default Create;
