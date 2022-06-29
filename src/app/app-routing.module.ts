import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'investigators', loadChildren: () => import('./investigators/investigators.module').then(m => m.InvestigatorsModule) },
  { path: '**', redirectTo: 'investigators'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
