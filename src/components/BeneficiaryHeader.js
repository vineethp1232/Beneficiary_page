import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { addMessage} from '../utils/Redux/beneficiarySlice'

const BeneficiaryHeader = () => {
  
  const dispatch=useDispatch()
  const message=useSelector(store=>store.beneficiary.message)

useEffect(()=>{
const intervalId=setTimeout(()=>{
  message && dispatch(addMessage(""))
},2000)
return ()=>clearTimeout(intervalId)
},[message])
  return (
    <div className='w-2/3 text-center my-2'>
      <h1 className='text-lg py-1 font-bold'>Manage Beneficiaries</h1>
      <hr/>
      <div className='flex justify-between my-4 '>
      <p className='text-red-600'>{message}</p>
     <Link to="/beneficiary/new"> <button className='bg-pink-700 hover:bg-pink-600 px-4 py-2 rounded-sm text-white '>Add beneficiary</button></Link>
    
      </div>
    </div>
  )
}

export default BeneficiaryHeader
