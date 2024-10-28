import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { InitialStateProps } from "src/app/models/initial-state";
import { getText } from "src/app/store/all-state.selector";
import { customIncrement } from "src/app/store/all.actionTypes";

@Component({
  selector: "app-custom-increment",
  templateUrl: "./custom-increment.component.html",
  styleUrls: ["./custom-increment.component.css"],
})
export class CustomIncrementComponent implements OnInit, OnDestroy {
  types: string = "add";
  counterInput!: any;
  displayText: string | undefined;
  counterSubscribe!: Subscription;

  constructor(
    private store: Store<{ firstReducerProvider: InitialStateProps }>
  ) {}

  ngOnInit() {
    this.counterSubscribe = this.store.select(getText).subscribe((data) => {
      this.displayText = data;
    });
  }

  OnCustomIncrement() {
    this.store.dispatch(
      customIncrement({ payload: +this.counterInput, types: this.types })
    );
  }

  ngOnDestroy(): void {
    if (this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
  }
}
