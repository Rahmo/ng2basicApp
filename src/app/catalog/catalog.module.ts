import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogThumbsComponent } from './catalog-thumbs/catalog-thumbs.component';
import { RouterModule, Routes } from '@angular/router';

//Add a route here if you have children too check as in mission Modules
const routes: Routes = [
  {
    path: 'catalog', children: [
      { path: '', component: CatalogThumbsComponent },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    
    //needed to inherit the main route
    RouterModule.forChild(routes),
  ],
  declarations: [CatalogThumbsComponent],
  //Any component that would be exposed need to be written below
   exports: [
    CatalogThumbsComponent
  ]
  
})
export class CatalogModule { }
