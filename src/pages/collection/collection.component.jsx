import React from "react";
import './category.styles.scss'
import collectionItemComponent from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItemComponent from "../../components/collection-item/collection-item.component";
const CollectionPage = ({collection}) =>
{
    console.log({collection});
    const { title, items} = collection;
    return (
    <div className="collection-page">
        <h2 className="title">{ title}</h2>
        <div className="items">
            {
                items.map(item => <CollectionItemComponent key={item.id} item={item}></CollectionItemComponent>)
            }
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);