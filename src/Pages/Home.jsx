import React from 'react'
import logo from '../assets/logo.png'
import bg1 from '../assets/bg1.jpg'
import { CalendarDays } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { boxes } from '../common/HomeBoxes'
import { videos } from '../common/HomeVideos'
import { Upcoming_Events } from '../common/upcomingEvents';

function Home() {
    return (
        <div className='pt-8 flex justify-center'>

            <div className='w-3/4'>

                {/* home logo */}
                <div className='w-full flex items-center md:justify-start justify-center gap-x-4'>
                    <img
                        className=' h-[100px]'

                        src={logo}
                    ></img>
                    <span className='lg:text-3xl md:text-2xl text-2xl lg:w-[210px]  font-bold'>
                        Tri Cities Metropolitan Plan
                    </span>
                </div>

                <div className='pt-10 pb-4 '>
                    <img


                        className=' rounded-2xl'
                        src={bg1}
                    >
                    </img>

                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 w-full">
                    {boxes.map((box, index) => (
                        <div key={index} className="border rounded-lg p-4 text-center shadow-lg">
                            <img src={box.img} alt={box.text} className="w-full h-[15rem] object-contain mb-2 rounded" />
                            <p className="text-sm text-gray-400 mb-2 py-4">{box.text}</p>
                            <a href={box.link} className="text-blue-500 hover:underline">
                                View More
                            </a>
                        </div>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 grid-cols-1 w-full gap-4 p-4 pt-10">
                    {videos.map((video, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-lg">
                            <iframe
                                className="w-full h-100 rounded"
                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p className="mt-2 text-lg font-semibold text-center">{video.title}</p>
                        </div>
                    ))}
                </div>

                <div className='pb-4 pt-10 flex flex-col'>
                    <h1 className='text-gray-200 text-4xl pb-6'>Upcoming Events</h1>

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
                                            <CalendarDays size={30}></CalendarDays>
                                            <p>{event.date}</p>
                                        </div>

                                        <div className='flex py-2 items-center gap-x-4'>
                                            <MapPin size={30}></MapPin>
                                            <span>{event.location}</span>
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
