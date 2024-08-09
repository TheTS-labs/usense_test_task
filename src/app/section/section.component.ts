import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-component',
  template: `
    <p [style.background-color]="strengthLevelColor">
      {{ text }}
    </p>
  `,
})
export class SectionComponent {
  @Input({ required: true }) strengthLevel: number = 0;
  @Input({ required: true }) threshold: number = 0;
  @Input({ required: true }) text: string = "";

  get strengthLevelColor() {
    if (this.strengthLevel < this.threshold) {
      return 'gray';
    }

    switch (this.strengthLevel) {
      case 1:
        return 'red';
      case 2:
        return 'yellow';
      case 3:
        return 'green';
      default:
        return 'gray';
    }
  }
}
