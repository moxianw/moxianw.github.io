import { OnDestroy, Component } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';

import { NzMessageService } from 'ng-zorro-antd/message';
import { AppInjectorService } from 'src/app/service/common/app-injector.service';

@Component({
  template: ''
})
export class BaseComponent implements OnDestroy {
  protected router: Router;

  protected platform: Platform;

  protected location: Location;

  protected modalService: NzModalService;

  protected messageService: NzMessageService;

  protected unsubscribe$: Subject<void> = new Subject();

  protected modalRef?: NzModalRef;

  constructor() {
    const injector = AppInjectorService.getInjector();
    this.router = injector.get<Router>(Router);
    this.platform = injector.get<Platform>(Platform);
    this.location = injector.get<Location>(Location);
    this.messageService = injector.get<NzMessageService>(NzMessageService);
    this.modalService = injector.get<NzModalService>(NzModalService);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    if (this.modalRef) {
      this.modalRef.destroy();
    }
  }
}
