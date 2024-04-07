import React from "react";
import { useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux"
import { addBeneficiary, removeFormData } from "../utils/Redux/beneficiarySlice";
import {useNavigate} from "react-router-dom"
import Form from "./Form";

const AddBeneficiary = () => {
    const navigate=useNavigate();
    const formData=useSelector(store=>store.beneficiary.formData)
    const dispatch=useDispatch()
    const generateBeneficiary=()=>{
        dispatch(addBeneficiary(formData))
        dispatch(removeFormData())
        navigate("/beneficiary")


    }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className=" pt-5 flex flex-col items-center pb-5">
        <div className="px-20">
      <h1 className="text-lg font-bold text-center py-2">Add Beneficiary</h1>
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
     <Form register={register} errors={errors} handleSubmit={handleSubmit}  />
      {
        formData && <div className="absolute w-96 bg-white shadow-xl">
            <p className="pl-3">Are you sure that you want to add {formData.name} as a beneficiary</p>
            <div className="flex p-4">
            <button onClick={generateBeneficiary} className="bg-pink-700 px-2 py-1 mr-2 text-white">confirm</button>
            <button onClick={()=>dispatch(removeFormData())} className="bg-pink-700 px-2 py-1 text-white">cancel</button>
            </div>
        </div>
      }
    </div>
  );
};

export default AddBeneficiary;
