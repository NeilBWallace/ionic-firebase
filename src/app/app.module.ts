import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LandingPage } from '../pages/landing/landing.page';
import { LoginPage } from '../pages/login/login.page';
import { TodosPage } from '../pages/todos/todos.page';
import { TodoModalPage } from '../pages/todo-modal/todo-modal.page';

import { TodoListComponent } from '../components/todo-list/todo-list.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyFirebaseAppConfig } from './my-firebase-app-config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

import { AuthService } from '../services/auth.service';
import { TodoService } from '../services/todo.service';


var config = {
  apiKey: "AIzaSyADvjohjv3ARpl2eBpEfidX61Gx_XR78hU",
  authDomain: "test-d1d50.firebaseapp.com",
  databaseURL: "https://test-d1d50.firebaseio.com",
  projectId: "test-d1d50",
  storageBucket: "test-d1d50.appspot.com",
  messagingSenderId: "735703294568"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LandingPage,
    LoginPage,
    TodosPage,
    TodoListComponent,
    TodoModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    Page1,
    Page2,
    TodosPage,
    TodoModalPage,
  ],
  providers: [
    AuthService,
    TodoService,
    StatusBar,
    SplashScreen,
    // Here we tell the Angular ErrorHandling class
    // that it should be using the IonicErrorHandler class for any errors
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
  constructor() { }
}
