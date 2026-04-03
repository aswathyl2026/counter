import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        //actions dispatched by components
        increment: (state, actionByComponent) => {
            state.count++
        },
        decrement: (state, actionByComponenet) => {
            state.count--
        },
        reset: (state, actionByComponenet) => {
            return { ...state, count: 0 }
        },
        incrementByAmount: (state, actionByComponenet) => {
            state.count+=actionByComponenet.payload
        }
    }

})

export const{increment,decrement,reset,incrementByAmount}=counterSlice.actions
export default counterSlice.reducer