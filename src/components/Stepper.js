import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { setRoute } from "../redux/action";
import Routes from '../utils/Routes';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...';
    case 1:
      return 'Step 2: What is an ad group anyways?';
    case 2:
      return 'Step 3: This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const StepperScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const routeName = useSelector(state => state.getRoute);
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  console.log("routeName", routeName);
  console.log("history", history);

  useEffect(() => {
    setRoute(history.location.pathname);
    setCompleted(history.location.pathname == routeName);
  }, [history.location]);

  useEffect(() => {

  }, [])

  const handleStep = (step) => () => {
    setActiveStep(step);
    console.log("step", step);
    switch (step) {
      case 0:
        history.push(Routes.PERSONAL);
        break;
      case 1:
        history.push(Routes.OFFICE);
        break;
      case 2:
        history.push(Routes.CONFIRMATION);
        break;
    }
  };

  function isStepComplete(step) {
    // return completed.has(step);
    return history.location.pathname == routeName;
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={completed}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
}

export default StepperScreen;