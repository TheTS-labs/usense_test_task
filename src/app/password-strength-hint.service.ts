import { Injectable } from "@angular/core";
import { StrengthLevelService } from "./strength-level.service";

@Injectable({
  providedIn: "root"
})
export class PasswordStrengthHintService {
  getHint(password: string): string {
    if (password.length == 0) {
      return "Let's get started! Please enter a password";
    }

    if (password.length < 8) {
      return "Almost there! Make sure your password has at least 8 characters";
    }

    if (!StrengthLevelService.alphaCharacters.test(password)) {
      return "Add a little magic! Include at least one letter";
    }

    if (!StrengthLevelService.numericCharacters.test(password)) {
      return "Password must contain at least one number";
    }

    if (!StrengthLevelService.specialCharacters.test(password)) {
      return "Spice it up! Add a special character like @, #, or !";
    }

    return "All set! Everything looks cool";
  }
}
