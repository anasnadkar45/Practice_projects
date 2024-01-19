import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./slices/TaskSlice";

export const store = configureStore({
    reducer : {
        tasks : TaskSlice
    }
})