import React from "react";
import './header.styles.scss'
import {Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utiles'
import { ReactComponent as Logo } from "../../assets/crown.svg" 
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import { createStructuredSelector } from "reselect";
import { selectCartHideen } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import CartDropdown from "../cart-dropdown/cart-dropdown.compinent";

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo">
            </Logo>
        </Link>        
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {currentUser ? 
            (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>) 
            :
            (<Link className="option" to="/signin">SIGN IN</Link>)
            }
        <CartIcon></CartIcon>

        </div>
        {
            hidden ?
            null
            :
            <CartDropdown></CartDropdown>
        }
        
    </div>

)

const mapStateToProps = (state) => createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHideen
})

export default connect(mapStateToProps)(Header);