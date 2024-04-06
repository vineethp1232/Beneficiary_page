import React from 'react'
import { USER_ICON } from '../utils/constants'

const MainHeader = () => {
  return (
    <div className='flex justify-between shadow-sm py-2 '>
      <h1 className='text-6xl font-bold text-pink-700 pl-20 '>Bank</h1>
      <img alt="user"src={USER_ICON} className='w-12 mr-10'></img>
    </div>
  )
}

export default MainHeader
