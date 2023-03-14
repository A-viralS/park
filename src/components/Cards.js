import React from 'react'
import Data from '../cards/data'
import CardDetails from '../cards/cards_details'

const Cards = () => {
    const [data, setData] = React.useState(Data)
    return (
        <div className='w-full bg-white m-2 mr-8 '>
            <div className=' flex justify-center p-3 mx-auto '>
                <div className='  ml-20 grid grid-cols-3 gap-x-8 text-center py-8 '>
                    < CardDetails details={data} />
                </div>
            </div>
        </div>
    )
}
export default Cards;
// bg-gradient-to-b from-white via-blue-200 to-white 