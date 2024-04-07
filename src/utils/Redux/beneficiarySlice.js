import { createSlice } from "@reduxjs/toolkit";
import { BENEFICIARY_MOCK_DATA } from "../mockData";
const beneficiarySlice = createSlice({
  name: "beneficiary",
  initialState: {
    myBeneficiaries: BENEFICIARY_MOCK_DATA,
    formData: null,
    beneficiaryToEdit: null,
    message:""
  },
  reducers: {
    addBeneficiary: (state, action) => {
      state.myBeneficiaries = [...state.myBeneficiaries, action.payload];
    },
    removeBeneficiary: (state, action) => {
      state.myBeneficiaries = state.myBeneficiaries.filter(
        (item) => item.account_number !== action.payload.account_number
      );
    },

    addFormData: (state, action) => {
      state.formData = action.payload;
    },
    removeFormData: (state) => {
      state.formData = null;
    },
    addBeneficiaryToEdit: (state, action) => {
      state.beneficiaryToEdit = action.payload;
    },
    removeBeneficiaryToEdit: (state) => {
      state.beneficiaryToEdit = null;
    },
    addMessage:(state,action)=>{
   state.message=action.payload
    }
  },
});

export const {
  addBeneficiary,
  removeBeneficiary,
  addFormData,
  removeFormData,
  addBeneficiaryToEdit,
  removeBeneficiaryToEdit,
  addMessage
} = beneficiarySlice.actions;

export default beneficiarySlice.reducer;
