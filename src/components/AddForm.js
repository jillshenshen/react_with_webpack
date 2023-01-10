import React,{useState} from "react";
import {v4 as uuidv4} from "uuid";

function AddForm({messages,setMessages}) {
    let [input,setInput]=useState("");
   
    const submitHandler=(e)=>{
        e.preventDefault();
        setMessages([...messages,{input,id:uuidv4()}])
        setInput("")
    }
    const inputHandler=(e)=>{
        setInput(e.target.value)
    }



    return (     
        <form className="addForm">
           <input type="text" onChange={inputHandler} value={input} />
           <button className="button" onClick={submitHandler}>新增紀錄</button>
           <hr />
        </form>            
    );
  }


export  default AddForm;