import {createSlice , nanoid} from "@reduxjs/toolkit";   // nanoid is used to create unique ids

const initialState={                              
    todos:[{id:1, text:"Hello"}]
}

export const todoSlice=createSlice({
    name:'todo', // this name is shown in chrome extension -> redux dev tools
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload )
        }
    } 
})

export const {addTodo,removeTodo}=todoSlice.actions;      // individual reducers for using in components

export default todoSlice.reducer;  // all reducers to use in store