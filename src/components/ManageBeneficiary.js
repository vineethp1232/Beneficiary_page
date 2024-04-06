import React from 'react'
import BeneficiaryHeader from './BeneficiaryHeader'
import MyBeneficiaries from './MyBeneficiaries'

const ManageBeneficiary = () => {
  return (
  <div >
  <div className='flex flex-col items-center'>
  <BeneficiaryHeader/>
  </div>
  <MyBeneficiaries/>
    </div>
  )
}

export default ManageBeneficiary
