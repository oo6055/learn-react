import React from "react";
import { ReactComponent as ShoppeingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { connect } from "react-redux";

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppeingIcon className="shopping-icon"></ShoppeingIcon>
        <span className="item-count">0</span>
    </div>
)

const mapDisPatchToProps = disptach => ({
    toggleCartHidden : () => disptach(toggleCartHidden())
})
export default connect(null, mapDisPatchToProps)(CartIcon);