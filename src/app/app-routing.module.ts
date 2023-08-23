import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./layout/layout.module').then((m) => m.LayoutModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
