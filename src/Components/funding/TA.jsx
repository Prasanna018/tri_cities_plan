import React from 'react'

function TA() {
    return (
        <div className='p-4 bg-[#f6f6f6] text-black'>
            <div>
                <h1 className='text-3xl font-bold'>Regional Surface Transportation Block Grant (RSTBG)</h1>
                <p className='py-4'>
                    The
                    {" "}
                    <a className='text-blue-500 hover:underline'
                        href='https://www.fhwa.dot.gov/fastact/factsheets/transportationalternativesfs.cfm '
                        target='_blank'
                    >


                        Transportation Alternatives Set-Aside
                    </a>
                    provides funding for programs and projects defined as transportation alternatives, including pedestrian facilities, bicycle facilities, recreational trails, safe routes to school, and infrastructure projects for improving non-driver access to public transportation.
                    <br>
                    </br>
                    TA Set-Aside is an allocation set-aside within the Surface Transportation Block Grant funding allocation. This is no longer an independent program as it has been in the past. Starting Fiscal Year 2018, Virginia’s TA Set-Aside application cycle is moving to a biannual cycle. More information can be found with

                    {" "}

                    <a className='text-blue-500 hover:underline
                    '
                        href='http://www.virginiadot.org/business/prenhancegrants.asp'
                        target='_blank'
                    >

                        VDOT’s Local Assistance Division – Transportation Alternatives.
                    </a>

                </p>

            </div>



        </div>
    )
}

export default TA
