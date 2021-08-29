
import React from 'react';
import { useHistory } from 'react-router-dom';

function Button (props){
    console.log({props:props});
    const history = useHistory();
    const handleClick=()=>{
        history.push(props.navigatePath);
    }
    return (
        <div>
            <button onClick={()=>{
                handleClick();
            }}>{props.btnName}</button>
        </div>    
    
    )
}
  
export default Button;