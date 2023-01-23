import { combineReducers, configureStore } from "@reduxjs/toolkit";

import dataReducer from '../Reducers/SliceReducers'

const rootReducer = combineReducers({
    dataReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default store