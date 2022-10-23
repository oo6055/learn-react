import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) =>
 {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51LvqSiI6PCCQlE6Ffk0GpEB1jQuWzpz8RPKqNV6oHiZEOoA4GfuvNtbURvm9KswU2k11LyNWTNFWsykAUCrIJxoU007buLClnI';
    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    };

    return (
        <StripeCheckout 
        label="Pay Now"
        name="CRWN Clothing Ltd"
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel={"Pay Now"}
        token={onToken}
        stripeKey={publishKey}/>
    )
 }

export default StripeCheckoutButton;