import { createAction, props } from "@ngrx/store";
import { BlogItem } from "src/app/models/blog.model";

export const getBlogItems = createAction("getBlogItems");
export const addBlog = createAction("addBlog", props<{ payload: BlogItem }>());
