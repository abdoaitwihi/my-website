import { Component, Input, OnInit } from '@angular/core';
import { Porject } from '../porject';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent implements OnInit {
  @Input() project: Porject;
  constructor() {}

  ngOnInit(): void {}
}
