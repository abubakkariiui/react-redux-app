import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import itemsSlice from "../features/items/itemsSlice";

/**
 * The Redux store configuration.
 *
 * @typedef {Object} Store
 * @property {Function} dispatch - A function to dispatch actions to change the state.
 * @property {Function} getState - A function to get the current state of the store.
 * @property {Function} subscribe - A function to subscribe to store updates.
 * @property {Function} replaceReducer - A function to replace the store's reducer function.
 */

/**
 * The Redux store.
 *
 * @type {Store}
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsSlice,
  },
});
