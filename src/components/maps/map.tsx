import React from 'react'

const Map = () => {
    return (
        <div className='bg-[#ffdede]'>
            <div className='text-4xl font-pacifico py-8'>
                Or visit our office here
            </div>
            <div className='m-2 !sm:m-8 shadow-lg rounded-xl overflow-hidden border border-gray-200 inline-block w-[90%]' >
                <iframe
                    title='google-map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4184.958549423153!2d75.39772729464204!3d28.112476100712087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391339005e542c81%3A0x68a940fc133f0ef9!2sRoyal%20Ride%20Tours%20N%20Travels%20JJN!5e0!3m2!1sen!2sin!4v1723874900931!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    //  style="border:0;" 
                    loading="lazy"
                />
            </div>

        </div>
    )
}

export default Map