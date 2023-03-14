import React from 'react'

const contact = () => {
    return (
        <div name="contact" className='w-full py-2 bg-gradient-to-b from-white via-white  to-blue-900 mx-auto'>

            <div className=' flex flex-col mx-auto align-middle justify-center   '>
                <form method='POST' action='https://getform.io/f/d49f8fb1-de08-4085-8d2b-7d049aedde58' className='flex p-5 flex-col max-w-[600px] h-4/6   w-full mx-auto bg-blue-300'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-black mt-8'>Contact </p>
                        <p className='py-4 text-black' >Lets get connected !</p>
                    </div>
                    <input className='py-2 bg-white' type='text' placeholder='      Name' name='name'></input>
                    <input className='py-2 my-2 bg-white' type='email' placeholder='     Email' name='email'></input>
                    <textarea className='bg-white' name='message ' rows='10' placeholder='     Drop a message'></textarea>
                    <button className='text-orange-800 bg-yellow-300 font-bold border-2 hover:bg-white px-4 py-3 my-8 mx-auto flex items-center '> LET'S CONNECT</button>
                </form>


            </div>
        </div>
    )
}
export default contact;