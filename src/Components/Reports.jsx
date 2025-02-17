import React from 'react'

function Reports() {
    return (
        <div className='p-4 bg-[#1e2a3a]'>
            <div>
                <h1 className='text-3xl font-bold py-4'>
                    Reports
                </h1>
                <div className='py-2 flex flex-col h-[200px] '>

                    <a
                        target='_blank'


                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/01252017_Final_TCAMP_CMP.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'
                    >    2016 Congestion Management Process</a>


                    <a
                        target='_blank'

                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/Tri-Cities_SignedDraft_EA_ExecSummary2017.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'
                    >    2017 Tri-Cities Multimodal Station Environmental Assessment
                    </a>

                    <a
                        target='_blank'
                        href='https://www.craterpdc.org/environment/documents/Technical%20Document_071118.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'
                    >Appomattox River Trail / Virginia Capital Trail Connection Study

                    </a>

                    <a

                        target='_blank'
                        href='https://www.vdot.virginia.gov/business/operations_program.asp'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'

                    >  Intelligent Transportation System (ITS)
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Reports
