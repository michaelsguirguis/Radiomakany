import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { SlideComponent } from './transformations/slide.component';
import { ResizeComponent } from './transformations/resize.component';
import { InfoBarComponent } from './components/infobar.component';
import { LoginFormComponent } from './forms/login.form';
import { RegisterFormComponent } from './forms/register.form';
import { StateService } from './services/state.service';
import { routing } from './app.routing';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideComponent,
    ResizeComponent,
    InfoBarComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    routing,
  ],
  providers: [StateService,	UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

