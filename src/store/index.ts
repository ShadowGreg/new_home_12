import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersReducer from './slices/authSlice'
const rootReducer = combineReducers({
    users: usersReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']