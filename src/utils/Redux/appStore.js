import {configureStore} from "@reduxjs/toolkit"
import beneficiaryReducer from "./beneficiarySlice"
const appStore=configureStore(
    {
        reducer:{
  beneficiary:beneficiaryReducer
        }
    }
)

export default appStore;