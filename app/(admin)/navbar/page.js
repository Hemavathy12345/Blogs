import '@/styles/navbar.css'
import Link from 'next/link'
const navbar = () => {
    return (
        <div className='navbar'>
            <ol>
                <div className='bar'>
                    <li><Link href="/">Admin</Link></li>
                    <li><Link href="/ulogin">User</Link></li>
                </div>
            </ol>
        </div>
    )
}

export default navbar