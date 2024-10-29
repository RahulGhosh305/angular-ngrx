import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogStateModel } from "src/app/models/blog.model";

const getBlogState = createFeatureSelector<BlogStateModel>(
  "blogReducerProvider"
);

export const getBlogListItems = createSelector(getBlogState, (state) => {
  return state.items;
});
