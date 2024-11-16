import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../slice/TodoSlice"

const store = configureStore({
    reducer: {
        items: itemsReducer,
    },
});

export default store;