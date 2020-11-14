import { Component,Output,EventEmitter } from '@angular/core';
import { Personne } from '../cv.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output() selectedPersonEmitter = new EventEmitter<Personne>();
  
 
  firstCV= {
    id: 1,
    age: 23,
    cin: 1234,
    firstname: "Mike",
    name: "Stewart",
    path: "Path1",
    job: "Engineer"
    }
    
    secondCV ={
    id: 2,
    age: 33,
    cin: 5415,
    firstname: "Michael",
    name: "Jordan",
    path: "Path2",
    job: "Doctor"
    }
    
    thirdCV = {
    id: 3,
    age: 45,
    cin: 8354,
    firstname: "George",
    name: "Bush",
    path: "Path3",
    job: "Lawyer"
    }
    
    listOfCvs : Personne[]= [this.firstCV, this.secondCV , this.thirdCV]
        selectFromList(cv) {
      this.selectedPersonEmitter.emit(cv);
      }
    /*
    firstClicked() {
      this.selectedPersonEmitter.emit(this.firstCV);
      }
      
      secondClicked() {
      this.selectedPersonEmitter.emit(this.secondCV);
      }
      
      thirdClicked() {
      this.selectedPersonEmitter.emit(this.thirdCV);
      } */
}
