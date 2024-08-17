import React from 'react'
import { Audi, Crysta, Dezire, Ertiga, Etios, Fortuner, Hycross, Mercedes, TempoTraveller, Urbania, Vintage } from '../../assets/images'


const CarsList = () => {

    const carsList = [
        {
            img: Audi,
            name: "Audi"
        },
        {
            img: Mercedes,
            name: "Mercedes"
        },
        {
            img: Fortuner,
            name: "Fortuner"
        },
        {
            img: Crysta,
            name: "Innova Crysta"
        },
        {
            img: Hycross,
            name: "Innova Hycross"
        },
        {
            img: Ertiga,
            name: "Maruti Ertiga"
        },
        {
            img: Dezire,
            name: "Maruti Dezire"
        },
        {
            img: Etios,
            name: "Toyota Etios"
        },
        {
            img: TempoTraveller,
            name: "Tempo Traveller"
        },
        {
            img: Urbania,
            name: "Force Urbania"
        },
        {
            img: Vintage,
            name: "Vintage cars"
        },
    ]

    return (
        <div className='bg-[#eae8ff] -mt-[120px] pt-[120px]' style={{ clipPath: 'polygon(0 0, 100% 14%, 100% 100%, 0 100%)' }}>
            <h3 className='font-pacifico text-4xl'>We have a wide range of cars available</h3>
            <div className='flex flex-col w-full overflow-x-auto py-6 justify-center ' >
                <div className='flex gap-4 items-center px-8 max-w-max w-max'>
                    {
                        carsList.slice(0, Math.ceil(carsList.length / 2)).map((car, index) => {
                            return (
                                <div key={index} className='m-2 w-[450px] h-[180px] sm:h-[250px] lg:h-[300px] bg-white rounded-xl overflow-hidden max-w-max group' style={{ boxShadow: '0 2px 8px #0000004d' }}>
                                    <img src={car.img} alt={car.name} style={{ height: '77%' }} className='group-hover:scale-105 ease-in-out duration-200' />
                                    <div className='font-pacifico text-xl'>
                                        {car.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div >
                <div className='flex gap-4 items-center px-8 max-w-max w-max'>
                    {
                        carsList.slice(Math.ceil(carsList.length / 2)).map((car, index) => {
                            return (
                                <div key={index} className='m-2 w-[450px] h-[180px] sm:h-[250px] lg:h-[300px] bg-white rounded-xl overflow-hidden max-w-max group' style={{ boxShadow: '0 2px 8px #0000004d' }}>
                                    <img src={car.img} alt={car.name} style={{ height: '77%' }} className='group-hover:scale-105 ease-in-out duration-200' />
                                    <div className='font-pacifico text-xl'>
                                        {car.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='m-2 w-[200px] sm:w-[450px] h-[180px] sm:h-[250px] lg:h-[300px] bg-white rounded-xl overflow-hidden font-pacifico text-xl flex items-center justify-center' style={{ boxShadow: '0 2px 8px #0000004d' }}>
                        And many more...
                    </div>
                </div >
            </div>
        </div>
    )
}

export default CarsList