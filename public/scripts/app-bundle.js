define('app',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.Aurelia, _aureliaRouter.Router), _dec(_class = function () {
    function App(aurelia, router) {
      _classCallCheck(this, App);

      this.aurelia = aurelia;
      this.router = router;

      $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        options.url = AppState.config.baseUrl + options.url;
        options.error = function (data) {
          switch (data.status) {
            case 0:
              break;

            case 401:
              break;

            case 413:
              break;

            default:
              if (data.statusText) {}
              break;
          }
        };
      });
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.addPipelineStep('postRender', postRenderStep);

      config.map([{
        route: ['', 'home'],
        name: 'home',
        moduleId: 'home/home',
        title: 'Home'
      }, {
        route: 'submit',
        name: 'submit',
        moduleId: 'submit/submit',
        title: 'Submit Property'
      }, {
        route: 'contact',
        name: 'contact',
        moduleId: 'contact/contact',
        title: 'Contact Us'
      }, {
        route: 'faq',
        name: 'faq',
        moduleId: 'faq/faq',
        title: 'FAQ'
      }, {
        route: 'tnc',
        name: 'tnc',
        moduleId: 'tnc/tnc',
        title: 'Terms and Conditions'
      }, {
        route: 'policy',
        name: 'policy',
        moduleId: 'policy/policy',
        title: 'Privacy Policy'
      }]);
      this.router = router;
    };

    return App;
  }()) || _class);

  var postRenderStep = function () {
    function postRenderStep() {
      _classCallCheck(this, postRenderStep);
    }

    postRenderStep.prototype.run = function run(navigationInstruction, next) {
      $('html, body').animate({ scrollTop: 0 }, 'fast');

      if (navigationInstruction.config && navigationInstruction.config.name) {
        this.setActiveTab(navigationInstruction.config.name);
      }
      return next();
    };

    postRenderStep.prototype.setActiveTab = function setActiveTab(name) {
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
    };

    return postRenderStep;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('app-footer/app-footer',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AppFooter = exports.AppFooter = function AppFooter() {
    _classCallCheck(this, AppFooter);
  };
});
define('app-header/app-header',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AppHeader = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var AppHeader = exports.AppHeader = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
    function AppHeader(router) {
      _classCallCheck(this, AppHeader);

      this.router = router;
    }

    AppHeader.prototype.attached = function attached() {};

    return AppHeader;
  }()) || _class);
});
define('contact/contact',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Contact = exports.Contact = function () {
    function Contact() {
      _classCallCheck(this, Contact);
    }

    Contact.prototype.attached = function attached() {
      this.googleMap = new google.maps.Map(document.getElementById('listing-map'), {
        zoom: 4,
        center: { lat: 25, lng: 55 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        scrollwheel: true,
        draggable: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        navigationControl: false,
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.SMALL
        }
      });
    };

    return Contact;
  }();
});
define('faq/faq',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Faq = exports.Faq = function () {
    function Faq() {
      _classCallCheck(this, Faq);
    }

    Faq.prototype.attached = function attached() {};

    return Faq;
  }();
});
define('home/home',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function () {
    function Home() {
      _classCallCheck(this, Home);
    }

    Home.prototype.attached = function attached() {
      var scene = document.getElementById('scene');
      var parallax = new Parallax(scene);

      var timelineBlocks = $('.cd-timeline-block'),
          offset = 0.8;

      hideBlocks(timelineBlocks, offset);

      $(window).on('scroll', function () {
        !window.requestAnimationFrame ? setTimeout(function () {
          showBlocks(timelineBlocks, offset);
        }, 100) : window.requestAnimationFrame(function () {
          showBlocks(timelineBlocks, offset);
        });
      });

      function hideBlocks(blocks, offset) {
        blocks.each(function () {
          $(this).offset().top > $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
      }

      function showBlocks(blocks, offset) {
        blocks.each(function () {
          $(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
      }
    };

    return Home;
  }();
});
define('policy/policy',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Policy = exports.Policy = function () {
    function Policy() {
      _classCallCheck(this, Policy);
    }

    Policy.prototype.attached = function attached() {};

    return Policy;
  }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('submit/submit',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Submit = exports.Submit = function () {
    function Submit() {
      _classCallCheck(this, Submit);

      this.model = {
        location: {},
        contact: {},
        information: {
          type: 'studio',
          bedrooms: '1',
          bathrooms: '1',
          parkingSpaces: '1'
        }
      };
    }

    Submit.prototype.attached = function attached() {};

    Submit.prototype.validateStep = function validateStep(step, callback) {
      console.log(this.model);
      var valid = true;
      switch (step) {
        case 1:
          if (!this.model.location.address || this.model.location.address === '') {
            valid = false;
            alert('Please fill in the ADDRESS field');
          } else {
            if (!this.model.location.unit || this.model.location.unit === '') {
              valid = false;
              alert('Please fill in the UNIT field');
            } else {
              !callback && $('.submit-property__steps a[href="#submit-property-2"]').tab('show');
            }
          }
          break;

        case 2:
          if (!this.model.contact.name || this.model.contact.name === '') {
            valid = false;
            alert('Please fill in the NAME field');
          } else {
            if (!this.model.contact.email || this.model.contact.email === '') {
              valid = false;
              alert('Please fill in the EMAIL field');
            } else {
              if (!this.model.contact.contactNo || this.model.contact.contactNo === '') {
                valid = false;
                alert('Please fill in the CONTACT NUMBER field');
              } else {
                !callback && $('.submit-property__steps a[href="#submit-property-2"]').tab('show');
              }
            }
          }
          break;

        case 3:
          if (!this.model.information.title || this.model.information.title === '') {
            valid = false;
            alert('Please fill in the TITLE field');
          } else {
            if (!this.model.information.view || this.model.information.view === '') {
              valid = false;
              alert('Please fill in the VIEW field');
            } else {
              if (!this.model.information.squareFeet || this.model.information.squareFeet === '') {
                valid = false;
                alert('Please fill in the SQUARE FEET field');
              }
            }
          }
          break;
        default:
          break;
      }
      callback && callback(valid);
    };

    Submit.prototype.toggleBedrooms = function toggleBedrooms(value) {
      this.model.information.bedrooms = value;
    };

    Submit.prototype.toggleBathrooms = function toggleBathrooms(value) {
      this.model.information.bathrooms = value;
    };

    Submit.prototype.toggleFloors = function toggleFloors(value) {
      this.model.information.floors = value;
    };

    Submit.prototype.toggleParkingSpaces = function toggleParkingSpaces(value) {
      this.model.information.parkingSpaces = value;
    };

    Submit.prototype.finalValidationAnSubmit = function finalValidationAnSubmit(images) {
      var me = this;
      me.validateStep(1, function (f1) {
        console.log('step 1 is valid');
        f1 && me.validateStep(2, function (f2) {
          console.log('step 2 is valid');
          f2 && me.validateStep(3, function (f3) {
            console.log('step 3 is valid');

            var formData = new FormData();
            formData.append('images', me.deed[0], 'deed_' + me.model.information.title + '.jpg');
            for (var i = 0; i < me.selectedFiles.length; i++) {
              formData.append('images', me.selectedFiles[i], 'property' + i + '_' + me.model.information.title + '.jpg');
            }
            formData.append('model', JSON.stringify(me.model));
            $.ajax({
              url: '/property',
              method: 'POST',
              data: formData,
              contentType: false,
              processData: false,
              success: function success(data) {
                console.log('data');
                f3 && $('#submitted').tab('show');
              },
              error: function error(err) {
                console.log(err);
              }
            });
          });
        });
      });
    };

    return Submit;
  }();

  var FileListToArrayValueConverter = exports.FileListToArrayValueConverter = function () {
    function FileListToArrayValueConverter() {
      _classCallCheck(this, FileListToArrayValueConverter);
    }

    FileListToArrayValueConverter.prototype.toView = function toView(fileList) {
      var files = [];
      if (!fileList) {
        return files;
      }
      for (var i = 0; i < fileList.length; i++) {
        files.push(fileList.item(i));
      }
      return files;
    };

    return FileListToArrayValueConverter;
  }();

  var BlobToUrlValueConverter = exports.BlobToUrlValueConverter = function () {
    function BlobToUrlValueConverter() {
      _classCallCheck(this, BlobToUrlValueConverter);
    }

    BlobToUrlValueConverter.prototype.toView = function toView(blob) {
      return URL.createObjectURL(blob);
    };

    return BlobToUrlValueConverter;
  }();
});
define('tnc/tnc',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Tnc = exports.Tnc = function () {
    function Tnc() {
      _classCallCheck(this, Tnc);
    }

    Tnc.prototype.attached = function attached() {};

    return Tnc;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app-header/app-header\"></require><require from=\"./app-footer/app-footer\"></require><app-header></app-header><router-view></router-view><app-footer></app-footer></template>"; });
define('text!contact/contact.css', ['module'], function(module) { module.exports = "body{\r\n    /* background-color: #f3f3f3 !important */\r\n}"; });
define('text!app-footer/app-footer.html', ['module'], function(module) { module.exports = "<template><footer id=\"footer\"><div class=\"container hidden-xs\"><div class=\"row\"><div class=\"col-sm-4\"><div class=\"footer__block\"><a class=\"logo clearfix\" href=\"\"><div class=\"logo__text\"><img src=\"/img/logo.png\" width=\"250\" class=\"img-responsive\"> <span>This is a placeholder for the logo</span></div></a><address class=\"m-t-20 m-b-20 f-14\">#230, Mira 2, Dubailand</address><div class=\"f-20\">0000-000000000</div><div class=\"f-14 m-t-5\">contact@cashforproperty.ae / info@cashforproperty.ae</div><div class=\"f-20 m-t-20\"><a href=\"\" class=\"m-r-10\"><i class=\"zmdi zmdi-google\"></i></a> <a href=\"\" class=\"m-r-10\"><i class=\"zmdi zmdi-facebook\"></i></a> <a href=\"\"><i class=\"zmdi zmdi-twitter\"></i></a></div></div></div><div class=\"col-sm-4 col-sm-offset-4\"><div class=\"footer__block\"><div class=\"footer__title\">Disclaimer</div><div>Cash For Property is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, or reliance on any information contained within the site. While the information contained within the site is periodically updated, no guarantee is given that the information provided in this website is correct, complete and up-to-date.</div></div></div></div></div><div class=\"footer__bottom\"><div class=\"container\"><span class=\"footer__copyright\">© Cash For Property</span> <a route-href=\"route: tnc\">Terms &amp; Conditions</a> <a route-href=\"route: policy\">Privacy Policy</a> <span style=\"float:right\">Powered by <a href=\"http://razrlab.com\">RAZRLAB</a></span></div><div class=\"footer__to-top\" data-rmd-action=\"scroll-to\" data-rmd-target=\"html\"><i class=\"zmdi zmdi-chevron-up\"></i></div></div></footer></template>"; });
define('text!faq/faq.css', ['module'], function(module) { module.exports = "body{\r\n    /* background-color: #f3f3f3 !important */\r\n}"; });
define('text!app-header/app-header.html', ['module'], function(module) { module.exports = "<template><header id=\"header\" class=\"header--minimal\"><div class=\"header__top\"><div class=\"container\"><ul class=\"top-nav\"><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-facebook\"></i></a></li><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-twitter\"></i></a></li><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-google\"></i></a></li><li class=\"pull-right hidden-xs\"><span><i class=\"zmdi zmdi-email\"></i>contact@cashforproperty.com</span></li><li class=\"pull-right hidden-xs\"><span><i class=\"zmdi zmdi-phone\"></i>Call us now on 000-000-000-0000</span></li></ul></div></div><div class=\"header__main\"><div class=\"container\"><a class=\"logo\" href=\"index.html\"><div class=\"logo__text\"><div class=\"row\"><div class=\"col-sm-3 col-xs-3\"><img src=\"/img/sheikh.png\" width=\"75\" class=\"img-responsive\"></div><div class=\"col-sm-9 col-xs-9\"><img src=\"/img/logo.png\" width=\"250\" class=\"img-responsive\"> <span>This is a placeholder for the logo</span></div></div></div></a><div class=\"navigation-trigger visible-xs visible-sm\" data-rmd-action=\"block-open\" data-rmd-target=\".navigation\"><i class=\"zmdi zmdi-menu\"></i></div><ul class=\"navigation\"><li class=\"visible-xs visible-sm\"><a class=\"navigation__close\" data-rmd-action=\"navigation-close\" href=\"\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></li><li class=\"active navigation__dropdown\"><a route-href=\"route: home\" id=\"home-link\">Home</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: submit\" id=\"submit-link\">Sell</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: contact\" id=\"contact-link\">Contact</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: faq\" id=\"faq-link\">FAQ</a></li></ul></div></div></header></template>"; });
define('text!home/home.css', ['module'], function(module) { module.exports = ".bg-style{\r\n  /* background: url(img/1.png) no-repeat center center;  */\r\n  background-color: #D44B4E;\r\n  -webkit-background-size: cover;\r\n  -moz-background-size: cover;\r\n  -o-background-size: cover;\r\n  background-size: cover;\r\n  /* max-height:600px; */\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n/* -------------------------------- \r\n\r\nParallax styling\r\n\r\n-------------------------------- */\r\n\r\n.aspect {\r\n  }\r\n\r\n.scene > *:nth-child(1) {\r\n}\r\n  .scene > *:nth-child(1) button {\r\n    -webkit-transform: rotate(150deg);\r\n        -ms-transform: rotate(150deg);\r\n            transform: rotate(150deg); }\r\n\r\n.scene > *:nth-child(2) {\r\n }\r\n  .scene > *:nth-child(2) button {\r\n    -webkit-transform: rotate(120deg);\r\n        -ms-transform: rotate(120deg);\r\n            transform: rotate(120deg); }\r\n\r\n.scene > *:nth-child(3) {\r\n}\r\n  .scene > *:nth-child(3) button {\r\n    -webkit-transform: rotate(90deg);\r\n        -ms-transform: rotate(90deg);\r\n            transform: rotate(90deg); }\r\n\r\n.scene > *:nth-child(4) {\r\n }\r\n  .scene > *:nth-child(4) button {\r\n    -webkit-transform: rotate(60deg);\r\n        -ms-transform: rotate(60deg);\r\n            transform: rotate(60deg); }\r\n\r\n.scene > *:nth-child(5) {\r\n  }\r\n  .scene > *:nth-child(5) button {\r\n    -webkit-transform: rotate(30deg);\r\n        -ms-transform: rotate(30deg);\r\n            transform: rotate(30deg); }\r\n\r\n.scene > *:nth-child(6) {\r\n }\r\n  .scene > *:nth-child(6) button {\r\n    -webkit-transform: rotate(0deg);\r\n        -ms-transform: rotate(0deg);\r\n            transform: rotate(0deg); }\r\n\r\n\r\n\r\n/* -------------------------------- \r\n\r\nPrimary style\r\n\r\n-------------------------------- */\r\n\r\n\r\n#cd-timeline {\r\n  position: relative;\r\n  padding: 2em 0;\r\n  margin-top: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n#cd-timeline::before {\r\n  /* this is the vertical line */\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 1.4em;\r\n  height: 100%;\r\n  width: 4px;\r\n  background: #d7e4ed;\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  #cd-timeline {\r\n    margin-top: 3em;\r\n    margin-bottom: 3em;\r\n  }\r\n  #cd-timeline::before {\r\n    left: 50%;\r\n    margin-left: -2px;\r\n  }\r\n}\r\n\r\n.cd-timeline-block {\r\n  position: relative;\r\n  margin: 2em 0;\r\n}\r\n.cd-timeline-block:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.cd-timeline-block:first-child {\r\n  margin-top: 0;\r\n}\r\n.cd-timeline-block:last-child {\r\n  margin-bottom: 0;\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-block {\r\n    margin: 4em 0;\r\n  }\r\n  .cd-timeline-block:first-child {\r\n    margin-top: 0;\r\n  }\r\n  .cd-timeline-block:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n.cd-timeline-img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);\r\n}\r\n.cd-timeline-img img {\r\n  display: block;\r\n  width: 24px;\r\n  height: 24px;\r\n  position: relative;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n}\r\n.cd-timeline-img.cd-picture {\r\n  background: #75ce66;\r\n}\r\n.cd-timeline-img.cd-movie {\r\n  background: #c03b44;\r\n}\r\n.cd-timeline-img.cd-location {\r\n  background: #f0ca45;\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-img {\r\n    width: 60px;\r\n    height: 60px;\r\n    left: 50%;\r\n    margin-left: -30px;\r\n    /* Force Hardware Acceleration in WebKit */\r\n    -webkit-transform: translateZ(0);\r\n    -webkit-backface-visibility: hidden;\r\n  }\r\n  .cssanimations .cd-timeline-img.is-hidden {\r\n    visibility: hidden;\r\n  }\r\n  .cssanimations .cd-timeline-img.bounce-in {\r\n    visibility: visible;\r\n    -webkit-animation: cd-bounce-1 0.6s;\r\n    -moz-animation: cd-bounce-1 0.6s;\r\n    animation: cd-bounce-1 0.6s;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes cd-bounce-1 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.5);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n  }\r\n}\r\n@-moz-keyframes cd-bounce-1 {\r\n  0% {\r\n    opacity: 0;\r\n    -moz-transform: scale(0.5);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -moz-transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: scale(1);\r\n  }\r\n}\r\n@keyframes cd-bounce-1 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.5);\r\n    -moz-transform: scale(0.5);\r\n    -ms-transform: scale(0.5);\r\n    -o-transform: scale(0.5);\r\n    transform: scale(0.5);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1.2);\r\n    -moz-transform: scale(1.2);\r\n    -ms-transform: scale(1.2);\r\n    -o-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    -moz-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    -o-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n.cd-timeline-content {\r\n  position: relative;\r\n  margin-left: 60px;\r\n  background: white;\r\n  border-radius: 0.25em;\r\n  padding: 1em;\r\n  box-shadow: 0 3px 0 #d7e4ed;\r\n}\r\n.cd-timeline-content:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.cd-timeline-content h2 {\r\n  color: #303e49;\r\n}\r\n\r\n.cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {\r\n  display: inline-block;\r\n}\r\n.cd-timeline-content p {\r\n  margin: 1em 0;\r\n  line-height: 1.6;\r\n}\r\n.cd-timeline-content .cd-read-more {\r\n  float: right;\r\n  padding: .8em 1em;\r\n  background: #acb7c0;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n}\r\n.no-touch .cd-timeline-content .cd-read-more:hover {\r\n  background-color: #bac4cb;\r\n}\r\n.cd-timeline-content .cd-date {\r\n  float: left;\r\n  padding: .8em 0;\r\n  opacity: .7;\r\n}\r\n.cd-timeline-content::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 16px;\r\n  right: 100%;\r\n  height: 0;\r\n  width: 0;\r\n  border: 7px solid transparent;\r\n  border-right: 7px solid white;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .cd-timeline-content h2 {\r\n    font-size: 20px;\r\n    font-size: 1.25rem;\r\n  }\r\n  .cd-timeline-content p {\r\n    font-size: 16px;\r\n    font-size: 1rem;\r\n  }\r\n  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-content {\r\n    margin-left: 0;\r\n    padding: 1.6em;\r\n    width: 45%;\r\n  }\r\n  .cd-timeline-content::before {\r\n    top: 24px;\r\n    left: 100%;\r\n    border-color: transparent;\r\n    border-left-color: white;\r\n  }\r\n  .cd-timeline-content .cd-read-more {\r\n    float: left;\r\n  }\r\n  .cd-timeline-content .cd-date {\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 122%;\r\n    top: 6px;\r\n    font-size: 1.5em;\r\n  }\r\n  .cd-timeline-block:nth-child(even) .cd-timeline-content {\r\n    float: right;\r\n  }\r\n  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {\r\n    top: 24px;\r\n    left: auto;\r\n    right: 100%;\r\n    border-color: transparent;\r\n    border-right-color: white;\r\n  }\r\n  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {\r\n    float: right;\r\n  }\r\n  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {\r\n    left: auto;\r\n    right: 122%;\r\n    text-align: right;\r\n  }\r\n  .cssanimations .cd-timeline-content.is-hidden {\r\n    visibility: hidden;\r\n  }\r\n  .cssanimations .cd-timeline-content.bounce-in {\r\n    visibility: visible;\r\n    -webkit-animation: cd-bounce-2 0.6s;\r\n    -moz-animation: cd-bounce-2 0.6s;\r\n    animation: cd-bounce-2 0.6s;\r\n  }\r\n}\r\n\r\n.card-item{\r\n  background: #D44B4E;\r\n    border-radius: 0.25em;\r\n    padding: 1em;\r\n    box-shadow: 0 3px 0 #d7e4ed;\r\n}\r\n\r\n.white-text{\r\n  color: #f5f5f5;\r\n}\r\n\r\n@media only screen and (min-width: 1170px) {\r\n  /* inverse bounce effect on even content blocks */\r\n  .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {\r\n    -webkit-animation: cd-bounce-2-inverse 0.6s;\r\n    -moz-animation: cd-bounce-2-inverse 0.6s;\r\n    animation: cd-bounce-2-inverse 0.6s;\r\n  }\r\n}\r\n@-webkit-keyframes cd-bounce-2 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n  }\r\n}\r\n@-moz-keyframes cd-bounce-2 {\r\n  0% {\r\n    opacity: 0;\r\n    -moz-transform: translateX(-100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -moz-transform: translateX(20px);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: translateX(0);\r\n  }\r\n}\r\n@keyframes cd-bounce-2 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-100px);\r\n    -moz-transform: translateX(-100px);\r\n    -ms-transform: translateX(-100px);\r\n    -o-transform: translateX(-100px);\r\n    transform: translateX(-100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(20px);\r\n    -moz-transform: translateX(20px);\r\n    -ms-transform: translateX(20px);\r\n    -o-transform: translateX(20px);\r\n    transform: translateX(20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n    -moz-transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n    -o-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@-webkit-keyframes cd-bounce-2-inverse {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(-20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n  }\r\n}\r\n@-moz-keyframes cd-bounce-2-inverse {\r\n  0% {\r\n    opacity: 0;\r\n    -moz-transform: translateX(100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -moz-transform: translateX(-20px);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: translateX(0);\r\n  }\r\n}\r\n@keyframes cd-bounce-2-inverse {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(100px);\r\n    -moz-transform: translateX(100px);\r\n    -ms-transform: translateX(100px);\r\n    -o-transform: translateX(100px);\r\n    transform: translateX(100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(-20px);\r\n    -moz-transform: translateX(-20px);\r\n    -ms-transform: translateX(-20px);\r\n    -o-transform: translateX(-20px);\r\n    transform: translateX(-20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n    -moz-transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n    -o-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n"; });
define('text!contact/contact.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Duis mollisest non commodo luctus nisierat porttito</h2><small>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit liberopharetra augueullamcorper nulla non metus auctor fringillaet magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare Cras justo odio, dapibus ac facilisis in, egestas eget quam.</small></header><div class=\"contact\"><div class=\"contact__map\"><div id=\"listing-map\"></div></div><div class=\"contact__inner clearfix\"><div class=\"col-sm-6\"><div class=\"contact__info\"><ul class=\"rmd-contact-list\"><li class=\"rmd-contact-list__title\"><i class=\"zmdi zmdi-home\"></i>Dubai Office</li><li><i class=\"zmdi zmdi-pin\"></i>230 Mira 2 Dubailand,<br>560030</li><li><i class=\"zmdi zmdi-phone\"></i>000-000-0000</li><li><i class=\"zmdi zmdi-email\"></i>contact@realty.com</li></ul><ul class=\"rmd-contact-list\"><li class=\"rmd-contact-list__title\"><i class=\"zmdi zmdi-home\"></i>UK Office</li><li><i class=\"zmdi zmdi-pin\"></i>7094 Blah Blah Mountain View,<br>123</li><li><i class=\"zmdi zmdi-phone\"></i>000-000-0000</li><li><i class=\"zmdi zmdi-email\"></i>info@realty.com</li></ul><div class=\"contact__social\"><a href=\"\" class=\"zmdi zmdi-facebook mdc-bg-indigo-300\"></a> <a href=\"\" class=\"zmdi zmdi-twitter mdc-bg-cyan-300\"></a> <a href=\"\" class=\"zmdi zmdi-google mdc-bg-red-300\"></a> <a href=\"\" class=\"zmdi zmdi-instagram mdc-bg-blue-grey-400\"></a></div></div></div><div class=\"col-sm-6\"><form class=\"contact__form\"><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Name</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Email Address</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Contact Number</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><textarea class=\"form-control textarea-autoheight\"></textarea><label>Message</label><i class=\"form-group__bar\"></i></div><small class=\"mdc-text-white-darker\">By sending us your information, you agree to our Terms of Use &amp; Privacy Policy.</small><div class=\"m-t-30\"><button type=\"submit\" class=\"btn brn-sm btn-default btn-static\">Send</button></div></form></div></div></div></div></section></template>"; });
define('text!submit/submit.css', ['module'], function(module) { module.exports = "body{\r\n    /* background-color: #f3f3f3 !important */\r\n}"; });
define('text!faq/faq.html', ['module'], function(module) { module.exports = "<template><require from=\"./faq.css\"></require><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Frequently Asked Questions</h2></header><div class=\"row\"><div class=\"col-md-8 faq\"><div class=\"card faq__item\"><div class=\"card__header\"><h2>Are there any hidden fees involved?</h2></div><div class=\"card__body\">No. There are absolutely no fees involved in our service. What you see is what you pay.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>If needed, would somebody be available for a meeting?</h2></div><div class=\"card__body\">Yes. We would be more than happy to meet with you to make an offer* on your property. Contact us today to arrange an appointment for one of our representatives to come out and see you.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Does it matter if I am behind on my mortgage payments and face the risk of repossession?</h2></div><div class=\"card__body\">No. Wherever possible, we will use our strong relationship with mortgage lenders to help with any situation you might have. If the property is about to be repossessed, we suggest you call us now and act sooner rather than later.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How do I know if I am getting a fair price for my property?</h2></div><div class=\"card__body\">Fair trade is at the core of Cash For Property. Time is also money and it must be factored in the transaction. Allow us to make an offer* and find out.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How do you calculate the value of my property?</h2></div><div class=\"card__body\">We use our collective experience of 30 years and our extensive knowledge of local markets. We use our proprietary system that provides us with the most up-to-date data to help us to offer* you a fair price.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How long does the entire process take?</h2></div><div class=\"card__body\">The average time to conclude the transaction is usually 2 – 3 weeks. In some cases, we have concluded the transaction in 3 days. Having said that, Cash For Property will work with you to complete the entire process within the timeline ideal to you.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How quick will I get an offer* on my property?</h2></div><div class=\"card__body\">Less than 24hrs. Submit your property on our portal or call us on Cash For Property for our offer*.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>What type of properties do you buy?</h2></div><div class=\"card__body\">Cash For Property buys the following types of property: Independent Villas, Townhouses and Apartments.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Which areas does Cash For Property cover?</h2></div><div class=\"card__body\">All freehold and leasehold areas in the United Arab Emirates.</div></div>* Subject to a survery by us</div><div class=\"col-md-4 rmd-sidebar-mobile\" id=\"write-to-us\"><form class=\"card\"><div class=\"card__header\"><h2>Write to us</h2></div><div class=\"card__body m-t-10\"><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Name</label></div><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Email Address</label></div><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Contact Number</label></div><div class=\"form-group form-group--float\"><textarea class=\"form-control textarea-autoheight\"></textarea><i class=\"form-group__bar\"></i><label>Message</label></div><small class=\"text-muted\">By sending us your information, you agree our Terms of Use &amp; Privacy Policy.</small></div><div class=\"card__footer\"><button class=\"btn btn-primary\">Submit</button> <button class=\"btn btn-link\">Reset</button> <button class=\"btn btn-link visible-sm-inline visible-xs-inline\" data-rmd-action=\"block-close\" data-rmd-target=\"#write-to-us\">Cancel</button></div></form></div></div></div></section></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><require from=\"./home.css\"></require><div class=\"bg-style\"><div id=\"scene\" class=\"scene\"><div data-depth=\"0.00\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/razrlab/image/upload/v1501401289/background_aiwdpp.png\"></div><div data-depth=\"0.10\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/razrlab/image/upload/v1501401238/shadow2_jt6akg.png\"></div><div data-depth=\"0.25\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/razrlab/image/upload/v1501401238/shadow1_yvsair.png\"></div><div data-depth=\"0.00\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/the-property-buying-company/image/upload/v1501751561/buildings_mb0nyg.png\"></div><div data-depth=\"0.70\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/the-property-buying-company/image/upload/v1501751563/clouds_dwz1yk.png\"></div></div></div><div id=\"maincontain\"><section class=\"section submit-ticker\"><p>Are you looking to sell your valuable property? <img src=\"/img/logo.png\" width=\"250\" class=\"img-responsive\"> is your destination!</p><a route-href=\"route: submit\">Sell your property now!</a></section><section class=\"section info-box\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-4 col-md-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/happyman.png\" alt=\"\"></div></div><div class=\"col-sm-12 col-md-8\"><div class=\"info-box__item\"><h3>Your First Step to a Brighter Future With Us</h3><p>At Cash For Property, we understand that you can have a number of reasons to sell your property quickly. Be it to attain financial freedom or to invest in a new property, we are a Company you can rely on to achieve your goals in the quickest possible way. Being the pioneers in Dubai, we understand the ins and outs of the transactional process which can be cumbersome at times. Cash For Property does not rely on financial institutions – rather, we use our large cash reserve to buy properties. This gives us the ability to buy your property in the shortest period possible. If this is what you are looking for, <a route-href=\"route: submit\">Sell Your Property Now</a></p></div></div></div></div></section><section class=\"section info-box\" style=\"background:#f3f3f3\"><div class=\"container\"><div class=\"info-box__item\"><h3>Why Sell to Us</h3></div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/quickCash.png\" alt=\"\" height=\"300\"><h3>Quick Cash</h3><p>Be it for another property or investment, or any other reason, we are here to provide the quick cash to fulfil your needs.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/moving.png\" alt=\"\" height=\"300\"><h3>Moving Away</h3><p>Whether its your plans that have changed or your circumstances, you have decided to move to a different country. Sell your property before you finish packing and we will happily allow 15 days to ease the move.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/rain.png\" alt=\"\" height=\"300\"><h3>Financial Difficulties</h3><p>If you find yourself struggling with loan and mortgage payments, sell your property to us to free yourself from the debt burden.</p></div></div></div></div></section><section class=\"section info-box\"><div class=\"container\"><div class=\"info-box__item\"><h3>Benefits of Working With Us</h3></div><div class=\"row\"><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/O9IY331.png\" alt=\"\" width=\"300\" height=\"300\"><h3>No Fees Whatsoever</h3><p>Selling your property can be a costly affair. At Cash For Property, we understand this and that’s why, we will bear the cost of all the fees associated with the sale of your property.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/OIHEI81.png\" alt=\"\" width=\"300\" height=\"300\"><h3>Flexible Timeline</h3><p>The timetable for the transaction will be set according to your convenience and needs. This way, we can ensure you get your money precisely when you need it.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/OAI50P1.png\" alt=\"\" width=\"300\" height=\"300\"><h3>Best Price to Time Ratio</h3><p>Cash For Property understands that time is money too. This is factored in the price offered. Therefore, our offer will be the best in the market to sell your property in the shortest time.</p></div></div></div></div></section><section class=\"section\" style=\"text-align:center\"><div class=\"container\"><h3>The Typical Selling Process Without Us</h3></div></section><section id=\"cd-timeline\" class=\"cd-container\"><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-picture\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Listed at AED 1,000,000</h2><p style=\"font-size:1.5em\">You put your property for sale with an agent for AED 1,000,000</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/houseInspect.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 1</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-movie\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Reduced to AED 950,000</h2><p style=\"font-size:1.5em\">After 2 months with not a lot of interest, you reduce your asking price to AED 950,000</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/month3.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 2</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-picture\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Reduced to AED 900,000</h2><p style=\"font-size:1.5em\">After 3 months with little interest, you decide to reduce your asking price again to AED 900,000 and find a potential buyer</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/month6.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 3</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-location\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Reduced to AED 850,000</h2><p style=\"font-size:1.5em\">Due to unforeseen circumstances, the deal does not go through. You decide to reduce the asking price to AED 875,000 upon the advice of your agent, as they need to close the deal to get their commission</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/fallsThrough.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 4</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-location\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Sold for AED 800,000</h2><p style=\"font-size:1.5em\">With a little bit of frustration and eagerness to sell, you decide to sell your property for AED 800,000 which then takes 1 month to close the deal</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/month12.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 5</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-movie\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/moneylost.png\" alt=\"\" width=\"200\" height=\"200\"></div><div class=\"col-sm-7\"><h2>Net in your pocket AED 751,000</h2><p style=\"font-size:1.5em\">You do not actually net the full amount. The following fees are applicable:<ul><li><b>AED 22,000 </b>mortgage for 6 months</li><li><b>AED 3,000 </b>housing Fees for 6 months</li><li><b>AED 6,000</b> utility for 6 months</li><li><b>AED 16,000</b> in agent Commission</li><li><b>AED 2,000</b> NOC</li><li>Most importantly, it has taken nearly 6 months to sell your property!</li></ul></p></div></div><span class=\"cd-date\">Month 6</span></div></div></section><section class=\"section\" style=\"text-align:center\"><div class=\"container\"><div class=\"row card-item\"><div class=\"col-sm-12 col-md-9\"><h3 class=\"white-text\">Cash For Property can complete this entire transaction within 2-3 weeks by paying you your final asking price of AED 800,000</h3><h3 class=\"white-text\">A massive potential saving of AED 49,000 and 5 months’ worth of time!</h3></div><div class=\"col-sm-12 col-md-3\"><img class=\"img-responsive\" src=\"img/rich.png\" alt=\"\" width=\"300\" height=\"300\"></div></div></div></section><a class=\"btn brn-sm btn-default btn-static\" style=\"position:fixed;bottom:75%;right:0;border-radius:100px;padding:3px\" route-href=\"route: submit\"><img src=\"img/sellnow.png\" class=\"img-responsive\"></a></div></template>"; });
define('text!policy/policy.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><div class=\"card\"><div class=\"card__header\"><h2>Privacy Policy</h2></div><div class=\"card__body\"><p>1. INFORMATION GATHERED BY CASHFORPROPERTY.AE: This is cashforproperty.ae’s (cashforproperty.ae”) online privacy policy (“Policy”). This policy applies only to activities cashforproperty.ae engages in on its website and does not apply to cashforproperty.ae activities that are “offline” or unrelated to the website. cashforproperty.ae collects certain anonymous data regarding the usage of the website. This information does not personally identify users, by itself or in combination with other information, and is gathered to improve the performance of the website. The anonymous data collected by cashforproperty.ae website can include information such as the type of browser you are using, and the length of the visit to the website. You may also be asked to provide personally identifiable information on the cashforproperty.ae website, which may include your name, address, telephone number and e-mail address. This information can be gathered when feedback or e-mails are sent to cashforproperty.ae, when you register for services, or make purchases via the website. In all such cases you have the option of providing us with personally identifiable information.</p><p>2. USE AND DISCLOSURE OF INFORMATION: Except as otherwise stated below, we do not sell, trade or rent your personally identifiable information collected on the site to others. The information collected by our site is used to process your property sale, to keep you informed and for statistical purposes for improving our site. All details and personally identifiable information will NOT be stored, sold, shared, rented or leased to any third parties.</p><p>3. COOKIES: Cookies are small bits of data cached in a user’s browser. cashforproperty.ae utilises cookies to determine whether or not you have visited the home page in the past. However, no other user information is gathered.</p>cashforproperty.ae may use non-personal “aggregated data” to enhance the operation of our website, or analyse interest in the areas of our website. Additionally, if you provide cashforproperty.ae with content for publishing or feedback, we may publish your user name or other identifying data with your permission.<p></p>cashforproperty.ae may also disclose personally identifiable information in order to respond to a subpoena, court order or other such request. cashforproperty.ae may also provide such personally identifiable information in response to a law enforcement agency’s request or as otherwise required by law. Your personally identifiable information may be provided to a party if cashforproperty.ae files for bankruptcy, or there is a transfer of the assets or ownership of cashforproperty.ae in connection with proposed or consummated corporate reorganisations, such as mergers or acquisitions.<p></p><p>4. SECURITY: cashforproperty.ae takes appropriate steps to ensure data privacy and security including through various hardware and software methodologies. However, cashforproperty.ae cannot guarantee the security of any information that is disclosed online.</p><p>5. OTHER WEBSITES: cashforproperty.ae is not responsible for the privacy policies of websites to which it links. If you provide any information to such third parties, different rules regarding the collection and use of your personal information may apply. We strongly suggest you review such third party’s privacy policies before providing any data to them. We are not responsible for the policies or practices of third parties. Please be aware that our sites may contain links to other sites on the Internet that are owned and operated by third parties. The information practices of those Web sites linked to our site is not covered by this Policy. These other sites may send their own cookies or clear GIFs to users, collect data or solicit personally identifiable information. We cannot control this collection of information. You should contact these entities directly if you have any questions about their use of the information that they collect.</p><p>6. MINORS: cashforproperty.ae does not knowingly collect personal information from minors under the age of 18. Minors are not permitted to use the cashforproperty.ae website or services, and cashforproperty.ae requests that minors under the age of 18 not submit any personal information to the website. Since information regarding minors under the age of 18 is not collected, cashforproperty.ae does not knowingly distribute personal information regarding minors under the age of 18.</p><p>7. CORRECTIONS AND UPDATES: If you wish to modify or update any information cashforproperty.ae has received, please contact info@cashforproperty.ae.</p><p>8. MODIFICATIONS OF THE PRIVACY POLICY: The Website Policies and Terms &amp; Conditions would be changed or updated occasionally to meet the requirements and standards. Therefore the Customers’ are encouraged to frequently visit these sections in order to be updated about the changes on the website. Modifications will be effective on the day they are posted.</p></div></div></div></section><a class=\"btn brn-sm btn-default btn-static\" style=\"position:fixed;bottom:75%;right:0\" route-href=\"route: submit\">SELL NOW</a></template>"; });
define('text!submit/submit.html', ['module'], function(module) { module.exports = "<template>'<require from=\"./submit.css\"></require>'<section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Submit your property</h2><small>Please fill up some basic details about the property</small></header><div class=\"submit-property\"><ul class=\"submit-property__steps\"><li class=\"active\"><a href=\"#submit-property-1\" data-toggle=\"tab\">1</a></li><li><a href=\"#submit-property-2\" data-toggle=\"tab\">2</a></li><li><a id=\"submitted\" href=\"#submit-property-3\">3</a></li><li class=\"submit-property__caret\"></li></ul><div class=\"tab-content submit-property__content\"><div class=\"tab-pane fade in active\" id=\"submit-property-1\"><div class=\"card\"><div class=\"card__header\"><h2>Contact Information</h2><small>Please fill up your contact information so we can get in touch with you.</small></div><form class=\"card__body\"><div class=\"form-group form-group--float form-group--float-center\">Full Name <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.contact.name\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Organization Name (Opt.) <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.contact.organization\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center m-b-5\">Email Address <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.contact.email\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Contact Number <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.contact.contactNo\"> <i class=\"form-group__bar\"></i></div><a data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\" click.delegate=\"validateStep(2)\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-2\"><div class=\"card\"><div class=\"card__header\"><h2>Property Information</h2><small>Please fill up information about the property.</small></div><form class=\"card__body\"><div class=\"form-group form-group--float m-b-5\">Area and Community <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.location.address\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float m-b-5\">Unit/Floor/Block <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.location.unit\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group\"><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"model.location.currentlyLiving\"> <i class=\"input-helper\"></i> I currently live here</label></div></div><div class=\"form-group\"><label>Property Type</label><select class=\"select2\" value.bind=\"model.property.type\"><option value=\"studio\">Studio</option><option value=\"apartment\">Apartment</option><option value=\"townhouse\">Townhouse</option><option value=\"villa\">Villa</option></select></div><div class=\"form-group form-group--float form-group--float-center\">Title Deed Number <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.information.title\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">View<textarea class=\"form-control text-center textarea-autoheight\" value.bind=\"model.information.view\"></textarea><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Square Feet <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.information.squareFeet\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Plot Size (if applicable) <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.information.plotSize\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group\"><label>Bedrooms</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\" click.delegate=\"toggleBathrooms('1')\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn\" click.delegate=\"toggleBathrooms('2')\"><input type=\"radio\" name=\"inner-search-beds\">2</label><label class=\"btn\" click.delegate=\"toggleBathrooms('3')\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\" click.delegate=\"toggleBathrooms('4')\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\" click.delegate=\"toggleBathrooms('4+')\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>Bathrooms</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\" click.delegate=\"toggleBathrooms('1')\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn\" click.delegate=\"toggleBathrooms('2')\"><input type=\"radio\" name=\"inner-search-beds\">2</label><label class=\"btn\" click.delegate=\"toggleBathrooms('3')\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\" click.delegate=\"toggleBathrooms('4')\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\" click.delegate=\"toggleBathrooms('4+')\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>No. of Floors</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\" click.delegate=\"toggleFloors('1')\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn\" click.delegate=\"toggleFloors('2')\"><input type=\"radio\" name=\"inner-search-beds\">2</label><label class=\"btn\" click.delegate=\"toggleFloors('3')\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\" click.delegate=\"toggleFloors('4')\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\" click.delegate=\"toggleFloors('4+')\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>Parking Space</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\" click.delegate=\"toggleParkingSpaces('1')\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn\" click.delegate=\"toggleParkingSpaces('2')\"><input type=\"radio\" name=\"inner-search-beds\" click.delegate=\"toggleParkingSpaces(2)\">2</label><label class=\"btn\" click.delegate=\"toggleParkingSpaces('3')\"><input type=\"radio\" name=\"inner-search-beds\" click.delegate=\"toggleParkingSpaces(3)\">3</label><label class=\"btn\" click.delegate=\"toggleParkingSpaces('3+')\"><input type=\"radio\" name=\"inner-search-beds\" click.delegate=\"toggleParkingSpaces(4)\">3+</label></div></div><div class=\"form-group form-group--float form-group--float-center\">Property Deed (jpg/png) <input type=\"file\" accept=\"image/*\" files.bind=\"deed\"> <i class=\"form-group__bar\"></i></div><ul><li repeat.for=\"file of deed | fileListToArray\"><h6>${file.name}: ${file.type} ${file.size / 1000} kb</h6><img src.bind=\"file | blobToUrl\" width=\"100\" height=\"100\"><img></li></ul><div class=\"form-group form-group--float form-group--float-center\">Property Images (jpg/png) <input type=\"file\" multiple=\"multiple\" accept=\"image/*\" files.bind=\"selectedFiles\"> <i class=\"form-group__bar\"></i></div><ul><li repeat.for=\"file of selectedFiles | fileListToArray\"><h6>${file.name}: ${file.type} ${file.size / 1000} kb</h6><img src.bind=\"file | blobToUrl\" width=\"100\" height=\"100\"><img></li></ul><a data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\" click.delegate=\"finalValidationAnSubmit(images)\"><i class=\"zmdi zmdi-check\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-3\"><div class=\"card\"><div class=\"submit-property__success\"><i class=\"zmdi zmdi-check\"></i><h2>Successful!</h2><p>Your proposal has been submitted and we will get back to you as soon as possible.</p><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/ON40SC1.png\" alt=\"\" width=\"300\" height=\"300\" style=\"display:inline\"></div></div></div></div></div></div></div></section></template>"; });
define('text!tnc/tnc.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><div class=\"card\"><div class=\"card__header\"><h2>Terms &amp; Conditions</h2></div><div class=\"card__body\"><p>The Property Buying Company offers usually follow the average timescale of 2 – 3 Weeks. However, in some cases, we have completed the transaction within 7 days.</p><p>The Property Buying Company reserves the right to have a certified valuation conducted on your property.</p><p>The Property Buying Company reserves the right to seek additional reports, certificates, prior to concluding the transaction.</p><p>The offer made by The Property Buying Company may not always be market price. Our offer depends on property type, condition, age, etc. It is important to note here that time saved and headache-free experience in selling your property is very significant.</p><p>Our initial offer is conditional upon final survey. Our offer may change if your property has any unfavourable condition – structural or otherwise.</p><p>Unless we are legally bound by a court order, all information about you, your transaction and any other information we may have through your interaction with The Property Buying Company, we will not release or misuse this information without your express consent.</p><p>Our Agreement will remain in force for a period of 3 months from the date of signing.</p><p>Breach of terms will be subject to the rules of the real estate regulators in the respective emirates.</p><p>Our offers are based on an analysis of recent transactions registered with the land registrars in the respective emirates. The Property Buying Company will take into consideration the upkeep of your property as well as the community.</p><p>If the agreement is terminated within the Agreement term by the seller, the seller agrees to a penalty of 10% of the offered price.</p></div></div></div></section><a class=\"btn brn-sm btn-default btn-static\" style=\"position:fixed;bottom:75%;right:0\" route-href=\"route: submit\">SELL NOW</a></template>"; });
//# sourceMappingURL=app-bundle.js.map