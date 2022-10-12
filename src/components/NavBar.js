import React from 'react'
import { Link } from "react-scroll";
export default function NavBar() {

    const handleHamburger = () => {
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        const navDoc = document.getElementById('nav-doc');
        
        bar1.classList.toggle('translate-y-2');
        bar1.classList.toggle('bg-yellow-300');
        bar1.classList.toggle('rotate-45');
        
        bar2.classList.toggle('opacity-0');
        bar3.classList.toggle('-translate-y-2');
        bar3.classList.toggle('bg-yellow-300');
        bar3.classList.toggle('-rotate-45');

        navDoc.classList.toggle('-translate-y-[1000px]');
    }
    
    return (
        <>
            <header className='text-black z-[999999999] fixed top-0' >
                <nav className='flex px-3 fixed w-full md:px-12 py-2 justify-between items-center   bg-red-400 text-white' id='nav'>
                    <div className='part-1 flex items-center '>
                        <span className='text-2xl md:text-3xl cursor-pointer text-white font-medium'>#Aaditya</span>
                    </div>
                    <div className='part-2  '>
                        <ul className='px-2 hidden md:flex items-center text-base '>
                            <li className='px-2 cursor-pointer  hover:scale-110 transition-all duration-200 underline underline-offset-4 hover:text-yellow-200  '>
                                <Link to={"home"} smooth duration={500} >Home</Link>
                                {/* Home */}
                            </li>
                            <li className='px-2 cursor-pointer  hover:scale-110 transition-all duration-200 hover:underline hover:underline-offset-4 hover:text-yellow-200 '>
                                <Link to={"about"} smooth duration={500} >About</Link>
                                {/* About */}
                            </li>
                            <li className='px-2 cursor-pointer  hover:scale-110 transition-all duration-200 hover:underline hover:underline-offset-4 hover:text-yellow-200 '>
                                <Link to={"skills"} smooth duration={500} >Skills</Link>
                                {/* About */}
                            </li>
                            <li className='px-2 cursor-pointer hover:scale-110 transition-all duration-200 hover:underline hover:underline-offset-4 hover:text-yellow-200'>
                                <Link to={"portfolio"} smooth duration={500} >Portfolio</Link>
                                {/* Portfolio */}
                            </li>
                            <li className='pl-2 cursor-pointer hover:scale-110 transition-all duration-200 hover:underline hover:underline-offset-4 hover:text-yellow-200 '>
                                <Link to={"contact"} smooth duration={500} >Contact</Link>
                                {/* Contact */}
                            </li>
                        </ul>

                    </div>
                    {/* HamBurger: - */}
                    <div className='hamburger md:hidden w-6' onClick={handleHamburger}>
                        <div className='w-100% h-1 rounded-md my-1 bg-white transition-all ' id='bar1'></div>
                        <div className='w-100% h-1 rounded-md my-1 bg-white transition-all ' id='bar2'></div>
                        <div className='w-100% h-1 rounded-md my-1 bg-white  transition-all ' id='bar3' ></div>
                    </div>

                    {/* NavDocker */}
                    <div className='nav-doc md:hidden w-full  border-4 p-2 border-white bg-[#0e0e79] text-white flex justify-center items-center absolute left-0 right-0  top-12 -translate-y-[1000px] transition-all z-[9999999] ' id='nav-doc'>
                        <ul className='flex flex-col '>
                            <li className='p-2 border-4 font-medium my-2 text-center'>
                                <Link to={'home'} smooth duration={500}>Home</Link>
                            </li>
                            <li className='p-2 border-4 font-medium my-2 text-center'>
                                <Link to={'about'} smooth duration={500}>About</Link>
                            </li>
                            <li className='p-2 border-4 font-medium my-2 text-center'>
                                <Link to={'skills-section'} smooth duration={500}>Skills</Link>
                            </li>
                            <li className='p-2 border-4 font-medium my-2 text-center'>
                                <Link to={'portfolio'} smooth duration={500}>Portfolio</Link>
                            </li>
                            <li className='p-2 border-4 font-medium my-2 text-center'>
                                <Link to={'contact'} smooth duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
