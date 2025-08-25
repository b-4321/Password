import React from 'react'

const Manager = () => {
  return (
    <>
     <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <div className='bg-gray-800 mycontainer'>
        <h1>Passop</h1>
        <p>Your one-stop solution for password management.</p>
        <div className='text-white flex flex-col p-4 '>
            <input className='rounded-full' type="text" name="" id="" />
            <div className='flex'>
                <input type="text"/>
                <input type="text"/>
            </div>
        </div>
    </div>
     
    </>
  )
}

export default Manager
