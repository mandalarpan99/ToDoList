import React from 'react';


const Listitem = (props) =>{

    
    return(
        <>
            <div> 
            <li> <i className="fa-solid fa-xmark delicon" onClick={()=>{
                props.onSelect(props.id);
            }}></i> {props.text}</li>
            </div>
            
        </>
    )
}


export default Listitem;