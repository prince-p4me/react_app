
import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    alignment:{
        marginTop: '20%',
        marginLeft: '10%',
    }
  }));

function NextButton (props){
    const classes = useStyles();
    const history = useHistory();
    const handleClick=()=>{
        history.push(props.navigatePath);
    }
    return (
        <div className={classes.alignment}>
            <Button variant="contained" color="secondary" onClick={()=>{
                handleClick();
            }}>{props.btnName}</Button>
        </div>    
    
    )
}
  
export default NextButton;