import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStrip } from '@stripe/stripe-js';
import Review from './Review';


function PaymentForm() {
    return (
        <>
        <Review />
        </>
    );
}

export default PaymentForm;
