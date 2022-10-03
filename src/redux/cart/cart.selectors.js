import { createSelector } from "reselect";

const selectCart = state => state.cart;


export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItem],
    (cartItems) => cartItems.reduce((accomulation, currentItem) => accomulation + currentItem.quantity, 0)
)