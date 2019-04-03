import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes = [
    {path: '', component: LandingPageComponent, pathMatch: 'full'}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LangingPageRoutingModule { }