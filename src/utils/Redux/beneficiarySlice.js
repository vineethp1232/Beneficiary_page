import { createSlice } from "@reduxjs/toolkit";
import { BENEFICIARY_MOCK_DATA } from "../mockData";
const beneficiarySlice = createSlice({
  name: "beneficiary",
  initialState: {
    myBeneficiaries: BENEFICIARY_MOCK_DATA,
    viewBeneficiary: null,
    formData: null,
    beneficiaryToEdit: null,
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
    addViewBeneficiary: (state, action) => {
      state.viewBeneficiary = action.payload;
    },
    removeViewBeneficiary: (state) => {
      state.viewBeneficiary = null;
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
  },
});

export const {
  addBeneficiary,
  removeBeneficiary,
  addViewBeneficiary,
  removeViewBeneficiary,
  addFormData,
  removeFormData,
  addBeneficiaryToEdit,
  removeBeneficiaryToEdit
} = beneficiarySlice.actions;

export default beneficiarySlice.reducer;
