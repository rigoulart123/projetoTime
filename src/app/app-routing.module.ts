import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { TimesComponent } from './times/times.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'times', component: TimesComponent },
  { path: 'jogadores', component: JogadoresComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
