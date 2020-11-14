import { Component } from '@angular/core';


@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css']
})
export class RotatingCardComponent {
  name="Inna";
  prenom="Corman";
  job = "Product Manager";
  image = "https://demos.creative-tim.com/rotating-css-card/images/rotating_card_profile.png"
  citation= "I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"
  decriver= "J enseigne aux etudiants les technos du web"
  cle= "html CSS Javascript PHP Angular"
}
