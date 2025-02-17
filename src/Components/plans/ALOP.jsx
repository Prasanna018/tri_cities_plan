import React from 'react'

function ALOP() {
    return (
        <div className='p-4 bg-[#1e2a3a]'>

            <div className='py-4'>
                <h1 className='text-3xl font-bold'>Annual Listing of Obligated Projects</h1>
                <p className='py-4'>The annual listing of obligated projects is a record for tracking the progress of projects receiving federal transportation funds. This listing is updated annually and is intended to increase public awareness of federal spending on transportation projects in the Jackson MPO’s planning area. The Infrastructure Investment and Jobs Act (IIJA), signed into law by the President in November 2021, requires that:</p>
            </div>

            <div className='py-4'>
                <p>“An annual listing of projects, including investments in pedestrian walkways and bicycle transportation facilities, for which Federal funds have been obligated in the preceding year shall be published or otherwise made available by the cooperative effort of the State, transit operator, and metropolitan planning organization for public review.” 23 CFR 134(j)(7)(B)</p>


            </div>

            <p className='py-5'>Click on the link below to view the most recent Annual Listing of Obligated Projects.</p>

            <a
                href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/TCAMPO_2050_SE_20230713.pdf'
                target='_blank'
                className='hover:underline text-blue-500 py-2'

            >2024 Annual Listing of Obligated Projects.pdf</a>

        </div>
    )
}

export default ALOP
