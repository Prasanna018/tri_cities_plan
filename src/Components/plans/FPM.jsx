import React from 'react'

function FPM() {
    return (
        <div className='p-4 bg-[#1e2a3a]'>

            <div className='pb-4'>
                <h1 className='text-3xl font-bold'>Performance Measures</h1>
                <p className='pt-6'>Federal regulations require Metropolitan Planning Organizations (MPOs) and State Departments of Transportation (DOTs) to implement a performance-based approach to transportation planning and programming. This approach enables MPOs and State DOTs to analyze data, assess past and present trends, and evaluate the effectiveness of transportation investments using federally mandated performance measures. The goal is to ensure continuous progress toward achieving national transportation objectives. The Federal Highway Administration defines transportation performance management as a strategic process that leverages system data to guide investment and policy decisions in support of national performance goals.</p>
            </div>

            <div py-6
            >
                <span className='text-xl'>National Performance Goals</span>

                <p className='py-2'><b>Safety</b> – to achieve a significant reduction in traffic fatalities and serious injuries on all public roads</p>

                <p className='py-2'><b>Infrastructure Condition</b> – to maintain the highway infrastructure asset system in a state of good repair</p>

                <p className='py-2'><b>System Reliability </b> – to improve the efficiency of the surface transportation systemrepair</p>

                <p className='py-2'><b>Freight Movement and Economic Vitality </b> – to improve the national freight network, strengthen the ability of rural communities to access national and international trade markets, and support regional economic development</p>

                <p className='py-2'><b>Environmental Sustainability </b> – to enhance the performance of the transportation system while protecting and enhancing the natural environment</p>

                <p className='py-2'><b>Reduced Project Delivery Delays </b>– to reduce project costs, promote jobs and the economy, and expedite the movement of people and goods by accelerating project completion through eliminating delays in the project development and delivery process, including reducing regulatory burdens and improving agencies’ work practices

                </p>
                <span className='py-4'>Performance Measures and Targets</span>
                <p className='py-4'>Working collectively, MPOs and State DOTs are required to establish performance targets for each applicable measure established by federal legislation. A measure is a statement of what is being assessed, and a target is a quantifiable level of performance or what you hope to achieve within an identified time period. The TCAMPO is required to set performance targets and report on the progress made toward achieving each target for the following key performance areas:</p>

                <div className=' flex flex-col'>

                    <p className='py-4'>
                        1. Safety
                        <br></br>
                        2. Pavement Conditions
                        <br></br>
                        3. Bridge Conditions
                        <br></br>
                        4. NHS Travel Time Reliability
                        <br></br>
                        5. Freight Reliability
                        <br></br>
                        6. Transit Asset Management
                        <br></br>
                        7. Transit Asset Management
                        <br></br>
                        8. Transit Safety
                        <br></br>
                    </p>
                    <span>

                        To explore data about these performance measures, visit our dashboard {" "} <a

                            href='https://ctps.shinyapps.io/pbpp-dashboard-r/'
                            target='_blank'
                            className='text-blue-500 hover:underline'> here.</a>
                    </span>
                </div>


            </div>

        </div >
    )
}

export default FPM
