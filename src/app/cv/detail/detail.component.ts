import { Component, Input } from '@angular/core';
import { Personne } from '../cv.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() person = new Personne
  
  constructor() {
   }
}
