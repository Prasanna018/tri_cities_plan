import React from 'react'

const data = [
    {
        mode: 'Bus Transit',
        fatalities: '0',
        fatalitiesPerVRM: '0',
        injuries: '2',
        injuriesPerVRM: '0.04',
        safetyEvents: '8',
        safetyEventsPerVRM: '1.5',
        systemReliability: '57,258'
    },
    {
        mode: 'ADA / Paratransit',
        fatalities: '0',
        fatalitiesPerVRM: '0',
        injuries: '1',
        injuriesPerVRM: '0.1',
        safetyEvents: '2',
        safetyEventsPerVRM: '0.4',
        systemReliability: '71,118'
    }
];

function Transit_Safety() {
    return (
        <div>

            <div className='py-4'>
                <h1 className='text-2xl font-bold'> Transit Safety</h1>

            </div>

            <div className="w-full max-w-4xl overflow-x-auto py-4">
                <table className="w-full border-collapse bg-transparent">
                    <thead>
                        <tr className="bg-slate-400">
                            <th className="border border-black p-2 text-left">Mode of Service</th>
                            <th className="border border-black p-2 text-center">Fatalities</th>
                            <th className="border border-black p-2 text-center">
                                Fatalities (per 10 million VRM)
                            </th>
                            <th className="border border-black p-2 text-center">Injuries</th>
                            <th className="border border-black p-2 text-center">
                                Injuries (per 10 million VRM)
                            </th>
                            <th className="border border-black p-2 text-center">
                                Safety events
                            </th>
                            <th className="border border-black p-2 text-center">
                                Safety events (per 10 million VRM)
                            </th>
                            <th className="border border-black p-2 text-center">
                                System Reliability
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-black p-2">{row.mode}</td>
                                <td className="border border-black p-2 text-center">{row.fatalities}</td>
                                <td className="border border-black p-2 text-center">{row.fatalitiesPerVRM}</td>
                                <td className="border border-black p-2 text-center">{row.injuries}</td>
                                <td className="border border-black p-2 text-center">{row.injuriesPerVRM}</td>
                                <td className="border border-black p-2 text-center">{row.safetyEvents}</td>
                                <td className="border border-black p-2 text-center">{row.safetyEventsPerVRM}</td>
                                <td className="border border-black p-2 text-center">{row.systemReliability}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Transit_Safety
