import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
    name: "UsersName",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            // console.log(action.payload)
        },
        
        removeUser(state, action) {
            state.splice(action.payload, 1)
            // console.log("dlr_user", action.payload)

        },
        dltAllUser(state, action) {
           console.log("hii this is dlt users")
            return [];
        },
    },
    
});
// console.log(UsersSlice.actions)
export default UsersSlice.reducer;

export const { addUser, removeUser, dltAllUser } = UsersSlice.actions
// console.log(Users)