import React from 'react'
import { Link } from 'react-router-dom'

const SubHeader = () => {
  return (
    <nav className='bg-pink-700  text-white shadow-lg'>
      <ul className='flex justify-center '>
      <Link to="/"> <li className='px-3 cursor-pointer border border-x-white py-1'>Home</li></Link>
      <Link to="/beneficiary"> <li className='px-3 cursor-pointer border border-x-white py-1'>Beneficiaries</li></Link>
      <Link> <li className='px-3 cursor-pointer border border-x-white py-1'>Banking</li></Link>
      <Link> <li className='px-3 cursor-pointer border border-x-white py-1'>Credit Card</li></Link>
      <Link> <li className='px-3 cursor-pointer border border-x-white py-1'>Debit Card</li></Link>
      <Link> <li className='px-3 cursor-pointer border border-x-white py-1'>Investments</li></Link>
      
      </ul>
    </nav>
  )
}

export default SubHeader
