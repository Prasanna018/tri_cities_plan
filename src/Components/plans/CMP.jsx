import React from 'react'

function CMP() {
    return (
        <div className='p-4 bg-[#1e2a3a]'>

            <div>
                <h1 className='text-3xl font-bold py-4'>Congestion Management Process
                </h1>
                <p className='pt-4'>
                    Traffic congestion impacts the mobility of people and goods in Southern Virginia, which affects quality of life and economic growth in the region. The TCAMPO maintains the federally required Congestion Management Process (CMP) to improve transportation system reliability, safety, and performance.
                </p>

                <h1 className='text-2xl font-black pt-3'>2025 CMP</h1>
                <p className='py-4'>The 2025 CMP identifies an objectives-driven, performance-based process to manage regional transportation congestion. The CMP includes congestion-related goals, objectives, and performance measures. In 2018, congestion cost Americans $87 Billion and an average of 97 hours. Congestion also wastes billions of gallons of fuel, releasing billions of pounds of carbon dioxide into the atmosphere, annually. The CMP seeks to manage congestion on the Regionally Significant Corridors (RSCs) through a variety of region- and corridor-specific strategies.</p>


                <div className='flex flex-col space-y-2.5'>

                    <span>Full Document: {" "}<a
                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/01252017_Final_TCAMP_CMP.pdf'
                        target='_blank'
                        className='hover:underline cursor-pointer text-blue-500'>2025 CMP</a></span>

                    <span>Staff contact: {" "}<a
                        href='zmumuni@craterpdc.org'
                        target='_blank'
                        className='hover:underline cursor-pointer text-blue-500'>zmumuni@craterpdc.org</a></span>

                    <span>2016 CMP Report</span>

                    <span>Full Document:{" "}<a
                        href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/01252017_Final_TCAMP_CMP.pdf'
                        target='_blank'
                        className='hover:underline cursor-pointer text-blue-500'>2016 CMP</a></span>

                </div>

            </div>

        </div>

    )
}

export default CMP
