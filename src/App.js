import React, { useState } from 'react';
import TodoLists from "./ToDoLists"
const App=()=>{
  const [data,setData]=useState("");
  const [items,setItems]=useState([]);
  let itemEvent=(eve)=>{
    setData(eve.target.value);
  }
  let listOfItems=()=>{
      setItems((oldItem)=>{
        return ([...oldItem,data])
      })
      setData("");
  }
  let deleteItems=(id)=>{
    setItems((oldItem)=>{
     return oldItem.filter((arrElem,index)=>{
         return index !==id;
     })
    })
  }
  // let editItem=(id)=>{
  //   setItems((edItem)=>{
  //    return edItem.filter((arrElem,index)=>{
  //        if(index ===id){
           
  //        } ;
  //    })
  //   })
  // }
  return(
    <>
   <div className="main_div">
     <div className="center_div">
       <br/>
       <h1>My ToDo List</h1>
       <br/>
       <input type="text"
        placeholder="Add A Item"
        onChange={itemEvent}
        value={data}
        />
       <button onClick={listOfItems}>+</button> 
        <ol>
         {/* <li>{data}</li> */}
        {items.map((itemval,index)=>{
         return <TodoLists
          key={index}
          id={index}
          onSelect={deleteItems}
          text={itemval}
          // onEdit={editItem}
          />
          })}
        </ol>
       </div>
   </div>     
    </>
  );
}
export default App;