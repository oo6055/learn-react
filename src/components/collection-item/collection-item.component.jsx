import React from "react";
import './collection-item.styles.scss'
import {connect} from 'react-redux'
import { addItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ item, addItem}) =>
{
    const {id, name, price, imageUrl} = item;
    return(
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage : `url(${imageUrl})`
            }}>
        </div>
    <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price">{ price }</span>
    </div>  
    
        <CustomButton onClick={() => addItem(item)} className="custom-button" inverted={true} >Add to cart</CustomButton>  
    </div>)
}

const mapDisPatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default  connect(null, mapDisPatchToProps)(CollectionItem);