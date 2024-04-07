import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFormData } from "../utils/Redux/beneficiarySlice";
const BeneficiaryView = ({editBeneficiary}) => {
  const beneficiary = useSelector((store) => store.beneficiary.formData);
  const dispatch = useDispatch();
  const { name, account_number, bank_name, account_type, email_id } =
    beneficiary;
  return (
    <div className=" sm:min-w-96 bg-white absolute top-40 border-pink-700 shadow-lg border p-3 mb-3">
      <h1 className="text-lg font-bold">Beneficiary Details</h1>
      <table className="mt-3 bg-pink-50 flex justify-between p-2">
      
        <td>
          <tr className="h-10 ">Name</tr>
          <tr className="h-10">Account Number</tr>
          <tr className="h-10">Bank Name</tr>
          <tr className="h-10">Account Type</tr>
          <tr className="h-10">Email Id</tr>
        </td>

        <td >
          <tr className="h-10 ">{name}</tr>
          <tr className="h-10">{account_number}</tr>
          <tr className="h-10">{bank_name}</tr>
          <tr className="h-10">{account_type}</tr>
          <tr className="h-10">{email_id}</tr>
          
        </td>
      </table>

      <button
        className="bg-pink-700 p-2 rounded-sm relative left-72 my-2 text-white hover:bg-pink-600"
        onClick={() => dispatch(removeFormData())}
      >
        close
      </button>
      {
editBeneficiary && <button className="p-2 bg-pink-700 rounded-sm relative left-36 text-white hover:bg-pink-600" onClick={editBeneficiary}>confirm</button>
      }
    </div>
  );
};

export default BeneficiaryView;
