import React, { useEffect, useState } from 'react'
import { CheckIcon, CopyIcon, PhoneIcon, WhatsAppIcon } from '../../assets/svg'

const contacts = [
    {
        phone: 9783852408,
        whatsapp: true
    },
    {
        phone: 9928222531,
        whatsapp: true
    },
    {
        phone: 7014781807,
        whatsapp: false
    }
]

const ContactNumbers = () => {

    const [clipboardIcons, setClipboardIcons] = useState<Array<string>>([]);

    useEffect(() => {
        setClipboardIcons(contacts.map(_ => CopyIcon));
    }, [contacts])

    const onCopyToClipboard = (text: string) => {
        navigator.clipboard?.writeText(text).then(() => {
            setClipboardIcons(prevState => {
                return prevState.map((icon, index) => {
                    //@ts-ignore
                    if (index === contacts.indexOf(contacts.find(obj => obj.phone.toString() === text))) {
                        return CheckIcon;
                    }
                    return icon;
                });
            });
            setTimeout(() => setClipboardIcons(prevState => {
                return prevState.map((icon, index) => {
                    //@ts-ignore
                    if (index === contacts.indexOf(contacts.find(obj => obj.phone.toString() === text))) {
                        return CopyIcon;
                    }
                    return icon;
                });
            }), 2000);
        }).catch((error) => {
            console.error("can not copy to clipboard; error: ", error.message)
        });
    }

    return (
        <div className='w-full font-pacifico  bg-[#d3fffb]'>
            <div className='p-8 text-4xl'>
                Contact now to book a ride
            </div>
            <div className='flex gap-4 md:gap-8 items-center justify-around xl:justify-center w-full overflow-x-auto pb-8 px-8'>
                {
                    contacts.map((contact, index) => {
                        return <>
                            <div key={contact.phone} className='rounded-xl flex-shrink-0 w-[165px] sm:w-[250px] xl:w-[300px] h-[200px] bg-white overflow-hidden shadow-md hover:shadow-2xl ease-in-out duration-200 relative' >
                                <div className='flex items-center justify-center h-2/3 w-full text-2xl overflow-hidden'>
                                    <div>{contact.phone}</div>
                                </div>
                                <div className='flex w-full justify-around h-1/3'>
                                    <div className='cursor-pointer hover:bg-green-600 flex-grow h-full flex items-center justify-center bg-green-500' onClick={() => window.open(`tel:+91${contact.phone}`)}>
                                        <img src={PhoneIcon} alt='call' style={{ width: '1.5rem' }} />
                                    </div>
                                    {
                                        contact.whatsapp
                                        &&
                                        <div className='cursor-pointer hover:bg-green-600 flex-grow h-full flex items-center justify-center bg-green-500' onClick={() => window.open(`https://wa.me/+91${contact.phone}`)}>
                                            <img src={WhatsAppIcon} alt='whatsapp' style={{ width: '1.5rem' }} />
                                        </div>
                                    }
                                </div>
                                <div className='cursor-pointer border border-gray-300 rounded-lg p-2 flex items-center justify-center absolute z-20 top-1 right-1' onClick={() => onCopyToClipboard(contact.phone.toString())}>
                                    <img src={clipboardIcons[index]} alt='copy to clipboard' style={{ width: '1rem' }} />
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default ContactNumbers