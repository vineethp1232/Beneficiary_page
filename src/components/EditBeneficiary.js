import React, { useEffect } from 'react'
import { useForm} from "react-hook-form";
import {useSelector,useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import Form from './Form';
import BeneficiaryView from './BeneficiaryView';
import { addBeneficiary, addViewBeneficiary, removeBeneficiary, removeFormData } from '../utils/Redux/beneficiarySlice';
const EditBeneficiary = () => {
const beneficiaryToEdit=useSelector(store=>store.beneficiary.beneficiaryToEdit)
const formData=useSelector(store=>store.beneficiary.formData);
const navigate=useNavigate()
const dispatch=useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues:beneficiaryToEdit
      });
     const editBeneficiary=()=>{
        dispatch(removeBeneficiary(beneficiaryToEdit))
        dispatch(addBeneficiary(formData))
        dispatch(removeFormData())
        navigate("/beneficiary")
     }
    
  return (
    <div className=" pt-5 flex flex-col items-center pb-5">
        <div className="px-20">
      <h1 className="text-lg font-bold text-center py-2">Edit Beneficiary</h1>
      <hr/>
      <p className="text-red-500 italic py-1">
        mandatory fields are marked with an asterisk (*)
      </p>
      <h2 className="text-pink-700 font-bold py-1">
        Ensure tha you enter correct account number
      </h2>
      <h2 className="text-pink-700 font-bold">
        Bank does not accept responsibility for funds transferred inadvertently
        to a wrong account number input by the customer
      </h2>
      </div>
      <Form register={register} handleSubmit={handleSubmit} errors={errors}/>
      {formData && <><BeneficiaryView/><button className="p-2 bg-pink-700 rounded-sm absolute bottom-16 mb-2 -mr-28 text-white" onClick={editBeneficiary}>confirm</button></>}
    </div>
  )
}

export default EditBeneficiary
