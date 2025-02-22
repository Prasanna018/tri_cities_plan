
import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


const tablinks = [
    { id: 1, name: "Safety", path: "Safety" },
    { id: 2, name: "Infrastructure", path: "Infrastructure" },
    { id: 3, name: "Reliability", path: "Reliability" },
    { id: 4, name: "TAM", path: "TAM" },
    { id: 5, name: "Transit Safety", path: "Transit-Safety" }
]
function FPM() {
    const location = useLocation();


    return (
        <div className='p-4 bg-[#1e2a3a]'>

            <div className='pb-4'>
                <h1 className='text-3xl font-bold'>Federal Transportation Performance Targets</h1>
                <p className='pt-6'>The Moving Ahead for Progress in the 21st Century Act (MAP‐21, 2012) established new
                    requirements for metropolitan planning organizations (MPOs) to coordinate with transit
                    providers, set performance targets, and integrate those performance targets and performance
                    plans into their planning documents by specified dates. The most recent federal transportation
                    legislative package, the Infrastructure Investment and Jobs Act of 2021 (IIJA), carries forward
                    these performance‐based planning requirements. Beginning in 2018, federal rules required that
                    state departments of transportation and MPOs implement federally defined transportation
                    system performance measures. In response, FHWA and FTA worked with state, regional, and
                    transit agencies to identify performance measures that meet the requirements.
                    <br></br>
                    In California, Caltrans is directly responsible for submitting statewide performance targets and
                    periodic progress reports to federal agencies. MPOs are required to establish targets for the
                    same performance measures for their respective metropolitan planning areas within 180 days
                    after the state establishes each target. MPOs may elect to support the statewide targets,
                    establish alternative quantitative targets specific to their region, or use a combination of both
                    approaches. Furthermore, each MPO must incorporate these short‐range performance targets
                    into their planning and programming processes, including the regional transportation plan (RTP)
                    and FTIP.</p>
            </div>




            <div className='py-6'
            >
                <span className='text-2xl font-bold'>FHWA Performance Measures</span>

                <p className='py-2'>The federal performance measures defined by the Federal Highway Administration (FHWA) are
                    categorized into three performance management (PM) focus areas (Safety – PM 1; Asset
                    Management – PM 2; Travel Reliability, Goods Movement, Air Quality and Congestion – PM 3).</p>


            </div>


            <div className='py-6'
            >
                <span className='text-2xl font-bold'>FTA Performance Measures</span>

                <p className='py-2'>In addition to the three PM focus areas defined by FHWA, the Federal Transit Administration
                    (FTA) established performance measures and reporting requirements for transit asset
                    management (TAM) and transit safety.
                    <br></br>
                    Performance metrics for TAM focus on the maintenance of the regional transit system in a state
                    of good repair.
                    <br></br>Transit safety performance monitoring is focused on assessment of the number
                    of transit incidents resulting in fatalities or serious injuries and transit system reliability.
                    <br></br>
                    FTA issued the TAM Final Rule (49 CFR §625 et seq.), effective October 1, 2016, to implement
                    MAP-21 transit asset management provisions.
                    <br></br> This final rule mandates a National TAM System,
                    defines ‘State of Good Repair’ (SGR), and requires transit providers to develop TAM plans.
                    <br></br>The
                    Metropolitan Transportation Planning Final Rule (23 CFR §450.206) outlines the timelines and
                    processes by which states, MPOs, and transit providers must coordinate in the target setting
                    process.</p>


            </div>

            <div className='flex justify-around items-center py-8'>

                {tablinks.map((link, id) => {
                    return <div
                        key={link.id}
                        className='border-2 p-2 rounded-xl'>

                        <Link
                            className={` ${location.pathname.includes(link.path) ? "text-blue-500 " : ""}`}
                            key={link.id}
                            to={link.path}
                        >{link.name}</Link>

                    </div>

                })}

            </div>

            <div className='py-6'>


                <Outlet></Outlet>

            </div>


        </div >


    )
}

export default FPM
