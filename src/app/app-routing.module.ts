import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent},
  {path:'network',canActivate:[AuthGuard],component:NetworkComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuard],component:MoviedetailsComponent},
  {path:'tvdetails/:id',canActivate:[AuthGuard],component:TvdetailsComponent},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:"people",component:PeoplesComponent},
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },

  {path:'**',canActivate:[AuthGuard],component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
