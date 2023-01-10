import React from "react";
import { Link } from 'react-router-dom';

function List({messages,setMessages}) {
   const deleteHandler=(msg)=>{
      setMessages(messages.filter((m)=>m.id!==msg.id));

   }
    return (
      <div className="list">
       {messages.map((msg)=>(
        <div className="list-array">
            <p>{msg.input}</p>
            <button onClick={() => deleteHandler(msg)}>刪除</button>
        </div>     
        )
       )}
       <button className="button"><Link to="/">返回首頁</Link></button>
       
      </div>
    );
  }


export  default List;