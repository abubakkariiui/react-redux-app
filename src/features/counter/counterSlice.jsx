import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

/**
 * Redux slice for managing the counter state.
 *
 * @typedef {Object} CounterState
 * @property {number} value - The current value of the counter.
 */

/**
 * Redux slice for managing the counter state.
 *
 * @type {import("@reduxjs/toolkit").Slice<CounterState>}
 */
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    /**
     * Increment the counter value by 1.
     *
     * @param {CounterState} state - The current counter state.
     */
    increment: (state) => {
      state.value += 1;
    },

    /**
     * Decrement the counter value by 1.
     *
     * @param {CounterState} state - The current counter state.
     */
    decrement: (state) => {
      state.value -= 1;
    },

    /**
     * Increment the counter value by a specified amount.
     *
     * @param {CounterState} state - The current counter state.
     * @param {import("@reduxjs/toolkit").PayloadAction<number>} action - The action containing the payload (amount to increment by).
     */
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
