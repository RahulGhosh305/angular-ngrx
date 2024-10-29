import { createReducer, on } from "@ngrx/store";
import {
  customIncrement,
  decrement,
  increment,
  rename,
  reset,
} from "./counter.actions";
import { counterState } from "./counter.state";

// Fix the name _state to state for correct reference
const _counterReducer = createReducer(
  counterState,
  on(increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      count: state.count - 1 > 0 ? state.count - 1 : (state.count = 0),
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      count: (state.count = 0),
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      count:
        action.types === "add"
          ? state.count + action.payload
          : state.count - action.payload,
    };
  }),
  on(rename, (state) => {
    return {
      ...state,
      text: "NgRx",
    };
  })
);

// Export the function properly
export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
