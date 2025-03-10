import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

// left side options links are here


const leftlinks = [

    { id: 3.2, name: "Corridor Plans", path: "corridor-plans" },

    { id: 3.4, name: "Regional Plans", path: "regional-plans" },
    { id: 3.5, name: "Reports", path: "reports" },
    { id: 3.6, name: " Multi-Modal Plans", path: "multi-modal-plans" }
]
function ProgramAndStudies() {
    const location = useLocation();
    return (
        <div className='flex justify-center pt-10 gap-x-6 pb-4 '>
            <div className='w-[80vw] flex gap-x-4'>
                <div className='lg:w-12/3  w-full rounded-sm'>

                    <Outlet></Outlet>

                </div>


                <div className='lg:block text-black hidden w-full sticky top-32 border-2 h-fit border-red-20 rounded-xl'>

                    <div className='p-4'>
                        <span className='text-2xl font-bold'>Programs & Studies</span>

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


        </div>
    )
}

export default ProgramAndStudies
