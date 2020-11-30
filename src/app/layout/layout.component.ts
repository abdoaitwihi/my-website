import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isOpened: boolean = false;
  constructor(private navService: NavigationService) {}
  ngOnInit(): void {
    this.navService.getStatus().subscribe((data) => {
      if (data == 'open') {
        this.isOpened = true;
      } else {
        this.isOpened = false;
      }
    });
  }
  onClose() {
    this.navService.closeNav();
  }
}
