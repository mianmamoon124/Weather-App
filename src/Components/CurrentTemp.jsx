import React from 'react'
import { useAuth } from '../Context/Context'
import moon from '../assets/images/moon.png'

function CurrentTemp() {
    const auth = useAuth(); // Destructure temp from the context value

    return (
        <div className=' flex justify-between items-center border md:w-[35vw] w-[100vw] shadow shadow-black py-8 px-14'>
            <div>
            <h1 className='text-2xl  font-medium my-3'>{auth.city}</h1>
            <h1 className='text-5xl font-medium mb-5'>{auth.temp}°C</h1>
            </div>
            <div>
                <img src={moon} alt=""  className='w-[80px] mt-8'/>
            </div>
            </div>
    )
}

export default CurrentTemp