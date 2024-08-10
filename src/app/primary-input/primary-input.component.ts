import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-primary-input",
  templateUrl: "./primary-input.component.html",
  styleUrl: "./primary-input.component.css"
})
export class PrimaryInputComponent<T> {
  @Input({ required: true }) control = new FormControl<T | null>(null);
  @Input({ required: true }) label = "";
  @Input({ required: true }) placeholder = "";
}
