import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="flex-div bg-white fixed-div-fornav">
                <div className="width-div">


                    <header className="text-black-600 body-font">
                        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                                {/* <span className="ml-3 text-xl">Antrikshglobal</span> */}
                                <img src="https://antrikshglobal.com/wp-content/uploads/2020/10/logo-Antriksh.png" alt="" className='' />
                            </a>
                            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                                <a className="mr-5 cursor-pointer hover:text-sky-300 font-bold text-lg">Home</a>
                                <a className="mr-5 cursor-pointer hover:text-sky-300 font-bold text-lg">About</a>
                                <a className="mr-5 cursor-pointer hover:text-sky-300 font-bold text-lg">Case Studies</a>
                                <a className="mr-5 cursor-pointer hover:text-sky-300 font-bold text-lg">Blogs</a>
                            </nav>
                            <button className="inline-flex items-center bg-sky-800 border-0 py-1 px-3 focus:outline-none rounded text-lg mt-4 md:mt-0 text-white font-bold">Contact

                            </button>
                        </div>
                    </header>
                </div>
            </div >
        </>
    )
}

export default Navbar