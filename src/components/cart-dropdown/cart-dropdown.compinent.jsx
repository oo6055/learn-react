import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.action"

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
            cartItems.length ?
            cartItems.map((cartItem) => <CartItem key= {cartItem.id} item={cartItem}></CartItem>)
            :
            <span className="empty-message">your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => createStructuredSelector({
    cartItems : selectCartItem
})
export default withRouter(connect(mapStateToProps)(CartDropdown));