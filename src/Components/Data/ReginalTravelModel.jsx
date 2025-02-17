import React from 'react'

function ReginalTravelModel() {
    return (
        <div className='p-4 bg-[#1e2a3a]'>
            <div>
                <h1 className='text-3xl font-bold'>Modeling</h1>
                <p className='py-4'>
                    For future traffic and land use projections, the NFRMPO uses two separate but related models: the 2010 Base Year Land Use Allocation Model (LUAM) and the 2015 Base Year Regional Travel Demand Model (RTDM). Both models forecast out to 2050 and can provide information for the following years: 2015, 2020, 2025, 2030, 2035, 2040, 2045, and 2050.
                </p>
                <p className='py-4'>The models were created using local input to estimate future growth in population, employment, travel patterns, and traffic volumes. Local agencies provided current land uses, future land uses, development data, traffic counts, and transportation projects. The models were reviewed by local agencies for each model’s base year and the 2050 forecast year to ensure reasonableness.</p>
                <p className='py-4'>The 2010 LUAM is built on the UrbanSim platform. The LUAM forecasts the location and timing of development and the resulting employment and household growth at the zonal level. The output information is then incorporated into the 2019 RTDM.</p>
            </div>

            <div className='py-4'>
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
            </div>

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
