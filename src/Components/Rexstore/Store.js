import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";

const store=configureStore({
    reducer:{
        login:AuthSlice,
    }
})

export default store    