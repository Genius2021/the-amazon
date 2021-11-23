import React from 'react'
import { Link } from 'react-router-dom';

function CheckoutSteps(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? "active" : ""}><Link className={!props.step1 ? "graded-out" : "active"} to="/signin">Sign-In</Link></div>
            <div className={props.step2 ? "active" : ""}><Link className={!props.step2 ? "graded-out" : "active"} to="/shipping">Shipping</Link></div>
            <div className={props.step3 ? "active" : ""}><Link className={!props.step3 ? "graded-out" : "active"} to="/payment">Payment</Link></div>
            <div className={props.step4? "active": ""}><Link className={!props.step4 ? "graded-out" : "active"} to="/placeorder">Place Order</Link></div>
            </div>
            );
}

            export default CheckoutSteps
