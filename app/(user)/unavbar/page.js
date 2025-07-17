import '@/styles/unavbar.css';
import Link from 'next/link';
const unavbar = () => {
    return (
        <>
            <div>
                <ol>
                    <div className='bar'>
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#create">Profile</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                        <li><Link href="#logout">Logout</Link></li>
                    </div>
                </ol>
            </div>
        </>
    );
};
export default unavbar;