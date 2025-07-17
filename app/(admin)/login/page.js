"use client"
import '@/styles/login.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        router.push('/CreateBlog');
    };

    return (
        <div className="login">
            <h1>Admin Login</h1>
            <div className='form'>
                <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="button" onClick={handleLogin} className='button'>Login</button>    
            </div>
        </div>
    );
};

export default Login;
