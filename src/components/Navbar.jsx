import React, {useState, useEffect} from 'react'
import icon from '../img/icon.png'

function Navbar() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };


    return (
        <>
            <div className="fixed z-[999] top-0 left-0 w-full p-5 flex items-center justify-center">
                <div className="bg-black border border-white/20 rounded-s-full rounded-e-full py-2 px-5 flex justify-between gap-10">
                    <a href="" className='flex items-center'>
                        <img src={icon} alt="" className='h-8'/>
                        
                    </a>
                    <a href="" className='rotate-90 w-7 h-7 bg-white/10 flex items-center justify-center pb-[0.3rem] rounded-lg'>|||</a>
                </div>
            </div>
        </>
    )
}

export default Navbar
