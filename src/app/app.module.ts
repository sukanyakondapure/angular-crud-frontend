import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
   
    AlbumsComponent,
    PhotosComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
    
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
