import {IUser, IUserState} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState: IUserState={
    users:[
        {id:1,name:"viktor",password:"1234"},
        {id:2,name:"admin",password:"admin"},
        {id:3,name:"greg",password:"qwer1234"},
        {id:4,name:"ivan",password:"12345"},
    ]
}

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        },
    },
});
export const { setUsers } = userSlice.actions;
export default userSlice.reducer