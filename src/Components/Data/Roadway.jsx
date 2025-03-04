import React from 'react'

function Roadway() {
    return (
        <div className='p-4 bg-[#f6f6f6] text-black'>
            <div className='py-4'>
                <h1 className='font-bold text-3xl py-2'>Roadway Functional Classification</h1>

                <p>

                    Functional classification is a method of categorizing streets and highways into distinct systems based on their role within the broader local, state, and national transportation network. It defines how travel is guided through the roadway system by specifying each road or street's function in facilitating traffic flow. This hierarchical classification supports the development of a well-connected and continuous roadway network, ensuring logical organization and seamless mobility across the entire system.
                </p>

                <span>
                    To see current functional classification maps for the MPO, please visit VDOT's {" "}
                    <a
                        className='text-blue-500 hover:underline'
                        href='https://www.arcgis.com/home/webmap/viewer.html?webmap=3eca6c9adb6649c988d98734f85baddb'
                        target='_blank'
                    >
                        Functional Classification Maps webpage.
                    </a>
                </span>
            </div>




        </div>
    )
}

export default Roadway
