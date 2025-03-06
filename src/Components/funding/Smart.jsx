import React from 'react'

function Smart() {
    return (
        <div className='p-4 bg-[#f6f6f6] text-black'>
            <div className='py-2 '>
                <h1 className='text-3xl font-bold'>CMAQ Program</h1>
                <p className='py-4'>
                    The {" "}
                    <a
                        href='https://www.fhwa.dot.gov/fastact/factsheets/cmaqfs.cfm'
                        target='_blank'
                        className='text-blue-500 hover:underline cursor-pointer'
                    >


                        Congestion Mitigation and Air Quality

                    </a> {" "}
                    program provides federal funding for transportation projects and programs that help improve air quality and reduce traffic congestion. The program was established by the Intermodal Surface Transportation Efficiency Act of 1991 and continues to fund projects located in areas that don’t currently – or previously didn’t – meet the National Ambient Air Quality Standards for ozone, carbon monoxide, or particulate matter.

                    Portions of the Richmond region were previously nonattainment areas, but now the region’s air quality is in compliance. Through the RRTPO's Ozone Advance agreement with the Virginia Department of Environmental Quality (DEQ) the RRTPO continues to qualify for CMAQ funds. The federal government provides CMAQ funds to the Commonwealth of Virginia, which voluntarily suballocates a portion for projects and programs selected by regional metropolitan planning organizations.


                </p>
            </div>

        </div>
    )
}

export default Smart
