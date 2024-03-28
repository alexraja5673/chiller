import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        loginDetails:{}
    },
    reducers:{
        loginDt:(state,action)=>{
            state.loginDetails=action.payload
        }
    }
})

export const {loginDt}  =authSlice.actions

export default authSlice.reducer