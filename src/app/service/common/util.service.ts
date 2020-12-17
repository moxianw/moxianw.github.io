import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(
    private titleService: Title,
  ) {}

  setTitle(title: string) {
    this.titleService.setTitle(`${title}-${appName}`);
  }
}
