import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { BlogItem, BlogStateModel } from "src/app/models/blog.model";
import { getBlogListItems } from "src/app/store/blog/blog.selector";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  blogData: BlogItem[];
  blogDataSubcription: Subscription;
  constructor(private store: Store<{ blogReducerProvider: BlogStateModel }>) {}

  ngOnInit() {
    this.blogDataSubcription = this.store
      .select(getBlogListItems)
      .subscribe((items) => {
        this.blogData = items;
      });
  }

  ngOnDestroy(): void {
    if (this.blogDataSubcription) {
      this.blogDataSubcription.unsubscribe();
    }
  }
}
