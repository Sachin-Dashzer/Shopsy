import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null
}



export const registerUser = createAsyncThunk('/auth/register',

    async (formData) => {
        const response = await axios.post('http://localhost:5000/auth/register', formData, { withCredentials: true });
        return response.data;
    }
)



const authslice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => { }
    },

    extraReducera: (builder) => {

        builder.addCase(registerUser.pending, (state) => {
            isLoading = true;
        }).addCase(registerUser.fulfilled, (state, action) => {
            isLoading = false
            user = action.payload
            isAuthenticated = false
        }).addCase(registerUser.rejected, (state) => {
            isLoading = false
            user = null
            isAuthenticated = false
        })
    }
})


export const { setUser } = authslice.actions;
export default authslice.reducer;