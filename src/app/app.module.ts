import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { RotatingCardComponent } from './rotating-card/rotating-card.component';
import { FormsModule } from '@angular/forms';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './father/son/son.component';
import { ChildComponent } from './father/child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    RotatingCardComponent,
    FatherComponent,
    SonComponent,
    ChildComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
