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
// import 'hammerjs';
import { NavComponent } from './components/nav/nav.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { SearchComponent } from './components/search/search.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { RegisterPanelComponent } from './components/register-panel/register-panel.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes =[
  { path: '', component: MainPageComponent},
  {path:'registration', component:RegistrationComponent},
  { path: 'search', component: SearchComponent },
  { path: '**', component: NoResultComponent },
  { path: 'admin-panel', component: AdminPanelComponent},
  { path: 'register-panel', component: RegisterPanelComponent},


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
    MatPaginatorModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
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
    MatFormFieldModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  declarations: [AppComponent,
    MainPageComponent, NavComponent,NoResultComponent, RegistrationComponent, SearchComponent, ProfileComponent],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
