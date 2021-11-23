import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs';
import { NavComponent } from './components/nav/nav.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NoResultComponent } from './components/no-result/no-result.component';

const appRoutes: Routes =[
  { path: '', component: MainPageComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: '**', component: NoResultComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    MatFormFieldModule
  ],
  declarations: [AppComponent,
    MainPageComponent, NavComponent,NoResultComponent, RegistrationComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
