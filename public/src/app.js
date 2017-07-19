import { Aurelia, inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Aurelia, Router)
export class App {
  constructor(aurelia, router) {
    this.aurelia = aurelia;
    this.router = router;
  }

  configureRouter(config, router) {
    config.addPipelineStep('postRender', postRenderStep);

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
      },
      {
        route: 'faq',
        name: 'faq',
        moduleId: 'faq/faq',
        title: 'FAQ'
      },
      {
        route: 'tnc',
        name: 'tnc',
        moduleId: 'tnc/tnc',
        title: 'Terms and Conditions'
      }
    ]);
    this.router = router;
  }
}

class postRenderStep {
  run(navigationInstruction, next) {
    if (navigationInstruction.config && navigationInstruction.config.name) {
      this.setActiveTab(navigationInstruction.config.name);
    }
    return next();
  }

  setActiveTab(name) {
    $('#home-link').parent().removeClass('active');
    $('#contact-link').parent().removeClass('active');
    $('#submit-link').parent().removeClass('active');
    $('#faq-link').parent().removeClass('active');
    switch (name) {
    case 'submit':
      $('#submit-link').parent().addClass('active');
      break;
    case 'contact':
      $('#contact-link').parent().addClass('active');
      break;
    case 'faq':
      $('#faq-link').parent().addClass('active');
      break;
    case 'home':
      $('#home-link').parent().addClass('active');
      break;
    default:
      break;
    }
  }
}

