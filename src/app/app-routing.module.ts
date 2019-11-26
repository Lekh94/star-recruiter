import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './notFound-page/notFound-page.component';
import { NzIconModule, NzButtonModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NzIconModule,
    NzButtonModule
  ],
  exports: [RouterModule],
  declarations: [NotFoundPageComponent]
})
export class AppRoutingModule { }
