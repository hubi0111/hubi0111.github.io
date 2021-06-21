import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extracurriculum',
  templateUrl: './extracurriculum.component.html',
  styleUrls: ['./extracurriculum.component.scss']
})
export class ExtracurriculumComponent implements OnInit {

  config: any;
  extracurriculum = [
    {
      id: 1,
      title: 'Volleyball',
      desc: 'HS Player',
      imgUrl: 'assets/images/vb.png'
    },

    {
      id: 2,
      title: 'Music',
      desc: 'HS Orchestra',
      imgUrl: 'assets/images/music.png'
    },

    {
      id: 3,
      title: 'LifeGuard',
      desc: 'Local Pool',
      imgUrl: 'assets/images/lg.png'
    },

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.extracurriculum.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}
