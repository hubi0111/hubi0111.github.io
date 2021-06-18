import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'Multi-Channel Authentication with DI',
      desc: 'Multi-channel authentication for various authentication services',
      githurl: 'https://github.com/hubi0111/Multi-channel-authentication-with-DJ-in-NODE-JS',
      imgUrl: 'assets/images/z4.PNG',
      tech: 'Node JS, React, MongoDB'
    },

    {
      id: 2,
      title: 'Dynamic Configurable Menu',
      desc: 'Authenticate user and dynamically configure menu from user role',
      githurl: 'https://github.com/hubi0111/Configurable-authorization-and-menu-navigation-in-NODE-JS',
      imgUrl: 'assets/images/z5.png',
      tech: 'Node JS, React, MongoDB'
    },

    {
      id: 3,
      title: 'Menu App',
      desc: 'App to order food from restaurant with user roles',
      githurl: 'https://github.com/hubi0111/Menu-App',
      imgUrl: 'assets/images/z26.png',
      tech: 'Angular, Java Spring Boot, MySQL'
    },

    {
      id: 4,
      title: 'Gitlet File Version Control',
      desc: 'Version control system similar to git written in java',
      githurl: 'https://github.com/hubi0111/cs61b/tree/master/proj2/',
      imgUrl: 'assets/images/z1.png',
      tech: 'Java'
    },

    {
      id: 5,
      title: 'Scheme',
      desc: 'Custom scheme language interpreter built in python',
      githurl: 'https://github.com/hubi0111/cs61a/tree/master/scheme',
      imgUrl: 'assets/images/z27.png',
      tech: 'Python'
    },

  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
