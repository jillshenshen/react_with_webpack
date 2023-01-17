import React ,{useEffect, useRef}from "react";
import { Link } from 'react-router-dom';
import { query,collection, addDoc ,onSnapshot, updateDoc,doc, deleteDoc} from "firebase/firestore"; 
import {app,db} from '../utils/firebase'

function List({messages,setMessages,setEditTodo}) {
 
  //get data 
  useEffect(()=>{
    const q=query(collection(db,'todos'))
    const unsubscribe=onSnapshot(q,(querySnapshot)=>{
      let todoArr=[]
      querySnapshot.forEach((doc)=>{
        todoArr.push({...doc.data(),
          id:doc.id,
       })
      })
      console.log(todoArr)
      setMessages(todoArr)
    })
    return()=>unsubscribe()
  },[]) 



  const deleteHandler=async(msg)=>{
     await deleteDoc(doc(db,'todos',msg.id))
      // setMessages(messages.filter((m)=>m.id!==msg.id));

   }
   const doneHandler=async (msg)=>{
    //  setMessages(
    //     messages.map((item)=>{
    //       if(item.id===msg.id){
    //         return{...item,completed:!item.completed}
    //       }
    //       return item;
    //     })
    //  )
    await updateDoc(doc(db,'todos',msg.id),{
      completed:!msg.completed
     })
   }


  //  const editHandler=(msg)=>{
  //      const findTodo=messages.find((item)=>item.id===msg.id
  //      )
  //      setEditTodo(findTodo);

  //  }

  let todoItemDrag=useRef()
  let todoItemDragOver=useRef() 



   function D_start(e,index){
      todoItemDrag.current=index
   }
   function D_enter(e,index){
      todoItemDragOver.current=index
      const cpArr=[...messages]
     
      const finalArr=cpArr.map(item=>({
        input: item.input,
        completed: item.completed,
        id: item.id,
        isDragging: false
     }))
    

      finalArr[index].isDragging=true
      setMessages(finalArr)
   }



   function D_end(e){
      
     const arr1=[...messages]
     const todo_item_main=arr1[todoItemDrag.current]
     arr1.splice(todoItemDrag.current,1)
     arr1.splice(todoItemDragOver.current,0,todo_item_main)

     todoItemDrag=null
     todoItemDragOver=null

     const arr2 = arr1.map(item => ({
      input: item.input,
      completed: item.completed,
      id: item.id,
      isDragging: false
     }));
   

     setMessages(arr2)
    
   }

   



    return (
      <div className="list">
       {messages.map((msg,index)=>(
        <div className="list-array" draggable droppable onDragStart={e=>D_start(e,index)}
        onDragEnter={e=>D_enter(e,index)} onDragEnd={e=>D_end(e,index)}>
            <p className={`${msg.completed?"complete":""}`} >{msg.input}</p>
            <button onClick={()=>doneHandler(msg)}>完成</button>
            {/* <button onClick={()=>editHandler(msg)}>修改</button> */}
            <button onClick={() => deleteHandler(msg)}>刪除</button>
           {msg.isDragging?<div className="drag-indicator"></div>:null}  
        </div>  
        
        )
       )}
       <button className="button"><Link to="/">返回首頁</Link></button>
      
      </div>
    );
  }


export  default List;