/**
 * shared.module
 * see: https://stackoverflow.com/questions/42695931/angular2-coremodule-vs-sharedmodule
 * SharedModule should have anything "but services" and be imported
 * in all modules that need the shared stuff (which could also be the AppModule).
 * --------------------------------------------------------------------------------------
 * Create a SharedModule with the components, directives, and pipes that you use everywhere in your app.
 * This module should consist entirely of declarations, most of them exported.
 * The SharedModule may re-export other widget modules, such as CommonModule, FormsModule,
 * and modules with the UI controls that you use most widely.
 * The SharedModule should not have providers for reasons explained previously.
 * Nor should any of its imported or re-exported modules have providers. If you deviate from this guideline, know what you're doing and why.
 * Import the SharedModule in your feature modules, both those loaded when the app starts and those you lazy load later.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { ZorroModule } from './zorro.module';

const modules: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  ZorroModule,
  OverlayModule
];

const components: any[] = [];

@NgModule({
  imports: [...modules, NzOutletModule],
  exports: [...modules, ...components],
  declarations: [...components]
})
export class SharedModule {}
