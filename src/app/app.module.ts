import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CounterButtonComponent } from "./components/counter-button/counter-button.component";
import { CounterDisplayComponent } from "./components/counter-display/counter-display.component";
import { CustomIncrementComponent } from "./components/custom-increment/custom-increment.component";
import { MaterialModule } from "./material/material.module";
import { counterReducer } from "./store/counter.reducers";

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomIncrementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ firstReducerProvider: counterReducer }),
    BrowserAnimationsModule,
    MaterialModule,
    StoreDevtoolsModule.instrument({
      maxAge: false, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
