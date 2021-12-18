import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminRegisterEditComponent } from './components/admin-register-edit/admin-register-edit.component';
import { AdminRegistersComponent } from './components/admin-registers/admin-registers.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
// import 'hammerjs';
import { NavComponent } from './components/nav/nav.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterEditComponent } from './components/register-edit/register-edit.component';
import { RegisterPanelComponent } from './components/register-panel/register-panel.component';
import { RegisterPrisonersComponent } from './components/register-prisoners/register-prisoners.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistratorHistoryComponent } from './components/registrator-history/registrator-history.component';
import { SearchComponent } from './components/search/search.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'admin-registers', component: AdminRegistersComponent },
  { path: 'register-panel', component: RegisterPanelComponent },
  { path: 'register-history', component: RegistratorHistoryComponent },
  { path: 'register-edit', component: RegisterEditComponent },
  { path: 'register-prisoners', component: RegisterPrisonersComponent },
  { path: 'admin-register-edit', component: AdminRegisterEditComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: NoResultComponent },
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
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  exports: [
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
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    NavComponent,
    NoResultComponent,
    RegistrationComponent,
    SearchComponent,
    ProfileComponent,
    RegistratorHistoryComponent,
    RegisterEditComponent,
    RegisterPrisonersComponent,
    AdminRegistersComponent,
    AdminRegisterEditComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
