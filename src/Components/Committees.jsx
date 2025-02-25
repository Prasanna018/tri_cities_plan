import React, { useState, useTransition } from 'react'
import { members } from '../common/PolicyMembers'
import { Policy_Committee_Meetings_Past } from '../common/CommitteePopup';
import { Technical_Meeting_past } from '../common/CommitteePopup';
import { Truck } from 'lucide-react';
function Committees() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)

    return (
        <div className='p-2 bg-[#f6f6f6] text-black
        '>

            <div className='py-4'>
                <span className='font-bold text-3xl'>Committees</span>
            </div>

            <div className='py-2'>


                <div className='pb-2'>

                    <span className='text-black text-xl font-bold'>Policy Committee
                    </span>

                </div>

                <div className='w-full flex md:flex-row flex-col gap-x-8 border-2 border-black p-4 rounded-2xl'>

                    <div className='flex flex-col space-y-4'>
                        <button className='md:w-[150px] p-2 w-full  bg-orange-700 cursor-pointer rounded-2xl hover:bg-orange-900 duration-300'
                            onClick={() => setIsOpen1(true)}
                        >
                            Upcoming  Meeting

                        </button>
                        <button className='md:w-[150px] cursor-pointer p-2 w-full bg-orange-700 rounded-2xl hover:bg-orange-900 duration-300 '
                            onClick={() => setIsOpen2(true)}
                        >
                            Past <br></br>Meetings
                        </button>


                    </div>

                    <div className='pt-2'>
                        <span className='text-xl py-4'>Members</span>
                        <div className='grid lg:grid-cols-5  md:grid-cols-4 grid-cols-3 gap-2'>
                            {members.map((member, index) => {
                                return (<div key={member.id}>
                                    <span className='mx-1 my-1.5' >
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


            <div className=''>



                <div className='py-2'>

                    <span className='text-black text-xl font-bold'>Technical Advisory Committee
                    </span>

                </div>

                <div className='w-full flex md:flex-row flex-col gap-x-8 border-2 border-black p-4 rounded-2xl'>

                    <div className='flex flex-col space-y-4'>
                        <button className='md:w-[150px] p-2 w-full cursor-pointer bg-orange-700 hover:bg-orange-900 duration-300 rounded-2xl'
                            onClick={() => setIsOpen3(true)}
                        >
                            Upcoming  Meetings

                        </button>
                        <button className='md:w-[150px] p-2 w-full cursor-pointer bg-orange-700 rounded-2xl hover:bg-orange-900 duration-300'
                            onClick={() => setIsOpen4(true)}
                        >
                            Past<br></br> Meetings
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
            {/* Modal */}
            {isOpen1 && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[50%] text-black shadow-lg border-2 border-gray-300">

                        <div className='py-2'>
                            <h2 className="md:text-2xl text-xl font-bold mb-4">Policy Committee Meetings (Upcoming)
                            </h2>
                            <a
                                target='_blank'
                                className='underline'
                                href='https://craterpdc.org/wp-content/uploads/2025/02/02-13-25-PC-agenda-Draft.pdf'>March 13, 2025</a>

                        </div>



                        <button
                            onClick={() => setIsOpen1(false)}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {isOpen2 && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[50%] text-black shadow-lg border-2 border-gray-300">

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Policy Committee Meetings (Past)

                            </h2>
                            {
                                Policy_Committee_Meetings_Past.map(({ id, name, to }) => {
                                    return <a

                                        key={id}
                                        target='_blank'
                                        className='underline text-sm flex p-1'
                                        href={to}>{name}</a>
                                })
                            }
                            <button
                                onClick={() => setIsOpen2(false)}
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>

                </div>
            )}

            {isOpen3 && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[50%] text-black shadow-lg border-2 border-gray-300">

                        <div className='flex flex-col'>
                            <h2 className="text-2xl font-bold mb-4">Policy Committee Meetings (Past)

                            </h2>
                            <a href='https://craterpdc.org/wp-content/uploads/2025/01/02-07-25-TAC-Plan2050-Committee-Agenda-Packet.pdf' className='underline' target='_blank' >March 7, 2025 TAC/PLAN2050 Committee
                            </a>
                            <button
                                onClick={() => setIsOpen3(false)}
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 w-fit"
                            >
                                Close
                            </button>
                        </div>
                    </div>

                </div>
            )
            }


            {isOpen4 && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-2xl w-[90%] md:w-[50%] text-black shadow-lg border-2 border-gray-300">

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Policy Committee Meetings (Past)

                            </h2>
                            {
                                Technical_Meeting_past.map(({ id, name, to }) => {
                                    return <a

                                        key={id}
                                        target='_blank'
                                        className='underline text-sm flex p-1'
                                        href={to}>{name}</a>
                                })
                            }
                            <button
                                onClick={() => setIsOpen4(false)}
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>

                </div>
            )}




        </div >
    )
}

export default Committees
