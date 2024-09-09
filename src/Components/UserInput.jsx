import React, { useState } from 'react';
import { useAuth } from '../Context/Context';

function UserInput() {
    const { getUserCity } = useAuth();
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false); // State for loading indicator

    const handleClick = () => {
        setLoading(true); // Activate loading state
        getUserCity(city);
        console.log(city);
        setCity('');
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setLoading(false); // Deactivate loading state after 2 seconds
        }, 800);
    };

    return (
        <div className='md:w-[35vw]'>
            {loading && (
                <div className="fixed inset-0 bg-black opacity-50 z-50 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                </div>
            )}
            <input
                type="text"
                onChange={e => setCity(e.target.value)}
                value={city}
                placeholder='Search City Here'
                className='w-[85.5%] my-5 shadow shadow-black py-2 px-3'
            />
            <button
                onClick={handleClick}
                className='bg-blue-500 text-white py-2 px-3 font-medium rounded shadow shadow-black'
            >
                Search
            </button>
        </div>
    );
}

export default UserInput;
