import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';

import { UserService } from './services/user.service';
import { AdduserComponent } from './components/adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdituserComponent } from './components/edituser/edituser.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AlbumsComponent,
    PhotosComponent,
    AdduserComponent,
    EdituserComponent,
    LoginComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
    
   
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
