import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AlbumsComponent} from './components/albums/albums.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'albums', component: AlbumsComponent}];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
