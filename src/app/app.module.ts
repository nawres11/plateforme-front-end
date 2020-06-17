import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './FRONT-OFFICE/nav/nav.component';
import { HomeComponent } from './FRONT-OFFICE/home/home.component';
import { FooterComponent } from './FRONT-OFFICE/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuItem, MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import {
  MatButtonToggleModule,
  MatDatepickerModule, MatDialogModule,
  MatGridListModule,
  MatIconModule, MatNativeDateModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import {LoginComponent} from './FRONT-OFFICE/register-Login/login/login.component';
import {RegisterComponent} from './FRONT-OFFICE/register-Login/register/register.component';
import {RegisterLoginComponent} from './FRONT-OFFICE/register-Login/register-login.component';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';
import {MatPassToggleVisibilityComponent, MatPasswordStrengthModule} from '@angular-material-extensions/password-strength';
import {DialogComponent} from './FRONT-OFFICE/register-Login/dialog.component';
import {BACKOFFICEComponent} from './BACK-OFFICE/back-Nav/back-office.component';
import {ServerListComponent} from './BACK-OFFICE/gestion-server/server-list/server-list.component';
import { CreateServerComponent } from './BACK-OFFICE/gestion-server/create-server/create-server.component';
import { ServerDetailsComponent } from './BACK-OFFICE/gestion-server/server-details/server-details.component';
import { UpdateComponent } from './BACK-OFFICE/gestion-server/update/update.component';
import { FluxListComponent } from './BACK-OFFICE/gestion-flux/flux-list/flux-list.component';
import { CreateOpeningRequestComponent } from './BACK-OFFICE/gestion-flux/create-opening-request/create-opening-request.component';
import {httpInterceptorProviders} from './services/auth/auth-interceptor';
import { DashbordComponent } from './BACK-OFFICE/dashbord/dashbord.component';
import { OpeningRequestComponent } from './BACK-OFFICE/gestion-flux/opening-request/opening-request.component';






@NgModule({
  declarations: [
    AppComponent,
    BACKOFFICEComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RegisterLoginComponent,
    DialogComponent,
    ServerListComponent,
    CreateServerComponent,
    ServerDetailsComponent, 
    UpdateComponent,
    FluxListComponent,
    CreateOpeningRequestComponent,
    DashbordComponent,
    OpeningRequestComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, MatButtonModule, MatMenuModule, MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatRadioModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ReactiveFormsModule,
    ShowHidePasswordModule,
    MatPasswordStrengthModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule, MatDialogModule,
    
  ],
  entryComponents: [DialogComponent],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
    } as RecaptchaSettings,
  }, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
