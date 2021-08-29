import React from "react";
import CustomeButton from "../components/Button";
import Routes from "../utils/Routes";
// import { history } from "../utils/Utility";
import { connect } from 'react-redux';
import "../App.css";

import { AppBar, Paper, Grid, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import Stepper from "../components/Stepper";

const Personal = () => {

  const Header = () => {
    return (
      <div className="header">
        <Typography className="title1"> Personal Info</Typography>
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

  return (
    <div className="container">
      <Header />
      <div className="section">
        <div className="box">

          {/* <p>Personal Page</p>
          <CustomeButton navigatePath={Routes.OFFICE} btnName={'Next'} /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Personal);
