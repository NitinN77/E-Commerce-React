import React, { useState, useEffect } from "react";
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import { commerce } from '../../../lib/commerce';
import { useStateValue } from "../../../StateProvider";
 
const steps = ["Shipping Address", "Payment Details"];

function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
        setCheckoutToken(token);
        console.log(token);
      } catch (error) {
        console.log(error.message);
      }
    }
    if(cart){
      generateToken();
    }
  }, []);

  const Form = () => activeStep === 0 ?
  <AddressForm checkoutToken={checkoutToken}/>
  :
  <PaymentForm />

  const Confirmation = () => (
      <div>
          Confirmation
      </div>
  )

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
}

export default Checkout;
