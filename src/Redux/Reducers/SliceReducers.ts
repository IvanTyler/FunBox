import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../../Redux/initState'

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataFetching(state) {
            state.isloading = true;
        },
        getDataFetchReducer(state, action: PayloadAction<any[]>) {
            state.products = action.payload
            state.isloading = false;
            state.error = ''
        },
        getDataFetchError(state, action: PayloadAction<string>) {
            state.isloading = false;
            state.error = action.payload
        },
    }
})

export default dataSlice.reducer
export const { 
    getDataFetchReducer, 
    getDataFetching,
    getDataFetchError,
} = dataSlice.actions