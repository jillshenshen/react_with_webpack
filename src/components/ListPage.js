import React ,{useState}from "react";
import List from './List'
import AddForm from './AddForm'

function ListPage() {
  let [messages,setMessages]=useState([]);

    return (
      <div className="list">
        <AddForm messages={messages}setMessages={setMessages}/>  
        <List messages={messages}setMessages={setMessages}/>     
      </div>
    );
  }


export  default ListPage;