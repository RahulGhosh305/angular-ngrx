import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { BlogItem, BlogStateModel } from "src/app/models/blog.model";
import { getBlogListItems } from "src/app/store/blog/blog.selector";
import { AddBlogComponent } from "../add-blog/add-blog.component";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit, OnDestroy {
  blogData: BlogItem[];
  blogDataSubcription: Subscription;

  constructor(
    private store: Store<{ blogReducerProvider: BlogStateModel }>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.blogDataSubcription = this.store
      .select(getBlogListItems)
      .subscribe((items) => {
        this.blogData = items;
      });
  }

  AddBlog() {
    this.openPopup();
  }

  openPopup() {
    this.dialog.open(AddBlogComponent, {
      height: "400px",
      width: "600px",
    });
  }

  ngOnDestroy(): void {
    if (this.blogDataSubcription) {
      this.blogDataSubcription.unsubscribe();
    }
  }
}
