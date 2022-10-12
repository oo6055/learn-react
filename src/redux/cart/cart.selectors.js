import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHideen = createSelector(
    [selectCart],
    (cart) => cart.hidden)

export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItem],
    (cartItems) => cartItems.reduce((accomulation, currentItem) => accomulation + currentItem.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItem],
    (cartItems) => cartItems.reduce((accomulation, currentItem) => accomulation + currentItem.quantity * currentItem.price, 0)
)