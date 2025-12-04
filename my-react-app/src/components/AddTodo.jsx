import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from "../features/todo/todoSlice"

function AddTodo(){

    const [input,setInput] = useState('');
    const dispatch=useDispatch()

    const addTodoHandler=(e)=>{
           e.preventDefault();
           dispatch(addTodo(input))    // input is the value of action.payload
           setInput('') // empty the form input after using the value   
        } 

    return(
        <>
        <div> AddTodo </div>
        <form onSubmit={addTodoHandler}  >
            <input value={input} onChange={(e)=>setInput(e.target.value)} />
            <button> Add Todo </button>
        </form>
        </>
    )
}

export default AddTodo;
