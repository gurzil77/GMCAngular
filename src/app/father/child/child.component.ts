import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() sendColorEvent = new EventEmitter<string>();
  myFavoriteColor = "green"
  constructor() { }
  sendColorToDad() {
    this.sendColorEvent.emit(this.myFavoriteColor)
  }
}
