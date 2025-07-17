import '@/app/CreateBlog/page.css'
const createBlog = () => {
    return (
        <div className='navbar1'>
            <a href="/CreateBlog/create">Create</a>
            <a href="/Blogs">List of Blog</a>
            <a href="/CreateBlog/update">Update</a>
        </div>
    )
}

export default createBlog