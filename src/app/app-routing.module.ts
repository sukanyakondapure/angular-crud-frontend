import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'photos/:albumId', component: PhotosComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'userlist/edituser/:userId', component: EdituserComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
