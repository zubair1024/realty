import { Aurelia, inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Aurelia, Router)
export class App {
  constructor(aurelia, router) {
    this.aurelia = aurelia;
    this.router = router;

    //Ajax Prefilters for the widgets
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      options.url = AppState.config.baseUrl + options.url;
      options.error = function(data) {
        switch (data.status) {
        case 0:
          break;

        case 401:
          break;

        case 413:
          break;

        default:
          if (data.statusText) {
            }
          break;
        }
      };
    });
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
      },
      {
        route: 'policy',
        name: 'policy',
        moduleId: 'policy/policy',
        title: 'Privacy Policy'
      }
    ]);
    this.router = router;
  }
}

class postRenderStep {
  run(navigationInstruction, next) {
    //scroll to top
    $('html, body').animate({ scrollTop: 0 }, 'fast');

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

