import React from 'react'


const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 body-font ">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-content-between">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img src="https://antrikshglobal.com/wp-content/uploads/2020/10/logo-Antriksh.png" alt="" />
                        </a>
                        <p className="mt-2 text-xl font-bold text-black">Brains that Brand!</p>

                        <span className="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start lg:mt-5 ">
                            <a className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5 cursor-pointer" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-64 md:w-1/2 w-full px-4 space-x-60">

                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-black font-semibold leading-5 ">About Us</a>
                                </li>
                                <li>
                                    <a className="text-black font-semibold leading-7 text-lg ">Services</a>
                                </li>
                                <li>
                                    <a className="text-black font-semibold leading-7 text-lg ">Case Studies</a>
                                </li>
                                <li>
                                    <a className="text-black font-semibold leading-7 text-lg ">Blogs</a>
                                </li>
                                <li>
                                    <a className="text-black font-semibold leading-7 text-lg ">Contact Us </a>
                                </li>
                                <li>
                                    <a className="text-black font-semibold leading-7 text-lg ">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-2/4 md:w-1/2 w-full px-4 ">

                            <nav className="list-none mb-10">
                                <li>
                                    <p className="text-black font-semibold leading-7 text-2xl ">Let's Connect!</p>
                                </li>
                                <li>
                                    <a className="text-black font-semibold leading-7 text-lg ">+91 8806214198
                                    </a>
                                </li>
                                <li>
                                    <p className="text-black font-semibold leading-7 text-lg ">Drop us a mail!</p>
                                </li>
                                <li>
                                    <a className="text-black font-semibold leading-7 text-lg ">contact@antrikshglobal.com</a>
                                </li>
                            </nav>
                        </div>

                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer
