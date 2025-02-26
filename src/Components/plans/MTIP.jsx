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
        <div className='p-2 bg-[#f6f6f6] text-black'>
            <div className='py-4'>
                <h1 className='text-3xl py-4 font-bold'>Metropolitan Transportation Improvement Program</h1>
                <p className=''>The MTIP is a 4-year comprehensive list of federal, state, and locally funded transportation
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


            <div className='flex justify-start gap-x-10 items-center py-8'>

                {tablinks.map((link, id) => {

                    return <div className="relative  h-[60px]">
                        {/* Background shadow effect */}
                        <div className="absolute top-2 left-2 w-full h-full bg-[#6e6285] rounded-xl"></div>

                        {/* Foreground card wrapped in Link */}

                        <Link
                            to={link.path}
                            key={link.id}
                            className={`relative border-2 p-4 rounded-xl h-[60px] flex items-center justify-center shadow-lg 
                        ${location.pathname.includes(link.path) ? "bg-green-600 z-30 " : "bg-[#b7d1ea]"}`}
                        >
                            <span className={location.pathname.includes(link.path) ? "text-black font-bold" : ""}>
                                {link.name}
                            </span>
                        </Link>
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
