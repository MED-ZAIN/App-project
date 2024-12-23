import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyInterface } from './models/my-interface';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllemployeComponent } from './allemploye/allemploye.component';
import { AddemployeComponent } from './addemploye/addemploye.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AllemployeComponent,
    AddemployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
