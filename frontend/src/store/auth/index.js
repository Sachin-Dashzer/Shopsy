import login from "@/pages/auth/login";
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

export const loginUser = createAsyncThunk('/auth/login',

    async (formData) => {
        const response = await axios.post('http://localhost:5000/auth/login', formData, { withCredentials: true });
        return response.data;
    }
)


export const logOutUser = createAsyncThunk('/auth/logout',

    async () => {
        const response = await axios.get('http://localhost:5000/auth/logout', {}, { withCredentials: true });
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
        })
            .addCase(registerUser.fulfilled, (state, action) => {
                isLoading = false
                user = null
                isAuthenticated = false
            })
            .addCase(registerUser.rejected, (state) => {
                isLoading = false
                user = null
                isAuthenticated = false
            })
            .addCase(loginUser.pending, (state) => {
                isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                isLoading = false
                user = action.payload.success ? action.payload.user : null;
                isAuthenticated = action.payload.success
            })
            .addCase(loginUser.rejected, (state) => {
                isLoading = false
                user = null
                isAuthenticated = false
            })
            .addCase(logOutUser.fulfilled, (state, action) => {
                isLoading = false
                user = null
                isAuthenticated = false
            })
    }
})


export const { setUser } = authslice.actions;
export default authslice.reducer;