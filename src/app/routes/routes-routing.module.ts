import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'index',
    component: HomeComponent,
    data: {
      title: 'index'
    }
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    data: {
      title: '404页面未找到'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      title: '404页面未找到'
    }
  }
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: QuicklinkStrategy,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class RoutesRoutingModule {}
