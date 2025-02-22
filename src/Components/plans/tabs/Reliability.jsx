import React from 'react'

function Reliability() {
    return (
        <div className='w-full'>
            <div className='py-4'>
                <h1 className='text-2xl font-bold'> NHS Performance, Interstate System Freight Movement, and CMAQ Program</h1>
                <p className='py-2 text-start'>On October 22, 2024, the Policy Committee elected to support the 2025 Statewide PM 3
                    targets. Please see the table below for the set targets.</p>
            </div>
            {/*  */}

            <div className="w-full max-w-5xl mx-auto bg-transparent py-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border-4 bg-slate-600 border-white p-4 text-left">Focus Areas</th>
                            <th className="border-4 bg-slate-600 border-white p-4 text-left">Performance Measure</th>
                            <th className="border-4 bg-slate-600 border-white p-4 text-center">2-Year Target</th>
                            <th className="border-4 bg-slate-600 border-white p-4 text-center">4-Year Target</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* NHS Performance Section */}
                        <tr>
                            <td rowSpan={2} className="border-4 border-white p-4 align-top font-medium">NHS Performance</td>
                            <td className="border-4 border-white p-4">
                                Percent of Reliable Person-Miles Traveled on the Interstate
                            </td>
                            <td className="border-4 border-white p-4 text-center">74.30%</td>
                            <td className="border-4 border-white p-4 text-center">74.80%</td>
                        </tr>
                        <tr>
                            <td className="border-4 border-white p-4">
                                Percent of Reliable Person-Miles Traveled on the Non-Interstate NHS
                            </td>
                            <td className="border-4 border-white p-4 text-center">84.20%</td>
                            <td className="border-4 border-white p-4 text-center">84.70%</td>
                        </tr>

                        {/* Interstate Freight Movement */}
                        <tr>
                            <td rowSpan={1} className="border-4 border-white p-4 font-medium">
                                Interstate Freight Movement
                            </td>
                            <td className="border-4 border-white p-4">
                                Percentage of Interstate System Mileage Providing Reliable Truck Travel Time (Truck Travel Time Reliability Index)
                            </td>
                            <td className="border-4 border-white p-4 text-center">1.6</td>
                            <td className="border-4 border-white p-4 text-center">1.6</td>
                        </tr>

                        {/* CMAQ Program Performance */}
                        <tr>
                            <td rowSpan={7} className="border-4 border-white p-4 align-top font-medium">
                                CMAQ Program Performance
                            </td>
                            <td className="border-4 border-white p-4">
                                Annual hours of peak-hour excessive delay per capita
                            </td>
                            <td className="border-4 border-white p-4 text-center">8.0</td>
                            <td className="border-4 border-white p-4 text-center">8.0</td>
                        </tr>
                        <tr>
                            <td className="border-4 border-white p-4">
                                Percent of non-single occupancy vehicle (SOV) travel
                            </td>
                            <td className="border-4 border-white p-4 text-center">23.60</td>
                            <td className="border-4 border-white p-4 text-center">23.60</td>
                        </tr>
                        <tr>
                            <td className="border-4 border-white p-4">
                                Total emissions reduction by criteria pollutant (PM10, PM2.5, Ozone, CO)
                            </td>
                            <td colSpan={2} className="border-4 border-white"></td>
                        </tr>
                        <tr>
                            <td className="border-4 border-white p-4 pl-8">VOC (kg/day)</td>
                            <td className="border-4 border-white p-4 text-center">2,862.00</td>
                            <td className="border-4 border-white p-4 text-center">5,724.00</td>
                        </tr>
                        <tr>
                            <td className="border-4 border-white p-4 pl-8">CO (kg/day)</td>
                            <td className="border-4 border-white p-4 text-center">12,798.00</td>
                            <td className="border-4 border-white p-4 text-center">25,596.00</td>
                        </tr>
                        <tr>
                            <td className="border-4 border-white p-4 pl-8">NOx (kg/day)</td>
                            <td className="border-4 border-white p-4 text-center">4,317.00</td>
                            <td className="border-4 border-white p-4 text-center">8,635.00</td>
                        </tr>
                        <tr>
                            <td className="border-4 border-white p-4 pl-8">PM10 (kg/day)</td>
                            <td className="border-4 border-white p-4 text-center">2,152.00</td>
                            <td className="border-4 border-white p-4 text-center">4,305.00</td>
                        </tr>
                        <tr>
                            <td className="border-4 border-white p-4"></td>
                            <td className="border-4 border-white p-4 pl-8">PM2.5 (kg/day)</td>
                            <td className="border-4 border-white p-4 text-center">1,830.00</td>
                            <td className="border-4 border-white p-4 text-center">3,659.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Reliability
