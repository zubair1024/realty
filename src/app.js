import { Aurelia, inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Aurelia, Router)
export class App {
  constructor(aurelia, router) {
    this.aurelia = aurelia;
    this.router = router;
  }

  configureRouter(config, router) {
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: 'home/home',
        title: 'Home'
      },
      {
        route: 'submit',
        name: 'submit',
        moduleId: 'submit/submit',
        title: 'Submit Property'
      },
      {
        route: 'contact',
        name: 'contact',
        moduleId: 'contact/contact',
        title: 'Contact Us'
      }
    ]);
    this.router = router;
  }
}
