import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent  {
  color = "red";
  childColor="";

  showChildColor(colorSent) {
    this.childColor= colorSent;
  }

}
