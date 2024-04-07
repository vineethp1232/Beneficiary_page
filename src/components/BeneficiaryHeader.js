import React from 'react'
import { Link } from 'react-router-dom'

const BeneficiaryHeader = () => {
  return (
    <div className='w-2/3 text-center my-2'>
      <h1 className='text-lg py-1 font-bold'>Manage Beneficiaries</h1>
      <hr/>
      <div className='flex justify-between m-4 '>
        
     <Link to="/beneficiary/new"> <button className='bg-pink-700 hover:bg-pink-600 px-4 py-2 rounded-sm text-white'>Add beneficiary</button></Link>
      </div>
    </div>
  )
}

export default BeneficiaryHeader
