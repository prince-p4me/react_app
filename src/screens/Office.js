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
import Header from "../components/Header";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      width: '40ch',
    },
  },
  formRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelAlignment: {
    marginRight: '10px',
    marginTop: '10px',
  }
}));


const Offical = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <Header />
      <div className="section">
        <div className="box">
          <Grid container justify="center">
            <form className={classes.root} noValidate autoComplete="off">
              <TextInputContainer label="Building Name" />
              <TextInputContainer label="City/Area" />
              <TextInputContainer label="Landline Number" />
              <TextInputContainer label="Address Line 1" />
              <TextInputContainer label="Address Line 2" />
              <TextInputContainer label="PO Box Number" />
            </form>
            <NextButton navigatePath={Routes.CONFIRMATION} btnName={'Next'} />
          </Grid>

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

export default connect(mapStateToProps, mapDispatchToProps)(Offical);
