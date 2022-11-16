import React from 'react'
import "./HeroSection.css"
import Navbar from './../../Components/Navbar/Navbar';

const HeroSection = () => {
    return (
        <>
            <Navbar />
            <div className="flex-div-for-hero-section mt-28">
                <div className="width-div">
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-90% mx-auto flex flex-wrap justify-between">
                                <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                    <h1 className="text-black-700 text-3xl mb-4 first-heading-in-hero-section" >  We are <br />

                                        <div className="wrapper">
                                            <div>
                                                <ul className="dynamictxts">
                                                    <li> <span className='mt-2'>EXPERIMENTERS</span></li>
                                                    <li> <span className='mt-2'>DEVELOPERS</span></li>
                                                    <li> <span className='mt-2'>THINKER</span></li>
                                                    <li> <span className='mt-2'> STORYTELLER</span></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </h1>

                                    <p className="text-2xl text-black mb-10">Every business starts with a dream, a vision. Every product/service has a story waiting to be discovered, to be promoted. We at Antriksh help you with the apt narration, representation & strategization of your product’s media creation & marketing.</p>

                                    <button className="inline-flex items-center bg-sky-800 border-0 py-4 px-3 focus:outline-none rounded text-2xl mt-12 md:mt-0 text-white font-bold">Let's connect

                                    </button>

                                </div>
                                <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-1/3 h-30  rounded align-middle" src="https://antrikshglobal.com/wp-content/uploads/2022/10/slide2.gif " width={"300px"} height={"300px"} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default HeroSection