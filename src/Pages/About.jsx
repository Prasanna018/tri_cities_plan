import React from 'react'
import Committees from '../Components/Committees'

function About() {
    return (
        <div className='flex justify-center pt-10 gap-x-6 pb-4 '>
            <div className='w-[80vw] flex gap-x-4'>


                <div className='border-2 w-12/3 rounded-xl'>


                    <Committees></Committees>

                </div>

                <div className='md:block hidden w-full sticky top-32 border-2 h-fit border-red-20 rounded-xl'>
                    left

                </div>

            </div>

        </div>
    )
}

export default About
