import React from 'react'
import logo from '../assets/logo.png'
import bg1 from '../assets/bg1.jpg'
import { CalendarDays } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { boxes } from '../common/HomeBoxes'
import { videos } from '../common/HomeVideos'
import { Upcoming_Events } from '../common/upcomingEvents';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();



    return (
        <div className='pt-8 flex bg-white justify-center'>

            <div className='w-3/4'>

                {/* home logo */}
                <div className='w-full flex items-center md:justify-start justify-center gap-x-4'>
                    <img
                        className=' h-[100px]'

                        src={logo}
                    ></img>
                    <span className='lg:text-3xl md:text-2xl text-2xl lg:w-[400px]  font-bold'>
                        Tri-Cities Area Metropolitan Planning Organization (TCAMPO)
                    </span>
                </div>

                <div className='pt-10 pb-4 '>
                    <img


                        className=' rounded-2xl'
                        src={bg1}
                    >
                    </img>

                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-22 gap-y-20 py-20 w-full">

                    {boxes.map((box) => (
                        <div key={box.id} className="relative w-80 h-110 p-6 bg-[#bde0a4] text-center ">
                            {/* Top Label */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-2xl  bg-[#1e6579] text-white px-4 py-1  font-semibold">
                                <span className='text-xl p-10 relative bottom-1'>

                                    {box.title}

                                </span>
                                <div className="absolute -left-2 -top-2  bottom-2 right-2 inset-0 border-2 border-black -z-10
                                
                                ">

                                </div>
                            </div>

                            {/* Main Content */}
                            {/* <p className="text-gray-700 text-sm mt-6">{box.year}</p> */}
                            <h2 className="text-2xl font-bold text-[#609293] leading-tight text-start h-[90px]">
                                {/* {box.mainTitle?.split(" ").map((word, index) => (
                                    <span key={index}>{word} <br /></span>
                                ))} */}
                                {box.mainTitle}
                            </h2>
                            <p className="text-gray-700 text-start text-sm mt-2 h-[220px]">
                                {box.des}
                            </p>

                            {/* Button */}
                            <div className="absolute -bottom-5 -right-20
                             -translate-x-1/2 bg-[#415971] px-6 py-2 w-64 ">
                                <a target="_blank" >

                                    <button
                                        onClick={() => {
                                            navigate(box.link)

                                        }}

                                        className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 py-2 px-4 text-sm font-semibold shadow-md cursor-pointer">
                                        View More

                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>



                <div className='pb-4 pt-10 flex flex-col'>
                    <h1 className='text-black text-4xl pb-6'>Upcoming Events</h1>

                    <hr></hr>


                    <div className='pt-8'>
                        {
                            Upcoming_Events.map((event, index) => {

                                return (
                                    <div
                                        className=''
                                        key={index}>
                                        <a className='text-blue-600 text-sm py-2'>{event.link}</a>
                                        <div className='flex py-2 items-center gap-x-4'>
                                            <CalendarDays color='black' size={30}></CalendarDays>
                                            <p className='text-black'>{event.date}</p>
                                        </div>

                                        <div className='flex py-2 items-center gap-x-4'>
                                            <MapPin color='black' size={30}></MapPin>
                                            <span className='text-black'>{event.location}</span>
                                        </div>



                                    </div>
                                )

                            })
                        }


                    </div>
                </div>







            </div>
        </div>
    )
}

export default Home
