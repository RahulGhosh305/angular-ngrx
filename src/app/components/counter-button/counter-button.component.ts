import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { InitialStateProps } from "src/app/models/initial-state";
import {
  decrement,
  increment,
  reset,
} from "../../store/counter/counter.actions";

@Component({
  selector: "app-counter-button",
  templateUrl: "./counter-button.component.html",
  styleUrls: ["./counter-button.component.css"],
})
export class CounterButtonComponent implements OnInit {
  constructor(
    private store: Store<{ counterReducerProvider: InitialStateProps }>
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
}
