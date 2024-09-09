import React from 'react';
import { useAuth } from '../Context/Context';

function ForeCast() {
    const { forecast } = useAuth(); // Destructure forecast from useAuth context

    // Check if forecast is null before rendering
    if (!forecast) {
        return <div>Loading...</div>; // Render loading state or handle null case
    }

    return (
        <div className=' w-[70vw] shadow shadow-black flex items-center text-center mt-10 '>
            {
                forecast.map(element => (
                    <div key={element.date} className='border px-5 py-5'>
                        <h2 className='text-3xl text-blue-500 mb-3'>{new Date(element.date).toLocaleDateString('en-US', { weekday: 'long' })}</h2>
                        <p className='text-xl'>Average Temperature</p>
                        <p className='text-2xl my-3'>{element.day.avgtemp_c}°C</p>
                    </div>
                ))
            }
        </div>
    );
}

export default ForeCast;
