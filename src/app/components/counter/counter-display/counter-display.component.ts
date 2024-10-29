import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { CounterStateModel } from "src/app/models/counter.model";
import { getCount, getText } from "src/app/store/counter/counter.selector";

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
    private store: Store<{ counterReducerProvider: CounterStateModel }>
  ) {}

  ngOnInit() {
    this.counterSubscribe = this.store.select(getCount).subscribe((count) => {
      this.displayCount = count;
    });
    this.textSubscribe = this.store.select(getText).subscribe((text) => {
      this.displayText = text;
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
