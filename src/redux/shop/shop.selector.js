import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = memoize(collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam])
)

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collection => Object.keys(collection).map(key=> collection[key])
)