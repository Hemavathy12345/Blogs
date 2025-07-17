import '@/styles/unavbar.css';
const unavbar = () => {
    return (
        <>
            <div>
                <ol>
                    <div className='bar'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#create">Profile</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#logout">Logout</a></li>
                    </div>
                </ol>
            </div>
        </>
    );
};
export default unavbar;