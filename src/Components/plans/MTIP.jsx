import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


const tablinks = [
    { id: 1, name: "2024-27 MTIP", path: "2024-27-MTIP" },
    { id: 2, name: "2023-26 MTIP", path: "2023-26-MTIP" },
    { id: 3, name: "2022-25 MTIP", path: "2022-25-MTIP" }
]

function MTIP() {
    const location = useLocation();
    return (
        <div className='p-4 bg-[#1e2a3a]'>
            <div className='py-4'>
                <h1 className='text-3xl py-4 font-bold'>Metropolitan Transportation Improvement Program</h1>
                <p className='text-lg'>The MTIP is a 4-year comprehensive list of federal, state, and locally funded transportation
                    projects. All modes of transportation are included in the TIP. This includes transit, roadways,
                    bridges, rail, bicycle facilities, pedestrian provisions, and enhancement projects like landscaping
                    and greenways.
                    The purpose of developing the MTIP is to develop a staged, 4-year transportation project
                    program consistent with the Metropolitan Transportation Plan (MTP). Significant projects that
                    eventually get programmed into the MTIP generally begin as ideas many years earlier. These
                    ideas may be first thought of and included in TCAMPO’s adopted MTP, which covers a 25-year
                    time span. As time passes, potential projects that remain viable gradually move closer to being
                    included in the MTIP through the MTP&#39;s financially constrained prioritization process</p>
            </div>


            <div className='flex justify-around items-center py-8'>

                {tablinks.map((link, id) => {
                    return <div className='border-2 p-2 rounded-xl'>

                        <Link
                            className={` ${location.pathname.includes(link.path) ? "text-blue-500 " : ""}`}
                            key={link.id}
                            to={link.path}
                        >{link.name}</Link>

                    </div>

                })}

            </div>

            <div className='py-8'>
                <Outlet></Outlet>
            </div>


        </div>
    )
}

export default MTIP
