import {IAuth, IUser} from "../models/models";
import {AppDispatch} from "./index";
import authSlice, {userSlice} from "./slices/authSlice";


export const login = (data: IUser[]) => {
    return userSlice.getInitialState
}

export const register = (data: IUser[]) => {
    return async (dispatch: AppDispatch) => {
        try {
            // const response = await axios.post<IAuthResponse>(`auth/register`, data)
            // dispatch(authSlice.actions.loginSuccess({
            //     access: response.data.access,
            //     username: data.username
            // }))
        } catch (e) {
            console.log('Error register', e)
        }
    }
}