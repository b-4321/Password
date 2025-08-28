import React, { use } from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref = useRef()
    const showPassword = () => {
        alert('show password');
        if(ref.current.src.includes("/eye-block.png")){
            ref.current.src = "/eye-open.png";
        } else {
            ref.current.src = "/eye-block.png";
        }
    }
  return (
    <>
     <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <div className='bg-yellow-200 mycontainer rounded-lg h-96 my-16'>
        <h1 className='text-4xl font-bold text- text-center'>
            <span className='text-red-700'> &lt; </span>
            <span>Pass</span>
            <span className='text-red-700'>OP/&gt; </span>
        </h1>
        <p className='text-center text-red-900 text-lg'>Your one-stop solution for password management.</p>
        <div className='text-white flex flex-col p-4 text-black gap-8 items-center'>
            <input placeholder='Enter website name' className='rounded-full border border-red-700 w-full p-4 py-1' type="text" name="" id="" />
            <div className='flex w-full justify-between gap-3'>
                <input placeholder='Enter username' type="text" className='rounded-full border border-red-700 w-full p-4 py-1'/>
                <div className="relative">
                <input placeholder='Enter password' type="text" className='rounded-full border border-red-700 w-full p-4 py-1'/>
                <span className='absolute right-[4px] top-[4px] cursor-pointer 'onClick={showPassword}>
                    <img ref={ref} className='p-1' width={30} src="/eye-open.png" alt="eye" />
                </span>
                </div>
            </div>

            <button className='flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 rounded-full px-8 py-2 w-fit border-2 border-red-700'>
                <lord-icon
            src="https://cdn.lordicon.com/vjgknpfx.json"
            trigger="hover">
            </lord-icon>
                Add Password</button>
        </div>
    </div>
     
    </>
  )
}

export default Manager
