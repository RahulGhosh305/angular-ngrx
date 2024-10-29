import { createFeatureSelector, createSelector } from "@ngrx/store";
import { InitialStateProps } from "../../models/initial-state";

const getCounterState = createFeatureSelector<InitialStateProps>(
  "counterReducerProvider"
);

export const getCount = createSelector(getCounterState, (state) => {
  return state.count;
});

export const getText = createSelector(getCounterState, (state) => {
  return state.text;
});
