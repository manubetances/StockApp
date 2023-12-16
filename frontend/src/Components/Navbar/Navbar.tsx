import React from 'react'

interface Props {}

const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-20">
        <img alt="" />
        <div className="hidden font-bold lg:flex">
          <a href="" className="text-black hover:[#3FEEE6]">
            Dashboard
          </a>
        </div>
      </div>
      <div className="hidden lg:flex items-center space-x-6 text-back">
        <div className="hover:[#3FEEE6] hover:cursor-pointer">Login</div>
        <a
          href=""
          className="px-8 py-3 font-bold rounded text-white bg-[#85DCB] hover:opacity-70"
        >
          Signup
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar