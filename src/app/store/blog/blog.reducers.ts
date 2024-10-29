import { createReducer, on } from "@ngrx/store";
import { addBlog, getBlogItems } from "./blog.action";
import { blogState } from "./blog.state";

const _blogReducers = createReducer(
  blogState,
  on(getBlogItems, (state) => {
    return {
      ...state,
    };
  }),
  on(addBlog, (state, action) => {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  })
);

export const blogReducers = (state: any, action: any) => {
  return _blogReducers(state, action);
};
