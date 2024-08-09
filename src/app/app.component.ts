import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SectionComponent } from "./section/section.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  password = new FormControl("");

  get currentLevel() {
    let strength = 0;
    
    if (this.password.value?.match(/[a-zA-Z]+/)) {
        strength += 1
    }
    
    if (this.password.value?.match(/\d+/)) {
        strength += 1
    }
    
    if (this.password.value?.match(/[$@#&!]+/)) {
        strength += 1
    }
    
    return strength;
  }
}
