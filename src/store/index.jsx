import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./slice/UserSlice";

const store = configureStore({
    reducer: {
        users: UsersSlice,

    }
})

export default store;