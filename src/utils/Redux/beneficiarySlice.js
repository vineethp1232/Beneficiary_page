import {createSlice} from "@reduxjs/toolkit"
import { BENEFICIARY_MOCK_DATA } from "../mockData"
const beneficiarySlice=createSlice({
    name:"beneficiary",
    initialState:{
        myBeneficiaries:BENEFICIARY_MOCK_DATA,
        viewBeneficiary:null
    },
    reducers:{
        addBeneficiary:(state,action)=>{
         state.myBeneficiaries=[...state.myBeneficiaries,action.payload]
        },
        removeBeneficiary:(state,action)=>{
            state.myBeneficiaries=state.myBeneficiaries.filter(item=>item.account_number!== action.payload.account_number)
        },
        addViewBeneficiary:(state,action)=>{
            state.viewBeneficiary=action.payload
        },
        removeViewBeneficiary:(state)=>{
            state.viewBeneficiary=null
        }
       
    }
})

export const {addBeneficiary,removeBeneficiary,addViewBeneficiary,removeViewBeneficiary}=beneficiarySlice.actions

export default beneficiarySlice.reducer;
