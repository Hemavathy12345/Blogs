"use client"
import '@/styles/login.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleLogin = () => {
        if (password === confirmPassword) {
            router.push('/Blogs');
        } else {
            alert("Passwords do not match.");
        }
    };
    return (
        <div className="login">
            <h1>User Login</h1>
            <form>
                <input type="text" name="username" placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)}/>
                <input type="email"  name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                <input  type="password" name="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="button" onClick={handleLogin} className="button">Login</button>
            </form>
        </div>
    );
};

export default Login;
