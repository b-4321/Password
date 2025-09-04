import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white flex flex-col justify-center items-center py-2 mx-1 my-1 rounded-lg fixed bottom-0 left-0 right-0">
      <div className="logo font-bold text-1xl">
        <span className="text-red-700"> &lt; </span>
        Pass
        <span className="text-red-700">OP/&gt; </span>
      </div>

      <div className='flex justify-center items-center'>
        Created with <img className="w-5 mx-2" src="like.svg" alt="" /> by
        justCreative
      </div>
    </div>
  );
}

export default Footer
