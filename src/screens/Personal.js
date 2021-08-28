import React from "react";
import Button from "../components/Button";
import Routes from "../utils/Routes";
// import { history } from "../utils/Utility";
import { connect } from 'react-redux';


const Personal = () => {
  return (
    <div >
      <p>Personal Page</p>
      <Button navigatePath={Routes.OFFICE} />
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
