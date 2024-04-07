import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { DELETE_ICON, EDIT_ICON } from '../utils/constants'
import {useNavigate} from 'react-router-dom'
import { addBeneficiaryToEdit, addFormData, addViewBeneficiary, removeBeneficiary } from '../utils/Redux/beneficiarySlice'
import BeneficiaryView from './BeneficiaryView'
const MyBeneficiaries = () => {
    const beneficiaries=useSelector(store=>store.beneficiary.myBeneficiaries)
    const formData=useSelector(store=>store.beneficiary.formData)
    const dispatch =useDispatch()
    const [beneficiaryToDelete,setBeneficiaryToDelete]=useState(null)
   const navigate=useNavigate()
    const deleteBeneficiary=()=>{
        dispatch(removeBeneficiary(beneficiaryToDelete))
        setBeneficiaryToDelete(null)
    }
    const EditBeneficiary =(item)=>{
      dispatch(addBeneficiaryToEdit(item))
      navigate("/beneficiary/edit")
    }
  return (
    <div className='flex justify-center'>
      <div className='w-full sm:w-2/3 '>
        <h1 className='text-lg font-bold self-center pb-3'>My Beneficiaries</h1>
        <div className='flex flex-col items-center '>
        <table className='w-full'>
            <thead>
                <tr className='border border-y-pink-700 h-8' >
                    <th className='w-1/5 text-left pl-2'>Name</th>
                    <th className='w-1/5 text-left'>Account Number</th>
                    <th className='w-1/5 text-left'>Account Type</th>
                    <th className='w-1/5 text-left'>Remove</th>
                    <th className='w-1/5 text-left'>Edit</th>
                </tr>
            </thead>
            <tbody className='border border-black shadow-md '>
                {beneficiaries.map(beneficiary=>(
                    <tr key={beneficiary.account_number} className='bg-pink-50 border border-white border-b-2 '>
                        <td className='w-1/5 h-10 pl-2 cursor-pointer' onClick={()=>dispatch(addFormData(beneficiary))}>{beneficiary.name}</td>
                        <td className='w-1/5 h-10 pl-2'>{beneficiary.account_number}</td>
                        <td className='w-1/5 h-10 pl-2'>{beneficiary.account_type}</td>
                        <td className='w-1/5 h-10 pl-2'><img alt="delete" src={DELETE_ICON} className='w-6 h-6 cursor-pointer 'onClick={()=>{setBeneficiaryToDelete(beneficiary)}}/></td>
                        <td className='w-1/5 h-10 pl-2'><img alt="edit" src={EDIT_ICON} className='w-6 h-6 cursor-pointer  ' onClick={()=>EditBeneficiary(beneficiary)}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
       
      </div>
      {
        beneficiaryToDelete && <div className="absolute w-96 bg-white shadow-xl">
        <p className="pl-3">Are you sure that you want to delete {beneficiaryToDelete.name} from beneficiaries</p>
        <div className="flex p-4">
        <button onClick={deleteBeneficiary} className="bg-pink-700 px-2 py-1 mr-2 text-white">confirm</button>
        <button onClick={()=>setBeneficiaryToDelete(null)} className="bg-pink-700 px-2 py-1 text-white">cancel</button>
        </div>
        </div>
      }
      {
        formData && <BeneficiaryView/>
      }
    </div>
  )
}

export default MyBeneficiaries
