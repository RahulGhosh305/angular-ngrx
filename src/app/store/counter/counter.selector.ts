import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateModel } from "../../models/counter.model";

const getCounterState = createFeatureSelector<CounterStateModel>(
  "counterReducerProvider"
);

export const getCount = createSelector(getCounterState, (state) => {
  return state.count;
});

export const getText = createSelector(getCounterState, (state) => {
  return state.text;
});
