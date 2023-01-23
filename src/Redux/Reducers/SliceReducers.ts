import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProducts } from '../../Interfaces/interface';
import { initialState } from '../../Redux/initState'

export const dataSlice = createSlice({
    name: 'getData',
    initialState,
    reducers: {
        getDataFetching(state) {
            state.isloading = true;
        },
        getDataFetchReducer(state, action: PayloadAction<IProducts[]>) {
            state.products = action.payload
            state.isloading = false;
            state.error = ''
        },
        getDataFetchError(state, action: PayloadAction<string>) {
            state.isloading = false;
            state.error = action.payload
        },
        selectedProduct(state, action: PayloadAction<number>) {
            state.products = state.products.map((el: any) => {
                if (el.id === action.payload) {
                    return {
                        ...el,
                        selected: !el.selected,
                    }
                }
                return el
            })
        }
    }
})

export default dataSlice.reducer
export const { 
    getDataFetchReducer, 
    getDataFetching,
    getDataFetchError,
    selectedProduct
} = dataSlice.actions