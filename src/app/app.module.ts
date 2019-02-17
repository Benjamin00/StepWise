import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: GridComponent },
  { path: 'usercomponent', component: UserComponent },
  { path: 'listcomponent', component: ListComponent },
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'UserComponent' }
  }]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'stepwise-60ca4'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    MatButtonModule, MatCheckboxModule
  ],
  declarations: [ AppComponent, LoginComponent, LandingComponent, UserComponent, ListComponent, GridComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
// <!-- Routed components go here -->