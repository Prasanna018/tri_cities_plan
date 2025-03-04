import React from 'react'

function Title() {
    return (
        <div className='p-2 bg-[#f6f6f6] text-black'>
            <div className='py-4'>
                <h1 className='text-3xl font-bold'>Title VI</h1>
                <p className='py-4   '>

                    Title VI of the Civil Rights of 1964 and related statutes prohibiting discrimination in federally assisted programs require that no person in the United States of America shall, on the grounds of race, color, or national origin be excluded from the participation in, be denied the benefits of, or be otherwise subjected to discrimination under any program or activity receiving federal assistance.

                    The Crater Planning District Commission (including the Tri-Cities Area MPO (TCAMPO)) complies fully with Title VI of the Civil Rights Act of 1964 and related statutes and regulations in all programs and activities.

                    The TCAMPO developed a Title VI Plan, and the Title VI coordinator for Crater PDC is responsible for ensuring the plan’s implementation, for coordinating the overall administration of the Title VI Plan and assurances and overseeing compliance with applicable non-discrimination authorities in each of the metropolitan transportation planning and programming areas. TCAMPO has also adopted a public participation plan in conjunction with the Title VI Plan.




                </p>

            </div>

            <div className='py-4'>
                <h1 className='text-3xl font-bold'>Equity Analysis (Title VI and Environmental Justice Populations)</h1>
                <p className='py-4'>
                    The MPO created the Indicators for Potential Disadvantage (IPD) to help staff, member governments, planning partners, and the general public consider Civil Rights (Title VI) concerns when carrying out planning activities, project development, and programming. The IPD analysis identifies populations of interest under Title VI, other nondiscrimination mandates, and federal guidance using U.S. Census data, and maps these populations in each of the block groups in the region via GIS. Each population group is an "indicator" in the analysis. (Last updated December 2025).
                </p>

            </div>

            <div className='py-4'>
                <h1 className='text-3xl font-bold'>Resources</h1>
                <div className='py-4 flex flex-col pl-2'>
                    <span>
                        • {" "}
                        <a href='https://craterpdc.org/wp-content/uploads/2024/11/Signed-TCAMPO-1050.2A-Assurance-10-25-24.pdf' target='_blank' className='text-blue-500 hover:underline'>Signed TCAMPO 1050.2A Assurance 10-25-24</a>

                    </span>
                    <span>
                        • {" "}

                        <a href='https://craterpdc.org/DocumentLibrary/Transportation/Documents/Discrimination_Complaint_Procedures_Form_09092020.pdf' target='_blank' className='text-blue-500 hover:underline'>Title VI Discrimination Complaint Procedures</a>

                    </span>

                    <span>
                        • {" "}
                        <a href='https://craterpdc.org/wp-content/uploads/2024/11/Final-Crater-PDC-Title-VI-Plan-September-2024-with-1050.2A-Assurances.pdf' target='_blank' className='text-blue-500 hover:underline'>Final Crater PDC Title VI Plan September 2024 with 1050.2A Assurances</a>

                    </span>
                    <span>• {" "}

                        <a href='https://craterpdc.org/wp-content/uploads/2024/11/TCAMPO-Public-Participation-Plan-Update-09-12-24.pdf' target='_blank' className='text-blue-500 hover:underline'>TCAMPO Public Participation Plan Update (09-12-24)</a>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Title
