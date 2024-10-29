import { createReducer, on } from "@ngrx/store";
import { getBlogItems } from "./blog.action";
import { blogState } from "./blog.state";

const _blogReducers = createReducer(
  blogState,
  on(getBlogItems, (state) => {
    return {
      ...state,
    };
  })
);

export const blogReducers = (state: any, action: any) => {
  return _blogReducers(state, action);
};
