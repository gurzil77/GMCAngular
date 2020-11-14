import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  title = 'eventBindingCheckpoint';
  newColor;
  getColor(input) {
    this.newColor = input;
  }
  resetColor() {
    this.newColor = null;
  }
}