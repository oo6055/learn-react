import React from "react";
import { ReactComponent as ShoppeingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { connect } from "react-redux";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppeingIcon className="shopping-icon"></ShoppeingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDisPatchToProps = disptach => ({
    toggleCartHidden : () => disptach(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
})
export default connect(mapStateToProps, mapDisPatchToProps)(CartIcon);