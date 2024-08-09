import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
