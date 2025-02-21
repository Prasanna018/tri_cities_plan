import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


const leftlinks = [

    { id: 3.2, name: "Corridor Plans", path: "corridor-plans" },

    { id: 3.4, name: "Regional Plans", path: "regional-plans" },
    { id: 3.5, name: "Reports", path: "reports" }
]
function ProgramAndStudies() {
    const location = useLocation();
    return (
        <div className='flex justify-center pt-10 gap-x-6 pb-4 '>
            <div className='w-[80vw] flex gap-x-4'>
                <div className='border-2 w-12/3 rounded-sm'>

                    <Outlet></Outlet>

                </div>


                <div className='md:block hidden w-full sticky top-32 border-2 h-fit border-red-20 rounded-xl'>

                    <div className='p-4'>
                        <span className='text-2xl font-bold'>Program & Studies</span>

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
