import React, { useState } from "react";
import { ACCOUNT_TYPE_OPTIONS } from "../utils/constants";
import { useForm} from "react-hook-form";
import {useDispatch} from "react-redux"
import { addBeneficiary } from "../utils/Redux/beneficiarySlice";
import {useNavigate} from "react-router-dom"

const AddBeneficiary = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState(null);
    const dispatch=useDispatch()
    const generateBeneficiary=()=>{
        dispatch(addBeneficiary(formData))
        setFormData(null)
        navigate("/beneficiary")


    }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className=" mt-6 flex flex-col items-center pb-6">
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
      <form
        className="w-full sm:w-1/2 mt-4 self-center bg-pink-50 pl-5 py-3 shadow-sm"
        onSubmit={handleSubmit((data) => setFormData(data))}
      >
        <div className="flex ">
          <label htmlFor="name" className="w-1/3">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "This field is required",pattern:{value:/^[a-zA-Z ]*$/,message:"Name is not valid"},minLength:{value:4,message:"min 4 letters required"} })}
            className="border border-black w-1/3 rounded-sm mb-3 py-1 px-2"
          />
          <div className="text-red-700 w-1/3 pl-2">
            {errors.name && errors.name.message}
          </div>
        </div>
        <div className="flex justify-between">
          <label htmlFor="name" className="w-1/3">
            Account Number <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            {...register("account_number", {
              required: "This field is required",pattern:{value:/^\d{9,18}$/, message:"invalid account number"}
            })}
            className="border border-black w-1/3 rounded-sm mb-3 py-1 px-2"
          />
          <div className="text-red-700 w-1/3 pl-2">
            {errors.account_number && errors.account_number.message}
          </div>
        </div>
       
        <div className="flex justify-between">
          <label htmlFor="name" className="w-1/3">
            Bank Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            {...register("bank_name", { required: "This field is required" ,pattern:{value:/^[a-zA-Z ]*$/,message:"Bank name is not valid"},minLength:{value:3,message:"min 3 letters required"} })}
            className="border border-black w-1/3 rounded-sm mb-3 py-1 px-2"
          />
          <div className="text-red-700 w-1/3 pl-2">
            {errors.bank_name && errors.bank_name.message}
          </div>
        </div>
        <div className="flex ">
          <label htmlFor="name" className="w-1/3">
            Account Type <span className="text-red-600">*</span>
          </label>
          <select
            {...register("account_type", {
              required: "This field is required",
            })}
            className="border  border-black rounded-sm w-1/3 mb-3 py-1 px-2 "
          >
            {ACCOUNT_TYPE_OPTIONS.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          
        </div>
        <div className="flex ">
          <label htmlFor="name" className="w-1/3">
            Email Id <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            {...register("email_id", { required: "This field is required" ,pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"email id is not valid"}})}
            className="border border-black w-1/3 rounded-sm mb-3 py-1 px-2 "
          />
          <div className="text-red-700 w-1/3 pl-2">
            {errors.email_id && errors.email_id.message}
          </div>
        </div>
        <input type="submit" className="bg-pink-700 py-2 px-4 text-white hover:bg-pink-600"/>
      </form>
      {
        formData && <div className="absolute w-96 bg-white shadow-xl">
            <p className="pl-3">Are you sure that you want to add {formData.name} as a beneficiary</p>
            <div className="flex p-4">
            <button onClick={generateBeneficiary} className="bg-pink-700 px-2 py-1 mr-2 text-white">confirm</button>
            <button onClick={()=>setFormData(null)} className="bg-pink-700 px-2 py-1 text-white">cancel</button>
            </div>
        </div>
      }
    </div>
  );
};

export default AddBeneficiary;
