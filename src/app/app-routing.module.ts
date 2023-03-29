import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbertsonsMainComponent } from './components/albertsons-main/albertsons-main.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';

import { TechstackComponent } from './components/techstackcatalog/techstackcatalog.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  { path: 'techstackcatalog', component: TechstackComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'albertsons-main', component: AlbertsonsMainComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'people', component: PeopleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
