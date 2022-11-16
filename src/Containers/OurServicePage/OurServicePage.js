import React from 'react'
import "./OurServicePage.css"
import OurService from '../../Components/OurService/OurService'
import img1 from "../../Images/Picture1.png"
import img2 from "../../Images/Picture2.png"
import img3 from "../../Images/Picture3.png"
import img4 from "../../Images/Picture5.png"

const OurServicePage = () => {

    const allServices = [
        {
            url: img1,
            title: "Video Creation",
            desc: "Videos comprise the majority of the visual content being consumed worldwide. Video...",

        },
        {
            url: img2,
            title: "Graphic Designing",
            desc: "A design that has a person's attention has halfway gotten  interest in buying...",

        },
        {
            url: img3,
            title: "Content Writing",
            desc: "Words can weave magic for readers. It is true not only for fiction literature but...",

        },
        {
            url: img3,
            title: "Digital Marketing",
            desc: "Imagining a world without social media is impossible. It further makes having a...",

        },
        {
            url: img2,
            title: "Website Development",
            desc: "An immersive website is the first online digital address of your business. Having a...",

        }, {
            url: img1,
            title: "Sound Production",
            desc: "Audio is the soul of visual communication that creates the desired impact on your...",

        },
        {
            url: img4,
            title: "Consultation",
            desc: "Have you wondered about your brand's visual & digital identity status? Just like a...",

        }
    ]


    return (
        <>
            <h1 className="flex justify-center mt-20 mb-20 text-7xl font-bold">Our Services</h1>
            <div className='main-div-for-servicepage mb-3'>
                <div className='service-div'>

                    <div className='flex flex-wrap justify-center gap-8'>
                        {
                            allServices.map((val, index) => (
                                <OurService serv={val} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurServicePage