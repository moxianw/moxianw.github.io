import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [PageNotFoundComponent, HomeComponent],
  imports: [SharedModule, RoutesRoutingModule]
})
export class RoutesModule {}
