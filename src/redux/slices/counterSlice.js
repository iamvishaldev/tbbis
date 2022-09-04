import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // isLoading: false,
    // data: null,
    counter: 0,
}

const conterSlice = createSlice({
    name: "counter Slice",
    initialState,
    reducers: {
        addCounter: (state, action) => {
            state.counter = state.counter + 1
        },
        minusCounter: (state, action) => {
            state.counter = state.counter--
        }
    }
})

export const { addCounter, minusCounter } = conterSlice.actions

export default createSlice.reducer