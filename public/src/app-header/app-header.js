import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class AppHeader
{
  constructor(router) {
    this.router = router;
  }

  /**
   * Once the header dom is attached
   */
  attached() {
  }

}
