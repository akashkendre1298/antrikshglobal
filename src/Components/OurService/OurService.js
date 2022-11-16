import React from 'react'
import "./OurService.css"

const OurService = (props) => {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg card-for-service">
                <img className="w-1/2 justify-center align-middle flex m-auto mt-5 mb-5" src={props.serv.url} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center card-title">{props.serv.title}
                    </div>
                    <p className="text-gray-700 text-base text-center desc-for-card">
                        {props.serv.desc}
                    </p>

                    <p className='text-sky-500 text-center font-bold text-2xl mt-5 mb-5 cursor-pointer hover:focus'>know more</p>
                </div>

            </div>
        </>
    )
}

export default OurService