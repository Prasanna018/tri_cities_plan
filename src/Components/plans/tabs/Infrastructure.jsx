import React from 'react'

function Infrastructure() {
    return (
        <div className='w-full'>
            <div className='py-4'>
                <h1 className='text-2xl font-bold'>  National Highway System (NHS) Pavement and Bridge Condition</h1>
                <p className='py-2 text-start'>On October 22, 2024, the Policy Committee elected to support the 2025 Statewide Pavement
                    and Bridge Targets. Please see the table below for the set targets.</p>
            </div>

            <div className="w-full max-w-4xl  bg-transparent py-4">
                <table className="w-full border-collapse">
                    {/* Header Row */}
                    <thead>
                        <tr>
                            <th rowSpan={2} className="border border-black bg-slate-400 p-4 text-left w-1/4">
                                Pavement and Bridge Performance Measures
                            </th>
                            <th colSpan={2} className="border border-black bg-slate-400 p-4 text-center w-1/2">
                                2-Year NHS Targets<br />
                                (1/1/2022 - 12/31/2023)
                            </th>
                            <th colSpan={2} className="border border-black bg-slate-400 p-4 text-center">
                                4-Year NHS Targets<br />
                                (1/1/2022 - 12/31/2025)
                            </th>
                        </tr>
                        <tr>
                            <th className="border border-black bg-slate-400 p-4 text-center">Good</th>
                            <th className="border border-black bg-slate-400 p-4 text-center">Poor</th>
                            <th className="border border-black bg-slate-400 p-4 text-center">Good</th>
                            <th className="border border-black bg-slate-400 p-4 text-center">Poor</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {/* Pavement Section */}
                        <tr>
                            <td colSpan={5} className="border border-black p-4 font-medium">
                                Pavement on the NHS
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black p-4 pl-8">Interstate</td>
                            <td className="border border-black p-4 text-center">47.2%</td>
                            <td className="border border-black p-4 text-center">1.9%</td>
                            <td className="border border-black p-4 text-center">49.2%</td>
                            <td className="border border-black p-4 text-center">1.7%</td>
                        </tr>
                        <tr>
                            <td className="border border-black p-4 pl-8">Non-Interstate</td>
                            <td className="border border-black p-4 text-center">21.7%</td>
                            <td className="border border-black p-4 text-center">10.5%</td>
                            <td className="border border-black p-4 text-center">28.2%</td>
                            <td className="border border-black p-4 text-center">9.0%</td>
                        </tr>

                        {/* Bridges Section */}
                        <tr>
                            <td className="border border-black p-4 font-medium">Bridges on the NHS</td>
                            <td className="border border-black p-4 text-center">49.1%</td>
                            <td className="border border-black p-4 text-center">5.9%</td>
                            <td className="border border-black p-4 text-center">47.3%</td>
                            <td className="border border-black p-4 text-center">4.4%</td>
                        </tr>
                    </tbody>
                </table>
            </div>





        </div>
    )
}

export default Infrastructure
