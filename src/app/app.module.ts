import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import {RepositoryService} from "./services/repo.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, UserService,RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
