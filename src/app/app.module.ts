import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PrimaryInputComponent } from "./primary-input/primary-input.component";
import { SectionComponent } from "./section/section.component";
import { PasswordStrengthHintService } from "./services/password-strength-hint.service";
import { StrengthLevelService } from "./services/strength-level.service";
import { StrengthMeterComponent } from "./strength-meter/strength-meter.component";

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
  providers: [StrengthLevelService, PasswordStrengthHintService, provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
