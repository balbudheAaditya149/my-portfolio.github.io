import React from 'react'

export default function NavBar() {
    
    return (
        <>
            <header className='text-black' >
                <nav className='flex px-3 fixed w-full md:px-12 py-2 justify-between items-center   bg-red-400 text-white' id='nav'>
                    <div className='part-1 flex items-center '>
                        <span className='text-2xl md:text-3xl cursor-pointer text-white font-medium'>#Aaditya</span>
                    </div>
                    <div className='part-2  '>
                        <ul className='px-2 hidden md:flex items-center text-base '>
                            <li className='px-2 cursor-pointer  hover:scale-110 transition-all duration-200 underline underline-offset-4 hover:text-yellow-200  '>
                                {/* <Link to={"home"} smooth duration={500} >Home</Link> */}
                                Home
                            </li>
                            <li className='px-2 cursor-pointer  hover:scale-110 transition-all duration-200 hover:underline hover:underline-offset-4 hover:text-yellow-200 '>
                                {/* <Link to={"about"} smooth duration={500} >About</Link> */}
                                About
                            </li>
                            <li className='px-2 cursor-pointer hover:scale-110 transition-all duration-200 hover:underline hover:underline-offset-4 hover:text-yellow-200'>
                                {/* <Link to={"portfolio"} smooth duration={500} >Portfolio</Link> */}
                                Portfolio
                            </li>
                            <li className='pl-2 cursor-pointer hover:scale-110 transition-all duration-200 hover:underline hover:underline-offset-4 hover:text-yellow-200 '>
                                {/* <Link to={"contact"} smooth duration={500} >Contact</Link> */}
                                Contact
                            </li>
                        </ul>

                    </div>
                    {/* HamBurger: - */}
                    <div className='hamburger md:hidden w-6'>
                        <div className='w-100% h-1 rounded-md my-1 bg-white'></div>
                        <div className='w-100% h-1 rounded-md my-1 bg-white'></div>
                        <div className='w-100% h-1 rounded-md my-1 bg-white'></div>
                    </div>
                </nav>
            </header>
        </>
    )
}
