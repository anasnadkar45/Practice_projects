import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tasks : [],
};

export const TaskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask : (state,action) => {
            state.tasks.push(action.payload)
        },
        removeTask : (state,action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTaskCompletion : (state,action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if(task){
                task.completed = !task.completed;
            }
        }
    }
})

export const {addTask, removeTask, toggleTaskCompletion} = TaskSlice.actions;
export default TaskSlice.reducer;