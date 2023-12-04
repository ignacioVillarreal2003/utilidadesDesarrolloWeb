import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExampleInterceptorInterceptor } from './example-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ 
    provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptorInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
