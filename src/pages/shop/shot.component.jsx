import React from "react";
import SHOPDATA from "./shot.data";
import PreviewCollection from '../../components/preview-collection/preview-collection.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collection : SHOPDATA
        }
    }
    render() {
        const { collection } = this.state
        return <div className="shop-page">
        {collection.map(({id, ...otherCollectionProps}) => 
            <PreviewCollection key={id} {...otherCollectionProps} >
            </PreviewCollection>
            )}
        </div> 
    }
}

export default ShopPage