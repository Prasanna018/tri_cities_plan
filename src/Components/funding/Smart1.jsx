import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const tablinks = [
    { id: 1, name: "Round 6", path: "round-6" },
    { id: 2, name: "Round 5", path: "round-5" },
    { id: 3, name: "Round 4", path: "round-4" },
    { id: 4, name: "Round 3", path: "round-3" },
    { id: 5, name: "Round 2", path: "round-2" },
    { id: 6, name: "Round 1", path: "round-1" }
]
function Smart1() {
    const location = useLocation();
    return (
        <div className='p-4 bg-[#f6f6f6] text-black'>
            <div className='py-2 '>
                <h1 className='text-3xl font-bold'>What is SMART SCALE?</h1>
                <p className='py-4'>
                    Transportation resources are limited. To ensure fair, transparent, and efficient allocation of state transportation funds, Virginia developed a scoring system to determine which projects should be prioritized for state funding. MPOs, localities, planning district commissions, and transit agencies submit their projects for consideration. Projects with the highest scores are more likely to receive funding. This scoring system, known as SMART SCALE, is an acronym. SMART stands for the System for the Management and Allocation of Resources for Transportation. SCALE represents the key factors used to assess a project's value: Safety, Congestion reduction, Accessibility, Land use, Economic development, and the Environment.


                </p>
            </div>



            <div className='py-2 '>
                <h1 className='text-3xl font-bold'>How are transportation projects selected for state funding?</h1>
                <p className='py-4'>
                    Submitted projects are scored individually and objectively based on their impact on key factors such as safety, congestion reduction, accessibility, land use, economic development, and environmental effects. Once the projects are scored, the Commonwealth Transportation Board (CTB) selects which projects will receive state funding and includes them in the state's Six-Year Improvement Program (SYIP).


                </p>
            </div>

            <div className='py-2 '>
                <h1 className='text-3xl font-bold'>What are the steps of the selection process?</h1>
                <p className='py-4'>
                    In short, localities and organizations like FAMPO’s Policy Board decide which of their transportation projects are eligible for SMART SCALE. They then submit these eligible projects to the state for consideration. The state scores and prioritizes the submitted projects, and the Commonwealth Transportation Board (CTB) uses these scores to select the projects that will receive funding. These projects are then included in the Six-Year Improvement Program and are fully funded through construction.
                </p>
            </div>


            <div className='py-2 '>
                <h1 className='text-3xl font-bold'>What is the score based on?</h1>
                <p className='py-4'>
                    SMART SCALE scores are assigned to each transportation project by evaluating how the project impacts factors such as safety, congestion mitigation, accessibility, environmental quality, economic development, land use, and project cost. These factors are weighed differently depending on the SMART SCALE category of the region. For a full explanation of how projects are scored, visit the SMART SCALE website here.

                    In November 2019, FAMPO passed a resolution requesting the state move FAMPO from Category A to Category B. This change means the factors listed above will be weighed differently than before. Studies indicate that this switch will enhance our project scores.
                </p>
            </div>



            <div className='py-2 '>
                <h1 className='text-3xl font-bold'>What is a SMART SCALE "round?"</h1>
                <p className='py-4'>
                    A "round" refers to a complete SMART SCALE cycle, with two years between each cycle. Since SMART SCALE is relatively new, the round numbers are still low. We are currently in round five of the SMART SCALE process.
                </p>
            </div>


            <div className=" lg:flex lg:justify-start gap-x-10 grid  grid-cols-2 items-center py-8">
                {tablinks.map((link) => (
                    <div className="relative h-[60px]">
                        {/* Background shadow effect */}
                        <div className="absolute top-2 left-2 w-full h-full bg-[#6e6285] rounded-xl"></div>

                        {/* Foreground card wrapped in Link */}
                        <Link
                            to={link.path}
                            key={link.id}
                            className={`relative border-2 p-4 rounded-xl h-[60px] flex items-center justify-center shadow-lg 
                                            ${location.pathname.includes(link.path) ? "bg-green-600 z-30 " : "bg-[#b7d1ea]"}`}
                        >
                            <span className={location.pathname.includes(link.path) ? "text-white font-bold" : ""}>
                                {link.name}
                            </span>
                        </Link>
                    </div>

                ))}
            </div>

            <div className='py-8'>
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Smart1
