import React from 'react'

function FFA() {
    return (
        <div className='p-4 bg-[#f6f6f6] text-black'>
            <div>
                <h1 className='text-3xl font-bold'>Federal Funding Authorizations</h1>
                <p className='py-2'>
                    MPOs are required to post for public review a listing of the transportation projects that were authorized for Federal funds during the past year.
                </p>
                <a
                    target='_blank'
                    href='https://nmcdn.io/e186d21f8c7946a19faed23c3da2f0da/8bfec28a290449a7b10eb1fee3a0e264/files/funding/transportation-improvement-program/federal-funding-authorizations/CAMPO-Authorizations-FFY-2024.pdf'
                    className='text-blue-500 hover:underline cursor-pointer'
                >-- Federal Funding Authorizations for Federal Fiscal Year 2025 (FFY 2025)</a>
                <br></br>
                <a
                    target='_blank'
                    href='https://nmcdn.io/e186d21f8c7946a19faed23c3da2f0da/8bfec28a290449a7b10eb1fee3a0e264/files/funding/transportation-improvement-program/federal-funding-authorizations/CAMPO-Transit-Authorizations-FFY-2024.pdf'
                    className='hover:underline text-blue-500 cursor-pointer'
                >
                    -- Federal Transit Funding Authorizations for Federal Fiscal Year 2025 (FFY 2025)
                </a>
            </div>

            <div className='py-4'>
                <p>In the link above, each record in the list identifies the date of the authorization, amount and type of funds authorized (State or Federal), and the project number. While the law specifically addresses Federal funds, authorizations using solely State funds are also shown in this list. There were some instances where all of the funds that were previously authorized were not needed. In these cases NCDOT removed a portion of the funding authorization and this negative value is denoted by parentheses.

                    <br></br>
                    Please note that the list includes all project authorizations within the counties that are partially or fully within the Capital Area MPO area (Wake, Chatham, Franklin, Granville, Harnett, and Johnston Counties). Therefore, some of the projects on the list may not fall within the MPO’s jurisdiction.</p>
            </div>
            <p className='py-3'>
                Visit the {" "}
                <a
                    href='http://www.campo-nc.us/funding/transportation-improvement-program'
                    target='_blank'
                    className='text-blue-500 hover:underline cursor-pointer'
                >

                    Transportation Improvement Program (TIP)
                </a>
                {" "}

                webpage for additional information on individual projects.
            </p>

        </div>
    )
}

export default FFA
