import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { switchMap, filter, map } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { getIEVersion } from './utils/platform';
import { UtilService } from './service/common/util.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  /**
   * 是否展示侧边栏
   */
  showAside = false;
  /**
   * IE11 展示提示
   */
  showIEAlert = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utilService: UtilService,
    platform: Platform,
  ) {
    if (platform.isBrowser) {
      this.showIEAlert = getIEVersion() === 11;
    }
  }

  ngOnInit() {
    this.handleRoute();
  }

  handleRoute() {
    this.getRoute()
      .pipe(switchMap(route => route.data))
      .subscribe(data => {
        if (data.title) {
          this.utilService.setTitle(data.title);
        }
        this.showAside = data.aside || false;
      });
  }

  getRoute() {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: ActivatedRoute) => {
        // 获取最顶层的route
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary')
    );
  }
}
