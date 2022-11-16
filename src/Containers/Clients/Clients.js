import React from 'react'
import client from "../../Images/clients.png"
import GrowCareer from '../GrowCareer/GrowCareer'
import TestiMonials from '../TestiMonial/TestiMonials'
import Footer from './../../Components/Footer/Footer';

const Clients = () => {
    return (
        <>
            <div className="flex-div">
                <div className="width-div">


                    <div className="text-center text-7xl font-bold mt-36 mb-16">
                        <h1>Our Clients</h1>

                    </div>
                    <p className='text-center mt-16 text-2xl px-20 mb-16'>We are global and capable of delivering projects worldwide, thanks to seamless digital integration and adherence to proven productive & creative processes every time. We have worked for regional & international brands from different sectors – engineering, manufacturing, consumer tech, edtech, education, hospitality, healthcare, IT, ITeS, real estate, etc.</p>

                    <div className="">

                        {/* I have used screeshot rather than using multiple images for client  */}
                        <img src={client} alt="" />
                    </div>
                    {/* <div>
                        <div>
                            <TestiMonials />
                        </div>
                    </div> */}
                    <TestiMonials />
                    <GrowCareer />
                    <Footer />

                </div>
            </div>


        </>
    )
}

export default Clients