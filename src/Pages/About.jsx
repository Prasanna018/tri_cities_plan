import React from 'react'
import Committees from '../Components/Committees'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Employees from '../Components/Employees'

import { Routes, Route } from 'react-router-dom'
const leftlinks = [
    { id: 2.1, name: "Committees", path: "committees" },
    { id: 2.2, name: "Employees", path: "employees" },
    { id: 2.3, name: "Contact Us", path: "contact-us" },
    { id: 2.4, name: "Federal Certification", path: "federal-certification" }

];

function About() {
    const location = useLocation()
    return (
        <div className='flex justify-center pt-10 gap-x-6 pb-4 '>
            <div className='w-[80vw] flex gap-x-4'>


                <div className=' w-full lg:w-12/3 rounded-sm'>

                    <Outlet></Outlet>

                </div>

                <div className='lg:block text-black hidden w-full sticky top-32 border-2 h-fit border-red-20 rounded-xl'>
                    <div className='p-4'>

                        <span className='text-2xl font-bold'>About</span>
                        {leftlinks.map(({ id, name, path }) => (
                            <div key={id}>
                                <Link
                                    className={`flex justify-start my-2 items-center ${location.pathname.includes(path) ? "text-blue-500" : ""
                                        }`}
                                    to={path}
                                >
                                    {name}
                                </Link>
                                <hr />
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div >
    )
}

export default About
