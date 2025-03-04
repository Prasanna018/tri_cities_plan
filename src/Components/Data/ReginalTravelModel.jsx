import React from 'react'

function ReginalTravelModel() {
    return (
        <div className='p-4 bg-[#f6f6f6] text-black'>
            <div>
                <h1 className='text-3xl font-bold'>Modeling</h1>
                <p className='py-4'>
                    The MPO and its stakeholders utilize a Regional Travel Demand Model to project traffic patterns and travel behavior across the region. The model primarily supports the Metropolitan Transportation Plan (MTP) by evaluating proposed roadway and transit projects, assessing potential impacts of development proposals, and aiding in various regional, subarea, and corridor studies. The latest version is calibrated to a 2017 base year, with future year projections extending to 2050. It also includes interim year datasets representing multiple intermediate time horizons.
                </p>

            </div>

            {/* <div className='py-4'>
                <span>The 2019 RTDM uses the four-step model to estimate travel patterns:</span>

                <p className='pl-4 py-4'>
                    1. Trip generation predicts the number of trips expected to originate or be destined for each traffic analysis zone;
                    <br></br>
                    2. Trip distribution estimates the number of trips to be taken between each origin and destination;
                    <br></br>
                    3. Mode choice estimates how people will travel, such as by bicycle, transit, or by auto; and
                    <br></br>
                    4. Route assignment details the route traffic will take between zones.
                    <br></br>
                </p>
            </div> */}

            <div className='py-4 flex flex-col space-y-3'>
                <h1 className='py-2 text-3xl font-bold'>Model Documentation</h1>
                <a
                    target='_blank'
                    href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/TCAMPO_2050_SE_20230713.pdf'
                    className='text-blue-500 hover:underline cursor-pointer'
                >2017 and 2050 TCAMPO Model Forecasts</a>
                <a
                    target='_blank'
                    className='text-blue-500 hover:underline cursor-pointer'
                    href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/TCAMPO_2050_SE_20230713.pdf'
                >Model Documentation</a>
            </div>

        </div>
    )
}

export default ReginalTravelModel
