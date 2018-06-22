import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";

import {HomePageComponent} from "./home-page/home-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";
//import {CarsModule} from "./cars-page/cars.module";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cars', loadChildren: './cars-page/cars.module#CarsModule'},

  {path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
