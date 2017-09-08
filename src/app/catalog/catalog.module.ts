import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogThumbsComponent } from './catalog-thumbs/catalog-thumbs.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieSummaryComponent } from './movie-summary/movie-summary.component';
import { MovieService } from './movie.service';
import { MaterialModule } from '../material.module';
import { MovieSideCardComponent } from './movie-side-card/movie-side-card.component';
import { ChartsModule } from 'ng2-charts';
import { MoviesChartComponent } from './movies-chart/movies-chart.component';
import {
  MdButtonModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule,
  MdGridListModule
} from '@angular/material';
//Add a route here if you have children too check as in mission Modules

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule
  ],
  declarations: [CatalogThumbsComponent, MovieSummaryComponent, MovieSideCardComponent, MoviesChartComponent],
  //Any component that would be exposed need to be written below
   exports: [
    CatalogThumbsComponent,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule
  ],
  providers: [MovieService]
  
})
export class CatalogModule { }
