import '@/app/CreateBlog/page.css';
import Link from 'next/link';

const CreateBlog = () => {
  return (
    <div className='navbar1'>
      <Link href="/CreateBlog/create">Create</Link>
      <Link href="/Blogs">List of Blog</Link>
      <Link href="/CreateBlog/update">Update</Link>
    </div>
  );
};

export default CreateBlog;
