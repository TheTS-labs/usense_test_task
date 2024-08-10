import { Component, inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { StrengthLevel, StrengthLevelService } from "./strength-level.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  private strengthLevelService = inject(StrengthLevelService);

  strengthLevel: typeof StrengthLevel = StrengthLevel;
  password = new FormControl("");

  get currentLevel(): StrengthLevel {
    return this.strengthLevelService.assessPasswordStrength(this.password.value || "");
  }
}