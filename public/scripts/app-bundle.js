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
                !callback && $('.submit-property__steps a[href="#submit-property-3"]').tab('show');
              }
            }
          }
          break;

        case 3:
          if (!this.model.information.title || this.model.information.title === '') {
            valid = false;
            alert('Please fill in the TITLE field');
          } else {
            if (!this.model.information.description || this.model.information.description === '') {
              valid = false;
              alert('Please fill in the DESCRIPTION field');
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
define('text!faq/faq.css', ['module'], function(module) { module.exports = "body{\r\n    /* background-color: #f3f3f3 !important */\r\n}"; });
define('text!home/home.css', ['module'], function(module) { module.exports = ".bg-style{\r\n  /* background: url(img/1.png) no-repeat center center;  */\r\n  background-color: #308A29;\r\n  -webkit-background-size: cover;\r\n  -moz-background-size: cover;\r\n  -o-background-size: cover;\r\n  background-size: cover;\r\n  /* max-height:600px; */\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n/* -------------------------------- \r\n\r\nParallax styling\r\n\r\n-------------------------------- */\r\n\r\n.aspect {\r\n  }\r\n\r\n.scene > *:nth-child(1) {\r\n}\r\n  .scene > *:nth-child(1) button {\r\n    -webkit-transform: rotate(150deg);\r\n        -ms-transform: rotate(150deg);\r\n            transform: rotate(150deg); }\r\n\r\n.scene > *:nth-child(2) {\r\n }\r\n  .scene > *:nth-child(2) button {\r\n    -webkit-transform: rotate(120deg);\r\n        -ms-transform: rotate(120deg);\r\n            transform: rotate(120deg); }\r\n\r\n.scene > *:nth-child(3) {\r\n}\r\n  .scene > *:nth-child(3) button {\r\n    -webkit-transform: rotate(90deg);\r\n        -ms-transform: rotate(90deg);\r\n            transform: rotate(90deg); }\r\n\r\n.scene > *:nth-child(4) {\r\n }\r\n  .scene > *:nth-child(4) button {\r\n    -webkit-transform: rotate(60deg);\r\n        -ms-transform: rotate(60deg);\r\n            transform: rotate(60deg); }\r\n\r\n.scene > *:nth-child(5) {\r\n  }\r\n  .scene > *:nth-child(5) button {\r\n    -webkit-transform: rotate(30deg);\r\n        -ms-transform: rotate(30deg);\r\n            transform: rotate(30deg); }\r\n\r\n.scene > *:nth-child(6) {\r\n }\r\n  .scene > *:nth-child(6) button {\r\n    -webkit-transform: rotate(0deg);\r\n        -ms-transform: rotate(0deg);\r\n            transform: rotate(0deg); }\r\n\r\n\r\n\r\n/* -------------------------------- \r\n\r\nPrimary style\r\n\r\n-------------------------------- */\r\n\r\n\r\n#cd-timeline {\r\n  position: relative;\r\n  padding: 2em 0;\r\n  margin-top: 2em;\r\n  margin-bottom: 2em;\r\n}\r\n#cd-timeline::before {\r\n  /* this is the vertical line */\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 1.4em;\r\n  height: 100%;\r\n  width: 4px;\r\n  background: #d7e4ed;\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  #cd-timeline {\r\n    margin-top: 3em;\r\n    margin-bottom: 3em;\r\n  }\r\n  #cd-timeline::before {\r\n    left: 50%;\r\n    margin-left: -2px;\r\n  }\r\n}\r\n\r\n.cd-timeline-block {\r\n  position: relative;\r\n  margin: 2em 0;\r\n}\r\n.cd-timeline-block:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.cd-timeline-block:first-child {\r\n  margin-top: 0;\r\n}\r\n.cd-timeline-block:last-child {\r\n  margin-bottom: 0;\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-block {\r\n    margin: 4em 0;\r\n  }\r\n  .cd-timeline-block:first-child {\r\n    margin-top: 0;\r\n  }\r\n  .cd-timeline-block:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n.cd-timeline-img {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);\r\n}\r\n.cd-timeline-img img {\r\n  display: block;\r\n  width: 24px;\r\n  height: 24px;\r\n  position: relative;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin-left: -12px;\r\n  margin-top: -12px;\r\n}\r\n.cd-timeline-img.cd-picture {\r\n  background: #75ce66;\r\n}\r\n.cd-timeline-img.cd-movie {\r\n  background: #c03b44;\r\n}\r\n.cd-timeline-img.cd-location {\r\n  background: #f0ca45;\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-img {\r\n    width: 60px;\r\n    height: 60px;\r\n    left: 50%;\r\n    margin-left: -30px;\r\n    /* Force Hardware Acceleration in WebKit */\r\n    -webkit-transform: translateZ(0);\r\n    -webkit-backface-visibility: hidden;\r\n  }\r\n  .cssanimations .cd-timeline-img.is-hidden {\r\n    visibility: hidden;\r\n  }\r\n  .cssanimations .cd-timeline-img.bounce-in {\r\n    visibility: visible;\r\n    -webkit-animation: cd-bounce-1 0.6s;\r\n    -moz-animation: cd-bounce-1 0.6s;\r\n    animation: cd-bounce-1 0.6s;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes cd-bounce-1 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.5);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n  }\r\n}\r\n@-moz-keyframes cd-bounce-1 {\r\n  0% {\r\n    opacity: 0;\r\n    -moz-transform: scale(0.5);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -moz-transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: scale(1);\r\n  }\r\n}\r\n@keyframes cd-bounce-1 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.5);\r\n    -moz-transform: scale(0.5);\r\n    -ms-transform: scale(0.5);\r\n    -o-transform: scale(0.5);\r\n    transform: scale(0.5);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1.2);\r\n    -moz-transform: scale(1.2);\r\n    -ms-transform: scale(1.2);\r\n    -o-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    -moz-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n    -o-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n.cd-timeline-content {\r\n  position: relative;\r\n  margin-left: 60px;\r\n  background: white;\r\n  border-radius: 0.25em;\r\n  padding: 1em;\r\n  box-shadow: 0 3px 0 #d7e4ed;\r\n}\r\n.cd-timeline-content:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.cd-timeline-content h2 {\r\n  color: #303e49;\r\n}\r\n\r\n.cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {\r\n  display: inline-block;\r\n}\r\n.cd-timeline-content p {\r\n  margin: 1em 0;\r\n  line-height: 1.6;\r\n}\r\n.cd-timeline-content .cd-read-more {\r\n  float: right;\r\n  padding: .8em 1em;\r\n  background: #acb7c0;\r\n  color: white;\r\n  border-radius: 0.25em;\r\n}\r\n.no-touch .cd-timeline-content .cd-read-more:hover {\r\n  background-color: #bac4cb;\r\n}\r\n.cd-timeline-content .cd-date {\r\n  float: left;\r\n  padding: .8em 0;\r\n  opacity: .7;\r\n}\r\n.cd-timeline-content::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 16px;\r\n  right: 100%;\r\n  height: 0;\r\n  width: 0;\r\n  border: 7px solid transparent;\r\n  border-right: 7px solid white;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n  .cd-timeline-content h2 {\r\n    font-size: 20px;\r\n    font-size: 1.25rem;\r\n  }\r\n  .cd-timeline-content p {\r\n    font-size: 16px;\r\n    font-size: 1rem;\r\n  }\r\n  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n@media only screen and (min-width: 1170px) {\r\n  .cd-timeline-content {\r\n    margin-left: 0;\r\n    padding: 1.6em;\r\n    width: 45%;\r\n  }\r\n  .cd-timeline-content::before {\r\n    top: 24px;\r\n    left: 100%;\r\n    border-color: transparent;\r\n    border-left-color: white;\r\n  }\r\n  .cd-timeline-content .cd-read-more {\r\n    float: left;\r\n  }\r\n  .cd-timeline-content .cd-date {\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 122%;\r\n    top: 6px;\r\n    font-size: 1.5em;\r\n  }\r\n  .cd-timeline-block:nth-child(even) .cd-timeline-content {\r\n    float: right;\r\n  }\r\n  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {\r\n    top: 24px;\r\n    left: auto;\r\n    right: 100%;\r\n    border-color: transparent;\r\n    border-right-color: white;\r\n  }\r\n  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {\r\n    float: right;\r\n  }\r\n  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {\r\n    left: auto;\r\n    right: 122%;\r\n    text-align: right;\r\n  }\r\n  .cssanimations .cd-timeline-content.is-hidden {\r\n    visibility: hidden;\r\n  }\r\n  .cssanimations .cd-timeline-content.bounce-in {\r\n    visibility: visible;\r\n    -webkit-animation: cd-bounce-2 0.6s;\r\n    -moz-animation: cd-bounce-2 0.6s;\r\n    animation: cd-bounce-2 0.6s;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1170px) {\r\n  /* inverse bounce effect on even content blocks */\r\n  .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {\r\n    -webkit-animation: cd-bounce-2-inverse 0.6s;\r\n    -moz-animation: cd-bounce-2-inverse 0.6s;\r\n    animation: cd-bounce-2-inverse 0.6s;\r\n  }\r\n}\r\n@-webkit-keyframes cd-bounce-2 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n  }\r\n}\r\n@-moz-keyframes cd-bounce-2 {\r\n  0% {\r\n    opacity: 0;\r\n    -moz-transform: translateX(-100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -moz-transform: translateX(20px);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: translateX(0);\r\n  }\r\n}\r\n@keyframes cd-bounce-2 {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(-100px);\r\n    -moz-transform: translateX(-100px);\r\n    -ms-transform: translateX(-100px);\r\n    -o-transform: translateX(-100px);\r\n    transform: translateX(-100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(20px);\r\n    -moz-transform: translateX(20px);\r\n    -ms-transform: translateX(20px);\r\n    -o-transform: translateX(20px);\r\n    transform: translateX(20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n    -moz-transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n    -o-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n@-webkit-keyframes cd-bounce-2-inverse {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(-20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n  }\r\n}\r\n@-moz-keyframes cd-bounce-2-inverse {\r\n  0% {\r\n    opacity: 0;\r\n    -moz-transform: translateX(100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -moz-transform: translateX(-20px);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: translateX(0);\r\n  }\r\n}\r\n@keyframes cd-bounce-2-inverse {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateX(100px);\r\n    -moz-transform: translateX(100px);\r\n    -ms-transform: translateX(100px);\r\n    -o-transform: translateX(100px);\r\n    transform: translateX(100px);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translateX(-20px);\r\n    -moz-transform: translateX(-20px);\r\n    -ms-transform: translateX(-20px);\r\n    -o-transform: translateX(-20px);\r\n    transform: translateX(-20px);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n    -moz-transform: translateX(0);\r\n    -ms-transform: translateX(0);\r\n    -o-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n"; });
define('text!submit/submit.css', ['module'], function(module) { module.exports = "body{\r\n    /* background-color: #f3f3f3 !important */\r\n}"; });
define('text!app-footer/app-footer.html', ['module'], function(module) { module.exports = "<template><footer id=\"footer\"><div class=\"container hidden-xs\"><div class=\"row\"><div class=\"col-sm-4\"><div class=\"footer__block\"><a class=\"logo clearfix\" href=\"\"><div class=\"logo__text\"><span>Realty</span> <span>This is a placeholder for the logo</span></div></a><address class=\"m-t-20 m-b-20 f-14\">#230, Mira 2, Dubailand</address><div class=\"f-20\">0000-000000000</div><div class=\"f-14 m-t-5\">contact@realty.com / info@realty.com</div><div class=\"f-20 m-t-20\"><a href=\"\" class=\"m-r-10\"><i class=\"zmdi zmdi-google\"></i></a> <a href=\"\" class=\"m-r-10\"><i class=\"zmdi zmdi-facebook\"></i></a> <a href=\"\"><i class=\"zmdi zmdi-twitter\"></i></a></div></div></div><div class=\"col-sm-4 col-sm-offset-4\"><div class=\"footer__block\"><div class=\"footer__title\">Disclaimer</div><div>Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</div></div></div></div></div><div class=\"footer__bottom\"><div class=\"container\"><span class=\"footer__copyright\">© Realty</span> <a route-href=\"route: tnc\">Terms &amp; Conditions</a> <a href=\"\">Privacy Policy</a> <span style=\"float:right\">Powered by <a href=\"http://razrlab.com\">RAZRLAB</a></span></div><div class=\"footer__to-top\" data-rmd-action=\"scroll-to\" data-rmd-target=\"html\"><i class=\"zmdi zmdi-chevron-up\"></i></div></div></footer></template>"; });
define('text!app-header/app-header.html', ['module'], function(module) { module.exports = "<template><header id=\"header\" class=\"header--minimal\"><div class=\"header__top\"><div class=\"container\"><ul class=\"top-nav\"><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-facebook\"></i></a></li><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-twitter\"></i></a></li><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-google\"></i></a></li><li class=\"pull-right hidden-xs\"><span><i class=\"zmdi zmdi-email\"></i>contact@realty.com</span></li><li class=\"pull-right hidden-xs\"><span><i class=\"zmdi zmdi-phone\"></i>Call us now on 000-000-000-0000</span></li></ul></div></div><div class=\"header__main\"><div class=\"container\"><a class=\"logo\" href=\"index.html\"><div class=\"logo__text\"><span>Realty</span> <span>This is a placeholder for the logo</span></div></a><div class=\"navigation-trigger visible-xs visible-sm\" data-rmd-action=\"block-open\" data-rmd-target=\".navigation\"><i class=\"zmdi zmdi-menu\"></i></div><ul class=\"navigation\"><li class=\"visible-xs visible-sm\"><a class=\"navigation__close\" data-rmd-action=\"navigation-close\" href=\"\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></li><li class=\"active navigation__dropdown\"><a route-href=\"route: home\" id=\"home-link\">Home</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: submit\" id=\"submit-link\">Submit</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: contact\" id=\"contact-link\">Contact</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: faq\" id=\"faq-link\">FAQ</a></li></ul></div></div></header></template>"; });
define('text!contact/contact.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Duis mollisest non commodo luctus nisierat porttito</h2><small>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit liberopharetra augueullamcorper nulla non metus auctor fringillaet magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare Cras justo odio, dapibus ac facilisis in, egestas eget quam.</small></header><div class=\"contact\"><div class=\"contact__map\"><div id=\"listing-map\"></div></div><div class=\"contact__inner clearfix\"><div class=\"col-sm-6\"><div class=\"contact__info\"><ul class=\"rmd-contact-list\"><li class=\"rmd-contact-list__title\"><i class=\"zmdi zmdi-home\"></i>Dubai Office</li><li><i class=\"zmdi zmdi-pin\"></i>230 Mira 2 Dubailand,<br>560030</li><li><i class=\"zmdi zmdi-phone\"></i>000-000-0000</li><li><i class=\"zmdi zmdi-email\"></i>contact@realty.com</li></ul><ul class=\"rmd-contact-list\"><li class=\"rmd-contact-list__title\"><i class=\"zmdi zmdi-home\"></i>UK Office</li><li><i class=\"zmdi zmdi-pin\"></i>7094 Blah Blah Mountain View,<br>123</li><li><i class=\"zmdi zmdi-phone\"></i>000-000-0000</li><li><i class=\"zmdi zmdi-email\"></i>info@realty.com</li></ul><div class=\"contact__social\"><a href=\"\" class=\"zmdi zmdi-facebook mdc-bg-indigo-300\"></a> <a href=\"\" class=\"zmdi zmdi-twitter mdc-bg-cyan-300\"></a> <a href=\"\" class=\"zmdi zmdi-google mdc-bg-red-300\"></a> <a href=\"\" class=\"zmdi zmdi-instagram mdc-bg-blue-grey-400\"></a></div></div></div><div class=\"col-sm-6\"><form class=\"contact__form\"><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Name</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Email Address</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Contact Number</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><textarea class=\"form-control textarea-autoheight\"></textarea><label>Message</label><i class=\"form-group__bar\"></i></div><small class=\"mdc-text-white-darker\">By sending us your information, you agree to our Terms of Use &amp; Privacy Policy.</small><div class=\"m-t-30\"><button type=\"submit\" class=\"btn brn-sm btn-default btn-static\">Send</button></div></form></div></div></div></div></section></template>"; });
define('text!faq/faq.html', ['module'], function(module) { module.exports = "<template><require from=\"./faq.css\"></require><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Frequently Asked Questions</h2><small>Duis mollis estnon commodo luctus nisierat porttitor ligula eget lacinia odio semnec</small></header><div class=\"row\"><div class=\"col-md-8 faq\"><div class=\"card faq__item\"><div class=\"card__header\"><h2>Are there any hidden fees involved?</h2></div><div class=\"card__body\">No. There are absolutely no fees involved in our service. What you see is what you pay.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>If needed, would somebody be available for a meeting?</h2></div><div class=\"card__body\">Yes. We would be more than happy to meet with you to make an offer on your property. Contact us today to arrange an appointment for one of our representatives to come out and see you.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Does it matter if I am behind on my mortgage payments and face the risk of repossession?</h2></div><div class=\"card__body\">No. Wherever possible, we will use our strong relationship with mortgage lenders to help with any situation you might have. If the property is about to be repossessed, we suggest you call us now and act sooner rather than later.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How do I know if I am getting a fair price for my property?</h2></div><div class=\"card__body\">Fair trade is at the core of xxx. Time is also money and it must be factored in the transaction. Allow us to make an offer and find out.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How do you calculate the value of my property?</h2></div><div class=\"card__body\">We use our collective experience of 30 years and our extensive knowledge of local markets. We use our proprietary system that provides us with the most up-to-date data to help us to offer you a fair price.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How long does the entire process take?</h2></div><div class=\"card__body\">The average time to conclude the transaction is usually 2 – 3 weeks. In some cases, we have concluded the transaction in 7 days. Having said that, xxx will work with you to complete the entire process within the timeline ideal to you.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How quick will I get an offer on my property?</h2></div><div class=\"card__body\">Less than 24hrs. Submit your property on our portal or call us on xxxx for our offer.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>What type of properties do you buy?</h2></div><div class=\"card__body\">Xxx buys the following types of property: Independent Villas, Townhouses, Apartments. Commercial property and land will be on a case by case basis.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>I live in an ex council house. Can I still use your service?</h2></div><div class=\"card__body\">Yes we can buy ex council houses.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Which areas does xxx cover?</h2></div><div class=\"card__body\">All freehold and leasehold areas in the United Arab Emirates.</div></div></div><div class=\"col-md-4 rmd-sidebar-mobile\" id=\"write-to-us\"><form class=\"card\"><div class=\"card__header\"><h2>Write to us</h2><small>Aeneanquam ellentesque ornare lacinia</small></div><div class=\"card__body m-t-10\"><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Name</label></div><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Email Address</label></div><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Contact Number</label></div><div class=\"form-group form-group--float\"><textarea class=\"form-control textarea-autoheight\"></textarea><i class=\"form-group__bar\"></i><label>Message</label></div><small class=\"text-muted\">By sending us your information, you agree our Terms of Use &amp; Privacy Policy.</small></div><div class=\"card__footer\"><button class=\"btn btn-primary\">Submit</button> <button class=\"btn btn-link\">Reset</button> <button class=\"btn btn-link visible-sm-inline visible-xs-inline\" data-rmd-action=\"block-close\" data-rmd-target=\"#write-to-us\">Cancel</button></div></form></div></div></div></section></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><require from=\"./home.css\"></require><div class=\"bg-style\"><div id=\"scene\" class=\"scene\"><div data-depth=\"0.00\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/razrlab/image/upload/v1501401289/background_aiwdpp.png\"></div><div data-depth=\"0.10\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/razrlab/image/upload/v1501401238/shadow2_jt6akg.png\"></div><div data-depth=\"0.25\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/razrlab/image/upload/v1501401238/shadow1_yvsair.png\"></div><div data-depth=\"0.00\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/razrlab/image/upload/v1501401239/buildings_isuotb.png\"></div><div data-depth=\"0.70\"><img class=\"img-responsive\" src=\"http://res.cloudinary.com/razrlab/image/upload/v1501401239/clouds_narn5q.png\"></div></div></div><div id=\"maincontain\"><section class=\"section submit-ticker\"><p>Are you looking to sell your valuable property? Realty is your destination!</p><a route-href=\"route: submit\">Submit your property now!</a></section><section class=\"section info-box\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-4 col-md-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/happyman.png\" alt=\"\"></div></div><div class=\"col-sm-12 col-md-8\"><div class=\"info-box__item\"><h3>Your First Step to a Brighter Future</h3><p>At The Property Buying Company, we understand that you can have a number of reasons to sell your property quickly. Be it to attain financial freedom or to invest in a new property, we are a Company you can rely on to achieve your goals in the quickest possible way. Being the pioneers in Dubai, we understand the ins and outs of the transactional process which can be cumbersome at times. The Property Buying Company does not rely on financial institutions – rather, we use our large cash reserve to buy properties. This gives us the ability to buy your property in the shortest period possible. If this is what you are looking for, <a route-href=\"route: submit\">Sell Your Property Now</a></p></div></div></div></div></section><section class=\"section info-box\" style=\"background:#3f51b5\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-12 col-md-8\"><div class=\"info-box__item\"><h3 style=\"color:#fff\">Why use us</h3><p><ul style=\"text-align:left;color:#fff\"><li>Selling your property can be a costly affair. At The Property Buying Company, we understand this and that’s why, we will bear the cost of all the fees associated with the sale of your property.</li><li>Sell buy to let property Buy to let property you need to sell quickly? Sell it to us to clear the mortgage and release the capital.</li><li>Property part exchange buying a new property and struggling to meet builders' timescales or worried about losing out to someone in a better position?</li><li>The Property Buying Company understands that time is money too. This is factored in the price offered. Therefore, our offer will be the best in the market to sell your property in the shortest time.</li></ul></p></div></div><div class=\"col-sm-4 col-md-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/investing.png\" alt=\"\"></div></div></div></div></section><section class=\"section info-box\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/O9IY331.png\" alt=\"\" width=\"300\" height=\"300\"><h3>No Fees Whatsoever</h3><p>Selling your property can be a costly affair. At The Property Buying Company, we understand this and that’s why, we will bear the cost of all the fees associated with the sale of your property.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/OIHEI81.png\" alt=\"\" width=\"300\" height=\"300\"><h3>Flexible Timeline</h3><p>The timetable for the transaction will be set according to your convenience and needs. This way, we can ensure you get your money precisely when you need it.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/OAI50P1.png\" alt=\"\" width=\"300\" height=\"300\"><h3>Best Price to Time Ratio</h3><p>The Property Buying Company understands that time is money too. This is factored in the price offered. Therefore, our offer will be the best in the market to sell your property in the shortest time.</p></div></div></div></div></section><section class=\"section\" style=\"text-align:center\"><div class=\"container\"><h3>The Typical Selling Process</h3></div></section><section id=\"cd-timeline\" class=\"cd-container\"><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-picture\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Listed at AED 1,000,000</h2><p style=\"font-size:1.5em\">You put your property for sale with an agent for AED 1,000,000</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/houseInspect.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 1</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-movie\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Reduced to AED 950,000</h2><p style=\"font-size:1.5em\">After 2 months with not a lot of interest, you reduce your asking price to AED 950,000</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/month3.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 2</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-picture\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Reduced to AED 900,000</h2><p style=\"font-size:1.5em\">After 3 months with little interest, you decide to reduce your asking price again to AED 900,000 and find a potential buyer</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/month6.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 3</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-location\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Reduced to AED 850,000</h2><p style=\"font-size:1.5em\">Due to unforeseen circumstances, the deal does not go through. You decide to reduce the asking price to AED 875,000 upon the advice of your agent, as they need to close the deal to get their commission</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/fallsThrough.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 4</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-location\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-7\"><h2>Sold for AED 800,000</h2><p style=\"font-size:1.5em\">With a little bit of frustration and eagerness to sell, you decide to sell your property for AED 800,000 which then takes 1 month to close the deal</p></div><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/month12.png\" alt=\"\" width=\"200\" height=\"200\"></div></div><span class=\"cd-date\">Month 5</span></div></div><div class=\"cd-timeline-block\"><div class=\"cd-timeline-img cd-movie\"><img src=\"img/clock.png\"></div><div class=\"cd-timeline-content\"><div row=\"row\"><div class=\"col-sm-4\"><img class=\"img-responsive\" src=\"img/moneylost.png\" alt=\"\" width=\"200\" height=\"200\"></div><div class=\"col-sm-7\"><h2>Net in your pocket AED 751,000</h2><p style=\"font-size:1.5em\">You do not actually net the full amount. The following fees are applicable:<ul><li><b>AED 22,000 </b>mortgage for 6 months</li><li><b>AED 3,000 </b>housing Fees for 6 months</li><li><b>AED 6,000</b> utility for 6 months</li><li><b>AED 16,000</b> in agent Commission</li><li><b>AED 2,000</b> NOC</li><li>Most importantly, it has taken nearly 6 months to sell your property!</li></ul></p></div></div><span class=\"cd-date\">Month 6</span></div></div></section><section class=\"section\" style=\"text-align:center\"><div class=\"container\"><h3>The Property Buying Company can complete this entire transaction within 2-3 weeks by paying you your final asking price of AED 800,000</h3><h3>A massive potential saving of AED 49,000 and 5 months’ worth of time!</h3></div></section><a class=\"btn brn-sm btn-default btn-static\" style=\"position:fixed;bottom:75%;right:0\" route-href=\"route: submit\">SELL NOW</a></div></template>"; });
define('text!submit/submit.html', ['module'], function(module) { module.exports = "<template>'<require from=\"./submit.css\"></require>'<section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Submit your property</h2><small>Please fill up some basic details about the property</small></header><div class=\"submit-property\"><ul class=\"submit-property__steps\"><li class=\"active\"><a href=\"#submit-property-1\" data-toggle=\"tab\">1</a></li><li><a href=\"#submit-property-2\" data-toggle=\"tab\">2</a></li><li><a href=\"#submit-property-3\" data-toggle=\"tab\">3</a></li><li><a id=\"submitted\" href=\"#submit-property-4\">4</a></li><li class=\"submit-property__caret\"></li></ul><div class=\"tab-content submit-property__content\"><div class=\"tab-pane fade in active\" id=\"submit-property-1\"><div class=\"card\"><div class=\"card__header\"><h2>Property Location</h2><small>Please fill up the location information of the property.</small></div><form class=\"card__body\"><div class=\"form-group form-group--float m-b-5\">Address <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.location.address\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float m-b-5\">Unit/Floor/Block <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.location.unit\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group\"><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"model.location.currentlyLiving\"> <i class=\"input-helper\"></i> I currently live here</label></div></div><a data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\" click.delegate=\"validateStep(1)\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-2\"><div class=\"card\"><div class=\"card__header\"><h2>Contact Information</h2><small>Please fill up your contact information so we can get in touch with you.</small></div><form class=\"card__body\"><div class=\"form-group form-group--float form-group--float-center\">Full Name <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.contact.name\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Organization Name (Opt.) <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.contact.organization\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center m-b-5\">Email Address <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.contact.email\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Contact Number <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.contact.contactNo\"> <i class=\"form-group__bar\"></i></div><a data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\" click.delegate=\"validateStep(2)\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-3\"><div class=\"card\"><div class=\"card__header\"><h2>Property Information</h2><small>Please fill up information about the property.</small></div><form class=\"card__body\"><div class=\"form-group\"><label>Property Type</label><select class=\"select2\" value.bind=\"model.property.type\"><option value=\"studio\">Studio</option><option value=\"apartment\">Apartment</option><option value=\"townhouse\">Townhouse</option><option value=\"villa\">Villa</option></select></div><div class=\"form-group form-group--float form-group--float-center\">Property title <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.information.title\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Description<textarea class=\"form-control text-center textarea-autoheight\" value.bind=\"model.information.description\"></textarea><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Square Feet <input type=\"text\" class=\"form-control text-center\" value.bind=\"model.information.squareFeet\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--float form-group--float-center\">Year Built <input type=\"numeric\" class=\"form-control text-center\" value.bind=\"model.information.year\"> <i class=\"form-group__bar\"></i></div><div class=\"form-group\"><label>Bedrooms</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\" click.delegate=\"toggleBathrooms('1')\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn\" click.delegate=\"toggleBathrooms('2')\"><input type=\"radio\" name=\"inner-search-beds\">2</label><label class=\"btn\" click.delegate=\"toggleBathrooms('3')\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\" click.delegate=\"toggleBathrooms('4')\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\" click.delegate=\"toggleBathrooms('4+')\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>Bathrooms</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\" click.delegate=\"toggleBathrooms('1')\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn\" click.delegate=\"toggleBathrooms('2')\"><input type=\"radio\" name=\"inner-search-beds\">2</label><label class=\"btn\" click.delegate=\"toggleBathrooms('3')\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\" click.delegate=\"toggleBathrooms('4')\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\" click.delegate=\"toggleBathrooms('4+')\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>No. of Floors</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\" click.delegate=\"toggleFloors('1')\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn\" click.delegate=\"toggleFloors('2')\"><input type=\"radio\" name=\"inner-search-beds\">2</label><label class=\"btn\" click.delegate=\"toggleFloors('3')\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\" click.delegate=\"toggleFloors('4')\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\" click.delegate=\"toggleFloors('4+')\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>Parking Space</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\" click.delegate=\"toggleParkingSpaces('1')\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn\" click.delegate=\"toggleParkingSpaces('2')\"><input type=\"radio\" name=\"inner-search-beds\" click.delegate=\"toggleParkingSpaces(2)\">2</label><label class=\"btn\" click.delegate=\"toggleParkingSpaces('3')\"><input type=\"radio\" name=\"inner-search-beds\" click.delegate=\"toggleParkingSpaces(3)\">3</label><label class=\"btn\" click.delegate=\"toggleParkingSpaces('3+')\"><input type=\"radio\" name=\"inner-search-beds\" click.delegate=\"toggleParkingSpaces(4)\">3+</label></div></div><div class=\"form-group form-group--float form-group--float-center\">Property Deed <input type=\"file\" multiple=\"multiple\" accept=\"image/*\" files.bind=\"deed\"> <i class=\"form-group__bar\"></i></div><ul><li repeat.for=\"file of deed | fileListToArray\"><h6>${file.name}: ${file.type} ${file.size / 1000} kb</h6><img src.bind=\"file | blobToUrl\" width=\"100\" height=\"100\"><img> Last Modified: ${file.lastModifiedDate}</li></ul><div class=\"form-group form-group--float form-group--float-center\">Property Images (jpg or png) <input type=\"file\" multiple=\"multiple\" accept=\"image/*\" files.bind=\"selectedFiles\"> <i class=\"form-group__bar\"></i></div><ul><li repeat.for=\"file of selectedFiles | fileListToArray\"><h6>${file.name}: ${file.type} ${file.size / 1000} kb</h6><img src.bind=\"file | blobToUrl\" width=\"100\" height=\"100\"><img> Last Modified: ${file.lastModifiedDate}</li></ul><a data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\" click.delegate=\"finalValidationAnSubmit(images)\"><i class=\"zmdi zmdi-check\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-4\"><div class=\"card\"><div class=\"submit-property__success\"><i class=\"zmdi zmdi-check\"></i><h2>Successful!</h2><p>Your proposal has been submitted and we will get back to you as soon as possible.</p><div class=\"info-box__item\"><img class=\"img-responsive\" src=\"img/ON40SC1.png\" alt=\"\" width=\"300\" height=\"300\" style=\"display:inline\"></div></div></div></div></div></div></div></section></template>"; });
define('text!tnc/tnc.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><div class=\"card\"><div class=\"card__header\"><h2>Terms &amp; Conditions</h2></div><div class=\"card__body\"><p>Before you instruct us to act in the sale of your property, we wish to draw your attention to our Terms of Business. The Property Buying Company can offer an average completion timescale for a standard property purchase is 3 to 4 weeks subject to survey. We have however completed purchases in as little as 7 days.</p><p>A valuation of the property will be instructed prior to the sale being completed at our cost by independent RICS surveyor. We also often also instruct a high street estate agent to give us a market appraisal for your property too.</p><p>Should it be necessary, we will also acquire a builders report at our discretion together with additional searches against the property as necessary.</p><p>As we are a trade buyer of properties we do not pay the full market value of a property. The price we can pay for a property depends on the property type, area, condition, age and construction type and is subject to final valuation of which up to 80% of the property value is paid.</p><p>Our initial offer is conditional upon final survey and is subject to any adverse entries being revealed in the searches carried out against the property and any other matters which are subsequently revealed to us which would affect the market value of the property.</p><p>Money Laundering Compliance is required by law and will be carried out as standard and on entering into the Agreement and accepting our Terms of Business you are consenting to such a check being carried out.</p><p>We will not without your consent release or misuse confidential information given by you during the property sale process unless legally required to do so.</p><p>We will keep clear records of all transactions for a period of 6 years.</p><p>You are free to use any solicitor of your choice. However, if you choose to use our recommended solicitor then we will cover your fees in relation to the sale of the property. The reason that we recommend you to use our recommended solicitor is because we are dealing with multiple transactions at any one time and to work towards a desired timescale or completion date. Our recommended solicitors are independent and abide by all Law Society guidelines and are acting on an independent basis for you the client.</p><p>Our Agreement will remain in force for a period of 4 months from the date of the Agreement signed by you.</p><p>Should the Agreement be terminated within the 4 month period then we will be at liberty to register a Unilateral Notice against the property at HM Land Registry to restrict the sale of the property within the period in which the Agreement is in force to protect our interest.</p><p>You are free to use any solicitor of your choice. However, if you choose to use our recommended solicitor then we will cover your fees in relation to the sale of the property. The reason that we recommend We will prior to entering into the Agreement verify the property information provided is correct including the ability of the Seller to sell the property without consent of any other person. to use our recommended solicitor is because we are dealing with multiple transactions at any one time and to work towards a desired timescale or completion date. Our recommended solicitors are independent and abide by all Law Society guidelines and are acting on an independent basis for you the client.</p><p>The Agreement can be cancelled within the 14 day cooling off period from the date the contract was entered into.</p><p>We will try to solve any disagreements or complaints quickly and efficiently and will acknowledge receipt of any complaint within 3 days together with a full response within 15 days. Should you wish to make a complaint please do so in writing and a response will be provided as above. If, after following our formal complaints procedure (above), you are dissatisfied with the responses from us you can direct any complaint to The Property Ombudsman.</p><p>The Property Buying Company are members agents of The Property Ombusdman scheme for dispute resolution and we are bound by their code of practice.</p><p>We will not discriminate against any person under the definitions of the Sex Discrimination Act 1975 or the Race Relations Act 1976. We will not discriminate, or threaten to discriminate against any prospective Buyer of your property because that person refuses to agree that we will (directly or indirectly) provide services to them.</p><p>Initial valuations are based on an analysis of recent transactions registered with the Land Registry and similar properties within the property area, additional factors such as décor and appearance are also taken into account. Valuations are only a recommendation to the vendor and are subject to full survey.</p><p>If the agreement is terminated within the Agreement term by the seller then we will be entitled to be reimbursed for all costs and expenses incurred by us to a maximum of £750.00 which will be chargeable at our discretion.</p></div></div></div></section><a class=\"btn brn-sm btn-default btn-static\" style=\"position:fixed;bottom:75%;right:0\" route-href=\"route: submit\">SELL NOW</a></template>"; });
//# sourceMappingURL=app-bundle.js.map