import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { InitialStateProps } from "src/app/models/initial-state";
import { getCount, getText } from "src/app/store/all-state.selector";

@Component({
  selector: "app-counter-display",
  templateUrl: "./counter-display.component.html",
  styleUrls: ["./counter-display.component.css"],
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  displayCount: number;
  displayText: string;
  counterSubscribe: Subscription;
  textSubscribe!: Subscription;

  // countData$: Observable<InitialState>;
  constructor(
    private store: Store<{ firstReducerProvider: InitialStateProps }>
  ) {}

  ngOnInit() {
    this.counterSubscribe = this.store.select(getCount).subscribe((data) => {
      this.displayCount = data;
    });
    this.textSubscribe = this.store.select(getText).subscribe((data) => {
      this.displayText = data;
    });
    // Another Way set Data
    // this.countData$ = this.store.select("counter");
  }

  ngOnDestroy(): void {
    if (this.counterSubscribe) {
      this.counterSubscribe.unsubscribe();
    }
    if (this.textSubscribe) {
      this.textSubscribe.unsubscribe();
    }
  }
}
