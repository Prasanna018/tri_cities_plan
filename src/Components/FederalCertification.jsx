import React from 'react'

function FederalCertification() {
    return (
        <div className='p-2  bg-[#f6f6f6] text-black
        '>

            <div className='py-4'>
                <span className='font-bold text-3xl'>Federal Certification</span>
            </div>
            <p className=' text-black '>

                Every four years the Federal Highway Administration and the Federal Transit Administration review the planning processes of TCAMPO to ensure consistency with federal requirements.  During this certification review, planning processes, public outreach and other items are reviewed.
            </p>

            <div className='flex flex-col py-2'>
                <span className='text-black text-lg'>1. The most recent Federal Certification Review was conducted in 2022:
                </span>
                <a
                    target='_blank'
                    href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/FINAL_DRAFT_2021_TCAMPO_Certification_Report_04.22.22.pdf'
                    className='text-blue-600 pl-4'>2022 Certification Review Report</a>
            </div>
            <div className='flex flex-col pb-4'>
                <span className='text-black text-lg'>2. Similarly, the MPO's annual self certification is published:

                </span>
                <a
                    target='_blank'
                    href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/2023_TCAMPO_SignedSelfCertificationResolutionWithQuestionnaire.pdf'
                    className='text-blue-600 pl-4'>2023 TCAMPO Self Certification
                </a>
            </div>


        </div>
    )
}

export default FederalCertification
