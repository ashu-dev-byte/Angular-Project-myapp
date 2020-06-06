import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "First-Angular-Assignment";
  name = "Ashutosh Anand";
  isDisabled = true;
  boolean = true;
  text = "Default Value";
  items = [
    "My Hero Academia",
    "Shingeki no Kyogin",
    "Black Clover",
    "Seven Deadly Sins",
  ];
  flag = true;

  change() {
    this.isDisabled = !this.isDisabled;
    this.boolean = !this.boolean;
  }

  changeFlag() {
    this.flag = !this.flag;
  }
}
