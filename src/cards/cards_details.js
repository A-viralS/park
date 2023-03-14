import React from 'react'

const cards_details = ({ details }) => {
    return (
        <>
            {
                details.map((detail => {
                    const { name, info } = detail;
                    return (
                        <div className='  w-96 h-72 flex p-4 hover:scale-95 bg-gradient-to-t from-blue-300 to-white mb-2 border-2 border-blue-500  '>
                            <div className='   flex flex-col   text-left    ' key={name}>
                                <p className='text-[21.5px] font-bold font-boldhand1  text-left tracking-wider  border-b-4 border-blue-500 '>{name}</p>
                                <p className='font-content1 mt-2 font-2xl text-left  max-w-[220px]'>{info}</p>
                            </div>
                        </div>
                    )
                }))
            }
        </>

    )
}
export default cards_details;

// bg-gradient-to-br from-white via-white to-blue-300 shadow-md shadow-blue-900 border-1 border-blue-600 mt-3