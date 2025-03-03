import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// left side options links are here

const leftlinks = [
    { id: 5.1, name: "Regional Travel Model", path: "regional-travel-model" },
    { id: 5.2, name: "VDOT Roadway Functional Classification", path: 'VDOT-roadway-functional-classification' },
    {
        id: 5.3, name: "Environmental Justice", path: "environmental-justice"
    },
    {
        id: 5.4, name: "Transportation Dashboard", path: "transportation-dashboard"
    }
]

function Data() {

    const location = useLocation();
    return (
        <div className='flex justify-center pt-10 gap-x-6 pb-4 '>

            <div className='w-[80vw] flex gap-x-4'>




                <div className=' lg:w-12/3 w-full rounded-sm'>

                    <Outlet></Outlet>

                </div>

                <div className='lg:block hidden text-black w-full sticky top-30 border-2 h-fit border-red-20 rounded-xl '>
                    <div className='p-4'>
                        <span className='text-2xl font-bold'>Data</span>
                        {leftlinks.map(({ id, name, path }) => (
                            <div key={id}>
                                <Link
                                    className={`flex text-sm justify-start my-2 items-center ${location.pathname.includes(path) ? "text-blue-500" : ""
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



        </div>
    )
}

export default Data
