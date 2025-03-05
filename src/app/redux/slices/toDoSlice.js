"use client"; 
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    toDos: [
        { id: 1, text: 'Learn Redux Toolkit'},
         
    ],
  
}

const toDoSlice = createSlice({
     name: 'todo',
     initialState,  
     reducers:{
        addTodo : (state,action)=> {
            const todo = {
               id: nanoid,
               text: action.payload,
            }
            state.toDos.push(todo);
        }
     }
})

export const {addTodo} = toDoSlice.actions
export default toDoSlice.reducer;
