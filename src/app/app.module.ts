import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BlogComponent } from "./components/blog/blog.component";

import { CounterDisplayComponent } from "./components/counter/counter-display/counter-display.component";
import { CustomIncrementComponent } from "./components/counter/custom-increment/custom-increment.component";
import { MenuComponent } from "./components/menu/menu.component";
import { MaterialModule } from "./material/material.module";
import { counterReducer } from "./store/counter/counter.reducers";

import { CounterButtonComponent } from "./components/counter/counter-button/counter-button.component";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomIncrementComponent,
    MenuComponent,
    BlogComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counterReducerProvider: counterReducer }),
    BrowserAnimationsModule,
    FormsModule,
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
