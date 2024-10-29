import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { CounterStateModel } from "src/app/models/counter.model";

import {
  decrement,
  increment,
  rename,
  reset,
} from "src/app/store/counter/counter.actions";

@Component({
  selector: "app-counter-button",
  templateUrl: "./counter-button.component.html",
  styleUrls: ["./counter-button.component.css"],
})
export class CounterButtonComponent implements OnInit {
  constructor(
    private store: Store<{ counterReducerProvider: CounterStateModel }>
  ) {}

  ngOnInit() {}

  OnIncrement() {
    this.store.dispatch(increment());
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }

  OnReset() {
    this.store.dispatch(reset());
  }

  OnRenameProject() {
    this.store.dispatch(rename());
  }
}
