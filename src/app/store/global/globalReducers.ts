import { blogReducers } from "../blog/blog.reducers";
import { counterReducer } from "../counter/counter.reducers";

export const globalReducer = {
  counterReducerProvider: counterReducer,
  blogReducerProvider: blogReducers,
};
