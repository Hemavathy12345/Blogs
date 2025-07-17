import '@/styles/navbar.css'
const navbar = () => {
    return (
        <div className='navbar'>
            <ol>
                <div className='bar'>
                    <li><a href="/">Admin</a></li>
                    <li><a href="/ulogin">User</a></li>
                </div>
            </ol>
        </div>
    )
}

export default navbar