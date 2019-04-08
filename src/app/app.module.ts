import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserAuthService } from 'src/services/user-auth.service';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule,
  MatTabsModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSelectModule,
  MatDialogModule
} from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ImgButtonComponent } from './img-button/img-button.component';
import { AppStateService } from 'src/services/app-state.service';
import { UserComponent } from './user/user.component';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { HomeComponent } from './home/home.component';
import { AppUsersService } from 'src/services/app-users.service';
import { FirestoreService } from 'src/services/firestore.service';
import { SocialButtonComponent } from './social-button/social-button.component';
import { SlideComponent } from './slide/slide.component';
import { MessageComponent } from './message/message.component';
import { ResizeComponent } from './resize/resize.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ImgButtonComponent,
    SocialButtonComponent,
    UserComponent,
    InfoBarComponent,
    HomeComponent,
    SlideComponent,
    MessageComponent,
    ResizeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTabsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [ UserAuthService, AppStateService, AppUsersService, FirestoreService ],
  entryComponents: [ MessageComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
