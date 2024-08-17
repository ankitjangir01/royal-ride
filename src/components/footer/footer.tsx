import React from 'react'
import { Facebook, Instagram, Logo } from '../../assets/svg'

const Footer = () => {
    return (
        <div className='w-full py-8 bg-black text-white flex flex-col sm:flex-row justify-around sm:justify-between items-center gap-8'>
            <div className='flex flex-col justify-start text-start sm:ml-32 sm:w-1/3'>
                <img src={Logo} className='w-32 mb-4' alt='logo' />
                <div className='font-pacifico text-2xl mb-2'>
                    Royal Ride Tours N Travels
                </div>
                <p>Near Sai Hospital</p>
                <p>Jhunjhunu, Rajasthan</p>
                <p>333001</p>

                <p>Phone: 9783852408</p>
                <p>Email: connect@royalridetnt.com</p>
            </div>
            <div className='sm:ml-32 mr-0 sm:mr-auto text-start'>
                <div className='font-pacifico text-2xl mb-2 '>
                    Follow us for latest updates
                </div>
                <p className='my-2 cursor-pointer hover:underline' onClick={() => window.open('https://www.facebook.com/DhruvRatheePage/', '_blank')}>
                    <img src={Facebook} alt='facebook' className='w-6 mr-4 inline-block' />
                    @royalridetntjjn
                </p>
                <p className='my-2 cursor-pointer hover:underline' onClick={() => window.open('https://www.instagram.com/dhruvrathee/?hl=en', '_blank')}>
                    <img src={Instagram} alt='instagram' className='w-6 mr-4 inline-block' />
                    @royalridetntjjn
                </p>
            </div>
        </div>
    )
}

export default Footer