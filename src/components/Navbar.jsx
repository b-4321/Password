import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-200 rounded-lg my-1 mx-1">
      <div className="flex justify-around items-center px-4 py-5 h-16 ">
        <div className="logo font-bold text-2xl">
          <span className="text-red-700"> &lt; </span>
          Pass
          <span className="text-red-700">OP/&gt; </span>
        </div>
        {/* <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
        </li>
      </ul> */}
        <button className="flex items-center">
          <img
            className="cursor-pointer p-1"
            width={30}
            src="github.png"
            alt="GitHub Logo"
          />
          <span
            className="font-bold"
            onClick={() =>
              window.open(
                "https://github.com/b-4321/Password",
                "_blank"
              )
            }
          >
            Github
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar
