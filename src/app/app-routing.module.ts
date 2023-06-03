import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BaptismComponent } from './components/baptism/baptism.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventsComponent } from './components/events/events.component';
import { GetinvolvedComponent } from './components/getinvolved/getinvolved.component';
import { MinisteriesComponent } from './components/ministeries/ministeries.component';
import { NextstepsComponent } from './components/nextsteps/nextsteps.component';
import { SmallgroupsComponent } from './components/smallgroups/smallgroups.component';
import { ErrorComponent } from './components/error/error.component';
import { ServeComponent } from './components/serve/serve.component';
import { DireccionescelulasComponent } from './components/direccionescelulas/direccionescelulas.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'involved/baptism',component:BaptismComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'events', component:EventsComponent},
  {path: 'involved', component:GetinvolvedComponent},
  {path: 'ministeries', component: MinisteriesComponent},
  {path: 'involved/nextsteps', component: NextstepsComponent},
  {path:'serve', component: ServeComponent},
  {path:'involved/smallgroups', component: SmallgroupsComponent},
  {path:'involved/smallgroups/direccionescelulas', component: DireccionescelulasComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
