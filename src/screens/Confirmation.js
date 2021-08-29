import React from "react";
import NextButton from "../components/Button";
import Routes from "../utils/Routes";
// import { history } from "../utils/Utility";
import { connect } from 'react-redux';
import "../App.css";

import { AppBar, Paper, Grid, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import Stepper from "../components/Stepper";

import { makeStyles } from '@material-ui/core/styles';
import TextInputContainer from "../components/TextInputContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formRow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },

  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Confirmation = () => {
  const classes = useStyles();

  const Header = () => {
    return (
      <div className="header">
        <Typography className="title1"> Confirmation Page</Typography>
        <Stepper />
        <AppBar>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              User
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className="container">
      <Header />
      <div className="section">
        <div className="box">

         <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
            </Grid>
          </div>

          
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
