import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StrengthLevelService {
  static readonly emptyColor = "#1f1f1f";
  static readonly weakColor = "#ee5742";
  static readonly mediumColor = "#fea225";
  static readonly strongColor = "#39c369";

  static readonly emptyString = "";
  static readonly weakString = "Weak";
  static readonly mediumString = "Medium";
  static readonly strongString = "Strong";

  static readonly alphaCharacters = /[a-zA-Z]+/;
  static readonly numericCharacters = /\d+/;
  static readonly specialCharacters = /[$@#&!]+/;

  public toColor(strengthLevel: StrengthLevel): string {
    switch (strengthLevel) {
      case StrengthLevel.Empty:
        return StrengthLevelService.emptyColor;

      case StrengthLevel.Weak:
        return StrengthLevelService.weakColor;

      case StrengthLevel.Medium:
        return StrengthLevelService.mediumColor;

      case StrengthLevel.Strong:
        return StrengthLevelService.strongColor;
    }
  }

  public toString(strengthLevel: StrengthLevel): string {
    switch (strengthLevel) {
      case StrengthLevel.Empty:
        return StrengthLevelService.emptyString;

      case StrengthLevel.Weak:
        return StrengthLevelService.weakString;

      case StrengthLevel.Medium:
        return StrengthLevelService.mediumString;

      case StrengthLevel.Strong:
        return StrengthLevelService.strongString;
    }
  }

  public increaseStrength(strengthLevel: StrengthLevel): StrengthLevel {
    if (strengthLevel == StrengthLevel.Strong) {
      return strengthLevel
    }
    
    return strengthLevel + 1 as StrengthLevel
  }

  public assessPasswordStrength(password: string): StrengthLevel {
    if (password.length == 0) {
      return StrengthLevel.Empty;
    }

    if (password.length < 8) {
      return StrengthLevel.Weak;
    }

    const hasAlphaCharacters = +StrengthLevelService.alphaCharacters.test(password);
    const hasNumericCharacters = +StrengthLevelService.numericCharacters.test(password);
    const hasSpecialCharacters = +StrengthLevelService.specialCharacters.test(password);

    return (hasAlphaCharacters + hasNumericCharacters + hasSpecialCharacters) as StrengthLevel;
  }
}

export enum StrengthLevel {
  Empty,
  Weak,
  Medium,
  Strong
}