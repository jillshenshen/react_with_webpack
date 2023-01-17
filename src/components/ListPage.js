import React ,{useState}from "react";
import List from './List'
import AddForm from './AddForm'

function ListPage() {
  const [messages,setMessages]=useState([]);
  const [editTodo,setEditTodo]=useState(null);
    return (
      <div className="list">
        <AddForm messages={messages}setMessages={setMessages} editTodo={editTodo} setEditTodo={setEditTodo} />  
        <List messages={messages}setMessages={setMessages} setEditTodo={setEditTodo} />     
      </div>
    );
  }


export  default ListPage;