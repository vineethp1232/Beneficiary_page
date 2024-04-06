import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { removeViewBeneficiary } from '../utils/Redux/beneficiarySlice'
const BeneficiaryView = () => {
const beneficiary =useSelector(store=>store.beneficiary.viewBeneficiary)
const dispatch=useDispatch()
  return (
    <div className="h-1/3 w-1/3 bg-white absolute">
     {beneficiary.name} 
     <button className='bg-pink-700 p-2 rounded-sm' onClick={()=>dispatch(removeViewBeneficiary())}>close</button>
    </div>
  )
}

export default BeneficiaryView
