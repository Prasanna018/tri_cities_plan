import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const leftlinks = [
    { id: 4.1, name: "Metropolitan Transportation Plans (MTP)", path: "metropolitan-transportation-plans" },
    { id: 4.2, name: "Metropolitan Transportation Improvement Programs (MTIP)", path: "metropolitan-transportation-improvement-programs" },
    { id: 4.3, name: "Congestion Management Process (CMP)", path: "congestion-management-process" },
    { id: 4.4, name: "Unified Planning Work Program (UPWP)", path: "unified-planning-work-program" },
    { id: 4.5, name: "Public Participation Plan (PPP)", path: "public-participation-plan" },
    { id: 4.6, name: "Transportation Performance Management", path: "transportation-performance-management" },
    { id: 4.7, name: "Listing of Obligated Projects", path: "listing-of-obligated-projects" }
]
function Plans() {
    const location = useLocation();
    return (
        <div className='flex justify-center pt-10 gap-x-6 pb-4 '>


            <div className='w-[80vw] flex gap-x-4'>


                <div className='border-2 w-12/3 rounded-sm'>

                    <Outlet></Outlet>

                </div>

                <div className='md:block hidden w-full sticky top-30 border-2 h-fit border-red-20 rounded-xl '>
                    <div className='p-4'>

                        <span className='text-2xl font-bold'>Plan</span>
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

export default Plans
