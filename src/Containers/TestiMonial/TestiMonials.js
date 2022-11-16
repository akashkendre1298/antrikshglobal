import React from 'react'

const TestiMonials = () => {
    return (

        <>
            <div className='bg-white'>

                <div className="text-center text-7xl mt-16 mb-16 font-bold">Testimonial</div>
                <section className="p-6">
                    <div className="container max-w-xl mx-auto">
                        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8  dark:text-black">
                            <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full dark:bg-gray-500" />
                            <blockquote className="max-w-lg text-lg italic font-medium text-center">It was an awesome experience with the Antriksh team. The special thing about them is they really think
                                according to the vision which you wanna create. Keep up the good work!!!.</blockquote>
                            <div className="text-center">
                                <p className='text-4xl font-bold mb-3'>Leroy Jenkins</p>
                                <p>CEO of Company Co.</p>
                            </div>
                            <div className="flex space-x-2">
                                <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full dark:bg-gray-50"></button>
                                <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                                <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full dark:bg-gray-600"></button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default TestiMonials
