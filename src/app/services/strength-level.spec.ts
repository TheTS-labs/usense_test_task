import { StrengthLevel, StrengthLevelService } from "./strength-level.service";

describe("StrengthLevelService", () => {
  let service: StrengthLevelService;

  beforeEach(() => {
    service = new StrengthLevelService();
  });
  
  it("#toColor should return values according to readonly values", () => {
    expect(service.toColor(StrengthLevel.Empty)).toBe(StrengthLevelService.emptyColor);
    expect(service.toColor(StrengthLevel.Weak)).toBe(StrengthLevelService.weakColor);
    expect(service.toColor(StrengthLevel.Medium)).toBe(StrengthLevelService.mediumColor);
    expect(service.toColor(StrengthLevel.Strong)).toBe(StrengthLevelService.strongColor);
  });

  it("#toString should return values according to readonly values", () => {
    expect(service.toString(StrengthLevel.Empty)).toBe(StrengthLevelService.emptyString);
    expect(service.toString(StrengthLevel.Weak)).toBe(StrengthLevelService.weakString);
    expect(service.toString(StrengthLevel.Medium)).toBe(StrengthLevelService.mediumString);
    expect(service.toString(StrengthLevel.Strong)).toBe(StrengthLevelService.strongString);
  });

  it("#increaseStrength should return next strength value", () => {
    expect(service.increaseStrength(StrengthLevel.Empty)).toBe(StrengthLevel.Weak);
    expect(service.increaseStrength(StrengthLevel.Weak)).toBe(StrengthLevel.Medium);
    expect(service.increaseStrength(StrengthLevel.Medium)).toBe(StrengthLevel.Strong);
  });

  it("#increaseStrength should not increase strength above Strong", () => {
    expect(service.increaseStrength(StrengthLevel.Strong)).toBe(StrengthLevel.Strong);
  });

  it("#assessPasswordStrength returns Empty if string is empty", () => {
    expect(service.assessPasswordStrength("")).toBe(StrengthLevel.Empty);
  });

  it("#assessPasswordStrength returns Weak if string is less than 8 characters", () => {
    expect(service.assessPasswordStrength("p@ssw0r")).toBe(StrengthLevel.Weak);
  });

  it("#assessPasswordStrength returns Weak if string contain only characters/numbers/special characters", () => {
    expect(service.assessPasswordStrength("password")).toBe(StrengthLevel.Weak);
    expect(service.assessPasswordStrength("12345678")).toBe(StrengthLevel.Weak);
    expect(service.assessPasswordStrength("$@#&!$@#&!")).toBe(StrengthLevel.Weak);
  });

  it("#assessPasswordStrength returns Medium if string contain two types of characters", () => {
    expect(service.assessPasswordStrength("pass1234")).toBe(StrengthLevel.Medium);
    expect(service.assessPasswordStrength("pass$@#&")).toBe(StrengthLevel.Medium);
    expect(service.assessPasswordStrength("1234$@#&")).toBe(StrengthLevel.Medium);
  });

  it("#assessPasswordStrength returns Medium if string contains characters, numbers and special characters", () => {
    expect(service.assessPasswordStrength("p@ssw0rd")).toBe(StrengthLevel.Strong);
  });
});