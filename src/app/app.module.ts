import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SectionComponent } from "./section/section.component";
import { StrengthLevelService } from "./strength-level.service";
import { PasswordStrengthHintService } from "./password-strength-hint.service";
import { StrengthMeterComponent } from "./strength-meter/strength-meter.component";
import { PrimaryInputComponent } from './primary-input/primary-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    StrengthMeterComponent,
    PrimaryInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [StrengthLevelService, PasswordStrengthHintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
