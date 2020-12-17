import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalFooterComponent } from './components/global-footer/global-footer.component';
import { GlobalAsideComponent } from './components/global-aside/global-aside.component';
import { BaseComponent } from './shared/components/base.component';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    GlobalHeaderComponent,
    GlobalFooterComponent,
    GlobalAsideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutesModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
