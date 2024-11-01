import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { CounterStateModel } from "src/app/models/counter.model";
import { customIncrement } from "src/app/store/counter/counter.actions";
import { getText } from "src/app/store/counter/counter.selector";

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
    private store: Store<{ counterReducerProvider: CounterStateModel }>
  ) {}

  ngOnInit() {
    this.counterSubscribe = this.store.select(getText).subscribe((text) => {
      this.displayText = text;
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
