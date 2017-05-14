import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogThumbsComponent } from './catalog-thumbs/catalog-thumbs.component';
import { RouterModule, Routes } from '@angular/router';

//Add a route here if you have children too check as in mission Modules

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CatalogThumbsComponent],
  //Any component that would be exposed need to be written below
   exports: [
    CatalogThumbsComponent
  ]
  
})
export class CatalogModule { }
