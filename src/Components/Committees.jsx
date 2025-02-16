import React from 'react'
import { members } from '../common/PolicyMembers'
function Committees() {
    return (
        <div className='p-2 space-y-4 bg-[#1e2a3a]
        '>

            <div>
                <span className='font-bold text-3xl'>Committees</span>
            </div>

            <div className='p-6'>


                <div className='pt-6 pb-6'>

                    <span className='text-slate-300 text-xl'>Policy Committee
                    </span>

                </div>

                <div className='w-full flex md:flex-row flex-col gap-x-8 border-2 border-white p-4 rounded-2xl'>

                    <div className='flex flex-col space-y-4'>
                        <button className='md:w-[150px] p-2 w-full bg-orange-900 rounded-2xl'>
                            Upcoming AQAC Meeting

                        </button>
                        <button className='md:w-[150px] p-2 w-full bg-orange-900 rounded-2xl'>
                            Past Meeting Materials
                        </button>


                    </div>

                    <div className='pt-2'>
                        <span className='text-xl py-4'>Members</span>
                        <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-2'>
                            {members.map((member, index) => {
                                return (<div key={member.id}>
                                    <span>
                                        {member.name}
                                    </span>



                                </div>)
                            })

                            }

                        </div>

                    </div>

                </div>
            </div>

            {/* ----------------------- */}


            <div className='p-6'>



                <div className='pt-6 pb-6'>

                    <span className='text-slate-300 text-xl'>Technical Advisory Committee
                    </span>

                </div>

                <div className='w-full flex md:flex-row flex-col gap-x-8 border-2 border-white p-4 rounded-2xl'>

                    <div className='flex flex-col space-y-4'>
                        <button className='md:w-[150px] p-2 w-full bg-orange-900 rounded-2xl'>
                            Upcoming AQAC Meeting

                        </button>
                        <button className='md:w-[150px] p-2 w-full bg-orange-900 rounded-2xl'>
                            Past Meeting Materials
                        </button>


                    </div>

                    <div className='pt-2'>
                        <span className='text-xl py-4'>Members</span>
                        <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-2'>
                            {members.map((member, index) => {
                                return (<div key={member.id}>
                                    <span>
                                        {member.name}
                                    </span>



                                </div>)
                            })

                            }

                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Committees
