import { createSlice } from "@reduxjs/toolkit";
import { user_model } from "../../model/user.model";

const EmptyUserState: user_model = { id: 0, name: '', password: '', username: '' }

const persistLocalStorageUserState = (user: user_model) => {
    localStorage.setItem('user', JSON.stringify({ ...user }))
}

const clearLocalStorageUserState = () => {
    localStorage.removeItem('user')
}

const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        createUser: (_state, action) => {
            persistLocalStorageUserState(action.payload)
            return action.payload
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload }
            persistLocalStorageUserState(result)
            return result
        },
        resetUser: () => {
            clearLocalStorageUserState()
            return EmptyUserState
        }
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer