import { Component, inject, Input } from "@angular/core";

import { StrengthLevel, StrengthLevelService } from "../strength-level.service";

@Component({
  selector: "app-section",
  template: `
    <div [style.background-color]="strengthLevelColor" class="section"></div>
  `,
  styles: `
    :host { flex: 1; }

    .section {
      height: 10px;
      width: auto;
      box-shadow: inset 0px 0px 0px 1px white;
    }
  `
})
export class SectionComponent {
  @Input({ required: true }) strengthLevel: StrengthLevel = StrengthLevel.Empty;
  @Input({ required: true }) threshold: StrengthLevel = StrengthLevel.Empty;
  private service = inject(StrengthLevelService);

  get strengthLevelColor() {
    if (this.strengthLevel < this.threshold) {
      return StrengthLevelService.emptyColor;
    }

    return this.service.toColor(this.strengthLevel);
  }
}
