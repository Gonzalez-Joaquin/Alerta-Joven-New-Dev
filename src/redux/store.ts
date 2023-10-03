import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/user.slice";
import individualsSlice from "./slices/individuals/individuals.slice";

const store = configureStore({
    reducer: {
        user: userSlice,
        individuals: individualsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch

export default store