import React, { useState } from 'react';
import img from "../img/icon.png";

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className='downer fixed z-[999] top-0 left-0 w-full pt-3 flex items-center justify-center'>
            <div className='min-w-56 text-[0.9rem] h-fit grid font-semibold border bg-black text-white/60 border-white/20 rounded-s-[22px] rounded-e-[22px] px-[0.6rem] py-[0.4rem] items-center md:justify-center'>
                <div className="justify-between items-center flex gap-5 ">    
                    <div className='flex gap-2 pt-[2px] items-center justify-center ps-2'>
                        {/* <div className='w-6 h-6 flex items-center justify-center rounded-md bg-purple-600'>S</div> */}
                        DanialK007
                    </div>
                    <a href="" className='hidden md:block bg-white/10 text-white py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Home</a>
                    <a href="" className='hidden md:block hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Features</a>
                    <a href="" className='hidden md:block hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>About</a>
                    <a href="" className='hidden md:block hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Blog</a>
                    <a href="" className='hidden md:block hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Shop</a>
                    <button className='hidden md:block bg-white py-[0.3rem] text-black px-[0.7rem] rounded-s-full rounded-e-full'>Sign up</button>
                    <button id='menuBtn' className='block md:hidden bg-white/20 p-1 rounded-xl' onClick={toggleMenu}>
                        <img src={img} alt="" className='w-5'/>
                    </button>
                </div>
                <div id='menu' className={menuVisible ? "flex flex-col gap-2 pt-4 h-fit duration-500" : "duration-500 h-0 opacity-0 flex flex-col overflow-hidden"}>
                    <a href="" className='text-center mx-auto px-4 md:hidden bg-white/10 text-white py-[0.3rem] rounded-s-full rounded-e-full'>Home</a>
                    <a href="" className='text-center mx-auto px-4 md:hidden hover:bg-white/10 py-[0.3rem] rounded-s-full rounded-e-full'>Features</a>
                    <a href="" className='text-center mx-auto px-4 md:hidden hover:bg-white/10 py-[0.3rem] rounded-s-full rounded-e-full'>About</a>
                    <a href="" className='text-center mx-auto px-4 md:hidden hover:bg-white/10 py-[0.3rem] rounded-s-full rounded-e-full'>Blog</a>
                    <a href="" className='text-center mx-auto px-4 md:hidden hover:bg-white/10 py-[0.3rem] rounded-s-full rounded-e-full'>Shop</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
