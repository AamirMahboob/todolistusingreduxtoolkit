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
               id: nanoid(),
               text: action.payload,
            }
            state.toDos.push(todo);
        },
        removeToDo : (state,action)=>{
          state.toDos = state.toDos.filter((todo)=>todo.id !== action.payload)
        }
     }
})

export const {addTodo,removeToDo} = toDoSlice.actions
export default toDoSlice.reducer;
