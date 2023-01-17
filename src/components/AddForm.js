import { addDoc, collection,updateDoc } from "firebase/firestore";
import React,{useState,useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import {app,db} from '../utils/firebase'

function AddForm({messages,setMessages,editTodo,setEditTodo}) {
    let [input,setInput]=useState("");
    
    const updateTodo=(input,id,completed,isDragging)=>{
        const newTodo=messages.map((msg)=>
            msg.id=== id? {input,id,completed,isDragging} :msg
        )
        setMessages(newTodo)
        setEditTodo("")
    }

    // useEffect(()=>{
    //     if(editTodo){
    //         setInput(editTodo.input)
    //     }else{
    //         setInput("")}
    // },[setInput,editTodo])




    const submitHandler=async(e)=>{
         e.preventDefault()
        if(!editTodo){
            // setMessages([...messages,{input,id:uuidv4(),completed:false,isDragging:false}])
            // setInput("")
       await addDoc(collection(db,'todos'),{
              input:input,
              id:uuidv4(),
              completed:false,
              isDragging:false,
           
            })
            setInput("")
        }else{   
            updateTodo(input,editTodo.id,editTodo.completed,editTodo.isDragging)
        }
       
    }
    const inputHandler=(e)=>{
        setInput(e.target.value)
    }



    return (     
        <form className="addForm">
           <input type="text" onChange={inputHandler} value={input} />
           <button className="button" onClick={submitHandler}>{editTodo? "修改紀錄":"新增紀錄"}</button>
           <hr />
        </form>            
    );
  }


export  default AddForm;