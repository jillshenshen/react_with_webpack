import React, { useRef, useState } from 'react'


export default function DragPage() {
  const data=[
    {title:"To do",items:["1","2","3"]},
    {title:"Doing",items:[]},
    {title:"Done",items:[]},
    {title:"Failed",items:[]},
  ]  
   
  const [list,setList]=useState(data)
  const [dragging,setDragging]=useState(false)

  const dragItem=useRef()
  const dragNode=useRef()


  const D_start=(e,index)=>{
    console.log("drag start",index,e.target)
    dragItem.current=index
    dragNode.current=e.target
    dragNode.current.addEventListener('dragend',D_end)
 

    setTimeout(()=>{
        setDragging(true)
    },0)
   

  }

  const D_enter=(e,index)=>{
    console.log("enter",index.grpI,index.itemI)
    const currentItem=dragItem.current
    if(e.target!==dragNode.current){
        console.log("target is not the same")
        setList(preList=>{
            let newList=JSON.parse(JSON.stringify(preList))
        
            newList[index.grpI].items.splice(index.itemI,0,newList[currentItem.grpI].items.splice(currentItem.itemI,1)[0])
            
            dragItem.current=index
            return newList
        })
    }




  }

  const D_end=()=>{
    setDragging(false)
  
    dragNode.current.removeEventListener('dragend',D_end)
    dragItem.current=null;
    dragNode.current=null;
  }



  const getStyle=(index)=>{
    const currentItem=dragItem.current
    if(currentItem.grpI===index.grpI&&currentItem.itemI===index.itemI){
        return 'current dnd-item'
    }
    return 'dnd-item'
  }

  return (
   <div className="dragPage">
     <header className='drag-header'>
     <div className="drag-n-drop">
      {list.map((grp,grpI)=>(
          
           <div  key={grp.title} 
                 className="dnd-group"
                 onDragEnter={dragging&&!grp.items.length?(e)=>{D_enter(e,{grpI,itemI:0})}:null}     
                 
                 
            >
             <div className="group-title">{grp.title}</div>
             {grp.items.map((item,itemI)=>(
                <div draggable droppable
                onDragStart={(e)=>{D_start(e,{grpI,itemI})}}

                onDragEnter={(e)=>{
                    D_enter(e,{grpI,itemI})
                }}
                // onDragEnd={(e)=>{
                //     D_end({grpI,itemI})
                // }}

                key={item} className={dragging?getStyle({grpI,itemI}):"dnd-item"}>{item}</div>
             ))}
           </div>
      ))}

     </div>
     

       {/* <div className="drag-n-drop">
        <div className="dnd-group">
           <div className="group-title">Group 1</div>
            <div className="dnd-item">
                <p>item</p>
            </div>
            <div className="dnd-item">
                <p>item</p>
            </div>
            <div className="dnd-item">
                <p>item</p>
            </div>
        </div>

        <div className="dnd-group">
        <div className="group-title">Group 2</div>
            <div className="dnd-item">
                <p>item</p>
            </div>
            <div className="dnd-item">
                <p>item</p>
            </div>
          
        </div>
        <div className="dnd-group">
        <div className="group-title">Group 3</div>
            <div className="dnd-item">
                <p>item</p>
            </div>
          
        </div>
       </div> */}
     </header>
   </div>
  )
}
