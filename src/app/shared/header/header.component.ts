import { DOCUMENT } from '@angular/common';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  OnInit,
  Output,
} from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private navService: NavigationService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  navStatus: boolean;
  scrolled: boolean;
  ngOnInit(): void {
    this.navService.getStatus().subscribe((data) => {
      if (data == 'open') {
        this.navStatus = true;
      } else {
        this.navStatus = false;
      }
    });
  }
  onClick() {
    this.navService.openNav();
  }
}
