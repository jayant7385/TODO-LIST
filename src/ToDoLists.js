import React from "react";
let TodoLists=(props)=>{

return(
<>
<div className="todo_style">
    <i className="fas fa-trash-alt"
    onClick={()=>{
        props.onSelect(props.id);
    }}/>

   <li> {props.text}</li>
   {/* <button onClick={()=>{
        props.onEdit(props.id);
    }}>Edit</button> */}
</div>
</>
);
}
export default TodoLists;