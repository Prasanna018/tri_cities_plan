import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
const leftlinks = [
    { id: 6.1, name: "Federal Funding Authorizations", path: 'federal-funding-authorizations' },
    { id: 6.2, name: "SMART SCALE", path: "smart-scale" }
]

function Funding() {
    const location = useLocation();
    return (
        <div className='flex justify-center pt-10 gap-x-6 pb-4 '>
            <div className='w-[80vw] flex gap-x-4'>
                <div className='border-2 w-12/3 rounded-sm'>

                    <Outlet></Outlet>

                </div>

                <div className='md:block hidden w-full sticky top-30 border-2 h-fit border-red-20 rounded-xl '>
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

export default Funding
