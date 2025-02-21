import React from 'react'

function CorridorPlans() {
    return (
        <div className='p-4 bg-[#1e2a3a]'>
            <div>
                <h1 className='text-3xl font-bold py-4'>
                    Corridor Plans
                </h1>
                <div className='py-2 flex flex-col h-[200px]'>

                    <span className='px-3 py-2 '>•


                        <a
                            target='_blank'


                            href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/13736.201_I-95_I-85_Interchange_Feasibility_Study_FINAL_29Apr15.pdf'
                            className='text-blue-500 hover:underline p-2 cursor-pointer'
                        > I-85/95 Interchange Feasibility Study (2015)</a>

                    </span>


                    <span className='px-3 py-2'>•
                        <a
                            target='_blank'

                            href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/Final%20Report_RSA_95_85_wAppendix.pdf'
                            className='text-blue-500 hover:underline p-2 cursor-pointer'
                        > I-95/85 RSA</a>

                    </span>

                    <span className='px-3 py-2'>• <a
                        target='_blank'
                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/Fort_Lee_TrafficStudy_Final_26Jan07.pdf'
                        className='text-blue-500 hover:underline p-2 cursor-pointer'
                    > Fort Lee (now Fort Gregg-Adams) Expansion Traffic Study (2007)
                    </a></span>


                </div>
            </div>


        </div>
    )
}

export default CorridorPlans
