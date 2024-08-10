import { Component, inject, Input } from "@angular/core";

import { PasswordStrengthHintService } from "../services/password-strength-hint.service";
import { StrengthLevel, StrengthLevelService } from "../services/strength-level.service";

@Component({
  selector: "app-strength-meter",
  templateUrl: "./strength-meter.component.html",
  styleUrl: "./strength-meter.component.css"
})
export class StrengthMeterComponent {
  @Input({ required: true }) currentLevel: StrengthLevel = StrengthLevel.Empty;
  @Input({ required: true }) password = "";

  private strengthLevelService = inject(StrengthLevelService);
  private passwordStrengthHintService = inject(PasswordStrengthHintService);

  strengthLevel: typeof StrengthLevel = StrengthLevel;

  get currentLevelString(): string { return this.strengthLevelService.toString(this.currentLevel); }
  get currentLevelColor(): string { return this.strengthLevelService.toColor(this.currentLevel); }
  get currentHint(): string { return this.passwordStrengthHintService.getHint(this.password); }
  
  passwordTooShort(): boolean { return this.password.length < 8; }
  passwordIsEmpty(): boolean { return this.password.length == 0; }
}
