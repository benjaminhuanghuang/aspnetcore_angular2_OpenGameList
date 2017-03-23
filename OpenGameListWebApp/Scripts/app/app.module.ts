import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ItemListComponent } from "./item-list.component";
import { ItemDetailComponent } from "./item-detail.component";
import { ItemService } from "./item.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],

  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent
  ],

  providers: [
    ItemService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
