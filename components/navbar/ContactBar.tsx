import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
const ContactBar = () => {
  return (
      <div className='px-6 hidden sm:block lg:hidden xl:block' >
        <p className='text-sm mx-6'>Masz pytania?</p>
        <div className='flex flex-row'>
        <BsFillTelephoneFill className='my-1 mx-1'/>
         <a href="tel:5551234567" className='text-lg'>731185100</a>
        </div>
    </div>
  )
}

export default ContactBar