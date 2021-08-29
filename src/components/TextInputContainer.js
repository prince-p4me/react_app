
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formRow:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
    },
    labelAlignment:{
      marginRight: '10px',
      marginTop: '10px',
      width: '16ch',
    }
  }));
function TextInputContainer (props){
    const classes = useStyles();
    return (
        <div className={classes.formRow}>
            <div className={classes.labelAlignment} >{props.label}</div>
            <TextField id="standard-basic" label={props.label}  />
        </div>  
    
    )
}
  
export default TextInputContainer;