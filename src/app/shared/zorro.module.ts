import { NgModule } from '@angular/core';

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const zorroConfig: NzConfig = {
  // 注意组件名称没有 nz 前缀
  modal: {
    nzMaskClosable: false
  },
  table: {
    nzHideOnSinglePage: true
  },
  descriptions: {
    nzSize: 'middle'
  },
  space: {
    nzSize: 'middle'
  }
};

@NgModule({
  exports: [
    NzLayoutModule,
    NzButtonModule,
    NzDividerModule
  ],
  providers: [{ provide: NZ_CONFIG, useValue: zorroConfig }]
})
export class ZorroModule {}
