import React from 'react'

const data = [
    {
        entity: '"The Bus"',
        rollingStock: '63%',
        equipment: '10%',
        facilities: '0%'
    },
    {
        entity: 'YARTS',
        rollingStock: '10%',
        equipment: '0%',
        facilities: '0%'
    },
    {
        entity: 'Regional Target',
        rollingStock: '56%',
        equipment: '10%',
        facilities: '0%'
    }
];

function TAM() {
    return (
        <div className='w-full p-2'>
            <div className='py-4'>
                <h1 className='text-2xl font-bold'> Transit Asset Managements (TAM) Targets</h1>

            </div>
            {/*  */}

            <div className="w-full max-w-4xl py-4">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-black bg-slate-400 p-2 text-left">
                                Reporting Entity
                            </th>
                            <th className="border border-black bg-slate-400 p-2">
                                Rolling Stock
                                <div className="text-sm font-normal">
                                    % of revenue vehicles &gt; ULB
                                </div>
                            </th>
                            <th className="border border-black bg-slate-400 p-2">
                                Equipment
                                <div className="text-sm font-normal">
                                    % of non-revenue vehicles &gt; ULB
                                </div>
                            </th>
                            <th className="border border-black bg-slate-400 p-2">
                                Facilities
                                <div className="text-sm font-normal">
                                    % of facilities &lt; TERM scale 3
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-400 p-2">{row.entity}</td>
                                <td className="border border-gray-400 p-2 text-center">{row.rollingStock}</td>
                                <td className="border border-gray-400 p-2 text-center">{row.equipment}</td>
                                <td className="border border-gray-400 p-2 text-center">{row.facilities}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default TAM
