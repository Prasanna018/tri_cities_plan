import React from 'react'

function ReginalPlans() {
    return (
        <div className='p-4 bg-[#1e2a3a]'>
            <div>
                <h1 className='text-3xl font-bold py-4'>
                    Regional Plans

                </h1>
                <div className='py-2 flex flex-col '>

                    <a
                        target='_blank'


                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/PAT_TSP_Report_FINAL_Dec2021.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'
                    >    2021 PAT Transit Strategic Plan (TSP)
                    </a>


                    <a
                        target='_blank'

                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/PAT_TDP_approved_2182020_Petersburg.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'
                    >  2020 PAT Transit Development Plan (TDP)
                    </a>

                    <a
                        target='_blank'
                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/2022CoordinatedHumanServicesMobilityPlan.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'
                    >   2022 Coordinated Human Services Mobility Plan
                    </a>

                    <a
                        target='_blank'
                        href='https://craterpdc.org/wp-content/uploads/2024/09/TCAMPO-Regional-Transportation-Safety-Plan_05122023.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'
                    >
                        TCAMPO Regional Transportation Safety Plan 05/12/2023
                    </a>

                    <a
                        target='_blank'
                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/Richmond_TriCities_Regional_Intermodal_Strategies_Study_05132010.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'


                    >
                        2010 Intermodal Transportation Strategies Study
                    </a>

                    <a
                        target='_blank'
                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/BikewayPlan2003.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'

                    >
                        2003 Bikeways Plan

                    </a>
                </div>
            </div>


        </div>
    )
}

export default ReginalPlans
