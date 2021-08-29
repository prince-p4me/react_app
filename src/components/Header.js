import React from "react";
import NextButton from "../components/Button";
import Routes from "../utils/Routes";
// import { history } from "../utils/Utility";
import { connect } from 'react-redux';
import "../App.css";

import { AppBar, Paper, Grid, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import Stepper from "./Stepper";

import { makeStyles } from '@material-ui/core/styles';

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

export default Header;