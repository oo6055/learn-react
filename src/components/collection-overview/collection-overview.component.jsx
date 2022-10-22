import React from "react";  
import './collection-overview.styles.scss'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) => 
            <PreviewCollection key={id} {...otherCollectionProps} >
            </PreviewCollection>
            )}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);