import React, { useState } from 'react';
import Listitem from './Listitem';

const App = () =>{
  const [itemInput, setItemInput] = useState("");
  const [showItem, setShowItem] = useState([]);

const itemEvent = (event) =>{
  setItemInput(event.target.value);
}

const addInput = () =>{
  setShowItem((oldItem)=>{
    return [...oldItem, itemInput]
  })
  setItemInput('');
}

const deleteItems = (id) =>{
  console.log("deleted");
  setShowItem((oldItem)=>{
    return oldItem.filter((arrItem, arrIndex) => {
      return arrIndex !== id;
    });
  });
}

  return(
  <>
    <div className="container">
      <div className="card">
        <div className="heading">
          <h1>To Do List</h1>
        </div>
        <br />
        <div className="add">
          <input type="text" placeholder='Enter Item' onChange={itemEvent} value={itemInput}/>
          <button className='btn' onClick={addInput}> + </button>
        </div>
        <div className='list_item'>
          <ol>
            {/* <li>{itemInput}</li> */}
            
            {showItem.map((show,index)=>{
              return <Listitem text={show}
              id={index}
              key={index}
              onSelect={deleteItems}
              />;
            })}
          </ol>
        </div>
      </div>
    </div>
  </>
  )
}
export default App;