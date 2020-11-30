import { Component, OnInit } from '@angular/core';
import { Porject } from '../porject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Porject[] = [
    {
      id: 1,
      title: 'addictest',
      desc:
        'orem ipsum dolor sit amet, consectetur adipisicing elit. Qui error assumenda repellendus? Quibusdam repudiandae nulla blanditiis',
      url: 'https://www.addictest.com',
      img: '../../assets/img/img-our-team.png',
    },
    {
      id: 2,
      title: 'ya rayah',
      desc: `orem ipsum dolor sit amet, consectetur adipisicing elit. Qui error assumenda repellendus? Quibusdam repudiandae nulla blanditiis voluptas at enim rerum sunt ab, repellendus non dolorem iure quam perferendis velit quos.        `,
      url: 'https://www.yarayahevents.com',
      img: '../../assets/img/img-foundateur.png',
    },
    {
      id: 1,
      title: 'addictest',
      desc:
        'orem ipsum dolor sit amet, consectetur adipisicing elit. Qui error assumenda repellendus? Quibusdam repudiandae nulla blanditiis',
      url: 'https://www.addictest.com',
      img: '../../assets/img/img-our-team.png',
    },
    {
      id: 2,
      title: 'ya rayah',
      desc: `orem ipsum dolor sit amet, consectetur adipisicing elit. Qui error assumenda repellendus? Quibusdam repudiandae nulla blanditiis voluptas at enim rerum sunt ab, repellendus non dolorem iure quam perferendis velit quos.        `,
      url: 'https://www.yarayahevents.com',
      img: '../../assets/img/img-foundateur.png',
    },
    {
      id: 1,
      title: 'addictest',
      desc:
        'orem ipsum dolor sit amet, consectetur adipisicing elit. Qui error assumenda repellendus? Quibusdam repudiandae nulla blanditiis',
      url: 'https://www.addictest.com',
      img: '../../assets/img/img-our-team.png',
    },
    {
      id: 2,
      title: 'ya rayah',
      desc: `orem ipsum dolor sit amet, consectetur adipisicing elit. Qui error assumenda repellendus? Quibusdam repudiandae nulla blanditiis voluptas at enim rerum sunt ab, repellendus non dolorem iure quam perferendis velit quos.        `,
      url: 'https://www.yarayahevents.com',
      img: '../../assets/img/img-foundateur.png',
    },
    {
      id: 1,
      title: 'addictest',
      desc:
        'orem ipsum dolor sit amet, consectetur adipisicing elit. Qui error assumenda repellendus? Quibusdam repudiandae nulla blanditiis',
      url: 'https://www.addictest.com',
      img: '../../assets/img/img-our-team.png',
    },
    {
      id: 2,
      title: 'ya rayah',
      desc: `orem ipsum dolor sit amet, consectetur adipisicing elit. Qui error assumenda repellendus? Quibusdam repudiandae nulla blanditiis voluptas at enim rerum sunt ab, repellendus non dolorem iure quam perferendis velit quos.        `,
      url: 'https://www.yarayahevents.com',
      img: '../../assets/img/img-foundateur.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
