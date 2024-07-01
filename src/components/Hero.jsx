import React from 'react';
import character from '../img/character.png';
import character2 from '../img/character2.png';

function Hero() {
    return (
        <>
            <div className="h-screen relative overflow-hidden flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="p-10 pt-56 md:pe-0 md:pt-0 md:ps-32 md:-me-10">
                    <div className="text-3xl md:text-8xl uppercase font-semibold myFont">Are you ready?</div>
                    <div className="text-lg md:text-2xl mt-4 md:py-2">Ready for what? Ready to build your stunning website!</div>
                    <div className="text-sm md:text-2xl mt-4 uppercase">
                        <button className="uppercase font-semibold tracking-widest bg-purple-800 hover:bg-purple-700 py-2 px-8 md:py-3 md:px-12 transition duration-300">
                            Sure, I'm ready
                        </button>
                    </div>
                </div>
                <img src={character} alt="" className='w-full md:hidden'/>
                <img src={character2} alt="" className='w-[600px] hidden md:block'/>
                <div className="absolute bottom-0 -right-[300px] -z-10 bg-gradient-to-t from-purple-800/80 to-black -rotate-[20deg] h-[400px] w-[600px] rounded-full blur-[50px]"></div>
            
                <div className="absolute bottom-2 right-2 text-xs z-10 bg-black py-2 px-3 font-mono">DanialK007</div>
            </div>
        </>
    )
}

export default Hero
