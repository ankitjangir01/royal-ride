import React from 'react'
import { Logo } from '../../assets/svg'

const Navbar = () => {
  return (
    <>
    <div className="w-full bg-black text-center text-white flex justify-center items-center p-4 font-pacifico gap-6 text-2xl text-gold">
        <img src={Logo} alt='logo' className='max-w-[6rem]' />
        <p className='text-gold'>Royal Ride Tours N Travels</p>
    </div>
    </>
  )
}

export default Navbar