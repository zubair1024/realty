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

  var Faq = exports.Faq = function Faq() {
    _classCallCheck(this, Faq);
  };
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
      function castParallax() {
        var opThresh = 350;
        var opFactor = 750;

        window.addEventListener('scroll', function (event) {
          var top = this.pageYOffset;

          var layers = document.getElementsByClassName('parallax');
          var layer, speed, yPos;
          for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            var yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
          }
        });
      }

      function dispelParallax() {
        $('#nonparallax').css('display', 'block');
        $('#parallax').css('display', 'none');
      }

      function castSmoothScroll() {
        $.srSmoothscroll({
          step: 80,
          speed: 300,
          ease: 'linear'
        });
      }

      function startSite() {
        var platform = navigator.platform.toLowerCase();
        var userAgent = navigator.userAgent.toLowerCase();

        if (platform.indexOf('ipad') != -1 || platform.indexOf('iphone') != -1) {
          dispelParallax();
        } else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1) {
          castParallax();
          if ($.browser.webkit) {
            castSmoothScroll();
          }
        } else {
          castParallax();
        }
      }

      document.body.onload = startSite();
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
define('submit/submit',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Submit = exports.Submit = function Submit() {
    _classCallCheck(this, Submit);
  };
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

  var Tnc = exports.Tnc = function Tnc() {
    _classCallCheck(this, Tnc);
  };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app-header/app-header\"></require><require from=\"./app-footer/app-footer\"></require><app-header></app-header><router-view></router-view><app-footer></app-footer></template>"; });
define('text!contact/contact.css', ['module'], function(module) { module.exports = "body{\r\n    /* background-color: #f3f3f3 !important */\r\n}"; });
define('text!faq/faq.css', ['module'], function(module) { module.exports = "body{\r\n    /* background-color: #f3f3f3 !important */\r\n}"; });
define('text!app-footer/app-footer.html', ['module'], function(module) { module.exports = "<template><footer id=\"footer\"><div class=\"container hidden-xs\"><div class=\"row\"><div class=\"col-sm-4\"><div class=\"footer__block\"><a class=\"logo clearfix\" href=\"\"><div class=\"logo__text\"><span>Realty</span> <span>This is a placeholder for the logo</span></div></a><address class=\"m-t-20 m-b-20 f-14\">#230, Mira 2, Dubailand</address><div class=\"f-20\">0000-000000000</div><div class=\"f-14 m-t-5\">contact@realty.com / info@realty.com</div><div class=\"f-20 m-t-20\"><a href=\"\" class=\"m-r-10\"><i class=\"zmdi zmdi-google\"></i></a> <a href=\"\" class=\"m-r-10\"><i class=\"zmdi zmdi-facebook\"></i></a> <a href=\"\"><i class=\"zmdi zmdi-twitter\"></i></a></div></div></div><div class=\"col-sm-4 col-sm-offset-4\"><div class=\"footer__block\"><div class=\"footer__title\">Disclaimer</div><div>Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</div></div></div></div></div><div class=\"footer__bottom\"><div class=\"container\"><span class=\"footer__copyright\">© Realty</span> <a route-href=\"route: tnc\">Terms &amp; Conditions</a> <a href=\"\">Privacy Policy</a></div><div class=\"footer__to-top\" data-rmd-action=\"scroll-to\" data-rmd-target=\"html\"><i class=\"zmdi zmdi-chevron-up\"></i></div></div></footer></template>"; });
define('text!home/home.css', ['module'], function(module) { module.exports = "/* body{\r\n    background-color: #9CD3F9 !important\r\n} */\r\n#maincontain {\r\n  /*background-color: #d3b0bc; */\r\n  background-color: #000;\r\n  position: relative;\r\n   z-index: 98; \r\n  height: 300px;\r\n  width: 100%;\r\n}\r\n\r\n/* PARALLAX */\r\n\r\n.keyart, .keyart_layer {\r\n  height: 60rem;\r\n}\r\n\r\n#parallax {\r\n  display: none;\r\n}\r\n\r\n#nonparallax {\r\n  display: block;\r\n}\r\n\r\n#nonparallax {\r\n  background-image: url(''); /* mobile image */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: auto 100%;\r\n}\r\n\r\n.keyart {\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n\r\n .keyart_layer {\r\n  background-position: bottom center;\r\n  background-size: auto 1038px;\r\n   background-repeat: repeat-x; \r\n  width: 100%;\r\n  position: absolute;\r\n} \r\n\r\n.keyart_layer.parallax {\r\n  position: fixed;\r\n  background-size: cover;\r\n}\r\n\r\n#keyart-0 {\r\n  /* background-image: url('http://i.imgur.com/txKhHme.png');\r\n  background-color: #9CD3F9; */\r\n}\r\n\r\n#keyart-1 {\r\n  background-image: url('http://i.imgur.com/qTVCuvY.png');\r\n}\r\n\r\n#keyart-2 {\r\n  background-image: url('http://i.imgur.com/6H6GtL1.png');\r\n}\r\n\r\n#keyart-3 {\r\n  background-image: url('http://i.imgur.com/CICw5ld.png');\r\n}\r\n\r\n#keyart-4 {\r\n  background-image: url('http://i.imgur.com/ixkLm7b.png');\r\n}\r\n\r\n#keyart-5 {\r\n  background-image: url('http://i.imgur.com/MnybSr8.png');\r\n}\r\n\r\n#keyart-6 {\r\n  background-image: url('http://i.imgur.com/jbOO94A.png');\r\n}\r\n\r\n#keyart-7 {\r\n  background-image: url('img/jbOO94A.png');\r\n}\r\n\r\n#keyart-8 {\r\n  background-image: url('img/jbOO94A.png');\r\n}\r\n\r\n#keyart-scrim {\r\n  background-color: #9CD3F9;\r\n  opacity: 0;\r\n}\r\n\r\n/********************/\r\n/********************/\r\n\r\n/* ENABLES PARALLAX */\r\n\r\n/********************/\r\n/********************/\r\n\r\n@media (min-width: 601px) {\r\n  #nonparallax {\r\n    display: none;\r\n  }\r\n  #parallax {\r\n    display: block;\r\n  }\r\n}\r\n\r\n/*********************/\r\n/*********************/\r\n\r\n/* DISABLES PARALLAX */\r\n\r\n/*********************/\r\n/*********************/\r\n\r\n@media (max-width: 600px) {\r\n  #nonparallax {\r\n    display: block;\r\n  }\r\n  #parallax {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-device-width: 450px) {\r\n  /* PARALLAX */\r\n  .keyart, .keyart_layer {\r\n    height: 550px;\r\n  }\r\n\r\n  .keyart_layer {\r\n    position: absolute;\r\n    background-size: auto 600px;\r\n  }\r\n}\r\n\r\n/* Headline */\r\n\r\n#logo-box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n/* .alpha-label {\r\n  color: rgba(255, 255, 255, .8);\r\n  text-transform: uppercase;\r\n  font-size: .15em;\r\n  font-weight: 600;\r\n  border: 1px solid currentColor;\r\n  border-radius: 1em;\r\n  display: inline-block;\r\n  padding: .3em .75em;\r\n  line-height: 1;\r\n  vertical-align: top;\r\n  position: absolute;\r\n  font-family: 'Roboto', Helvetica Neue, Helvetica, Arial, sans-serif;\r\n  margin-top: 25px;\r\n} */\r\n/* #logo-box h1 {\r\n  margin-bottom: .1em;\r\n  font-family: 'Shadows Into Light',\r\n    cursive,\r\n    'Avenir Next',\r\n    Avenir,\r\n    'Helvetica Neue',\r\n    Helvetica,\r\n    Arial,\r\n    sans-serif;\r\n  font-weight: 500;\r\n  font-size: 70px;\r\n  color: #FFDF00;\r\n}\r\n#logo-box h2 {\r\n  font-size: 22px;\r\n  font-weight: 300;\r\n  margin-bottom: 1em;\r\n  margin-top: -.5em;\r\n  color: #fff;\r\n} */\r\n/* button */\r\n/* .m-t-1 {\r\n  margin-top: 1rem;\r\n} */\r\n/* .btn {\r\n  font-family: 'Avenir Next',\r\n    Avenir,\r\n    'Helvetica Neue',\r\n    Helvetica,\r\n    Arial,\r\n    sans-serif;\r\n  display: inline-block;\r\n  padding: .7em 1.4em;\r\n  border-radius: 5px;\r\n  color: #2980b9;\r\n  line-height: 1.5em;\r\n  text-decoration: none;\r\n  font-weight: 500;\r\n  background-color: transparent;\r\n  box-shadow: inset 0 0 0 1px #2980b9;\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  -webkit-font-smoothing: antialiased;\r\n  -webkit-tap-highlight-color: transparent;\r\n  border: 0;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n}\r\n.btn-play {\r\n  background: rgba(255, 255, 255, .9);\r\n  border: none;\r\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .2);\r\n  color: #2980b9;\r\n  font-weight: 500;\r\n  padding-right: 30px;\r\n  transition: box-shadow .2s ease;\r\n}\r\n.btn-play:after {\r\n  font-family: \"Ionicons\";\r\n  content: \"\\f10b\";\r\n  width: 15px;\r\n  height: 12px;\r\n  background-repeat: no-repeat;\r\n  display: inline-block;\r\n  position: relative;\r\n  left: 10px;\r\n  top: 1px;\r\n  font-weight: 700;\r\n  -webkit-transition: all .3s;\r\n  -moz-transition: all .3s;\r\n  transition: all .3s;\r\n}\r\n.btn-play:hover::after {\r\n  left: 15px;\r\n}\r\n.btn-large {\r\n  font-size: 16px;\r\n  padding: 8px 16px;\r\n} */\r\n"; });
define('text!submit/submit.css', ['module'], function(module) { module.exports = "body{\r\n    /* background-color: #f3f3f3 !important */\r\n}"; });
define('text!app-header/app-header.html', ['module'], function(module) { module.exports = "<template><header id=\"header\" class=\"header--minimal\"><div class=\"header__top\"><div class=\"container\"><ul class=\"top-nav\"><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-facebook\"></i></a></li><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-twitter\"></i></a></li><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-google\"></i></a></li><li class=\"pull-right hidden-xs\"><span><i class=\"zmdi zmdi-email\"></i>contact@realty.com</span></li><li class=\"pull-right hidden-xs\"><span><i class=\"zmdi zmdi-phone\"></i>Call us now on 000-000-000-0000</span></li></ul></div></div><div class=\"header__main\"><div class=\"container\"><a class=\"logo\" href=\"index.html\"><div class=\"logo__text\"><span>Realty</span> <span>This is a placeholder for the logo</span></div></a><div class=\"navigation-trigger visible-xs visible-sm\" data-rmd-action=\"block-open\" data-rmd-target=\".navigation\"><i class=\"zmdi zmdi-menu\"></i></div><ul class=\"navigation\"><li class=\"visible-xs visible-sm\"><a class=\"navigation__close\" data-rmd-action=\"navigation-close\" href=\"\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></li><li class=\"active navigation__dropdown\"><a route-href=\"route: home\" id=\"home-link\">Home</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: submit\" id=\"submit-link\">Submit</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: contact\" id=\"contact-link\">Contact</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: faq\" id=\"faq-link\">FAQ</a></li></ul></div></div></header></template>"; });
define('text!contact/contact.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Duis mollisest non commodo luctus nisierat porttito</h2><small>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit liberopharetra augueullamcorper nulla non metus auctor fringillaet magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare Cras justo odio, dapibus ac facilisis in, egestas eget quam.</small></header><div class=\"contact\"><div class=\"contact__map\"><div id=\"listing-map\"></div></div><div class=\"contact__inner clearfix\"><div class=\"col-sm-6\"><div class=\"contact__info\"><ul class=\"rmd-contact-list\"><li class=\"rmd-contact-list__title\"><i class=\"zmdi zmdi-home\"></i>Dubai Office</li><li><i class=\"zmdi zmdi-pin\"></i>230 Mira 2 Dubailand,<br>560030</li><li><i class=\"zmdi zmdi-phone\"></i>000-000-0000</li><li><i class=\"zmdi zmdi-email\"></i>contact@realty.com</li></ul><ul class=\"rmd-contact-list\"><li class=\"rmd-contact-list__title\"><i class=\"zmdi zmdi-home\"></i>UK Office</li><li><i class=\"zmdi zmdi-pin\"></i>7094 Blah Blah Mountain View,<br>123</li><li><i class=\"zmdi zmdi-phone\"></i>000-000-0000</li><li><i class=\"zmdi zmdi-email\"></i>info@realty.com</li></ul><div class=\"contact__social\"><a href=\"\" class=\"zmdi zmdi-facebook mdc-bg-indigo-300\"></a> <a href=\"\" class=\"zmdi zmdi-twitter mdc-bg-cyan-300\"></a> <a href=\"\" class=\"zmdi zmdi-google mdc-bg-red-300\"></a> <a href=\"\" class=\"zmdi zmdi-instagram mdc-bg-blue-grey-400\"></a></div></div></div><div class=\"col-sm-6\"><form class=\"contact__form\"><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Name</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Email Address</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Contact Number</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><textarea class=\"form-control textarea-autoheight\"></textarea><label>Message</label><i class=\"form-group__bar\"></i></div><small class=\"mdc-text-white-darker\">By sending us your information, you agree to our Terms of Use &amp; Privacy Policy.</small><div class=\"m-t-30\"><button type=\"submit\" class=\"btn brn-sm btn-default btn-static\">Send</button></div></form></div></div></div></div></section></template>"; });
define('text!faq/faq.html', ['module'], function(module) { module.exports = "<template><require from=\"./faq.css\"></require><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Frequently Asked Questions</h2><small>Duis mollis estnon commodo luctus nisierat porttitor ligula eget lacinia odio semnec</small></header><div class=\"row\"><div class=\"col-md-8 faq\"><div class=\"card faq__item\"><div class=\"card__header\"><h2>Are there any hidden fees involved?</h2></div><div class=\"card__body\">No. There are absolutely no fees involved in our service. What you see is what you pay.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>If needed, would somebody be available for a meeting?</h2></div><div class=\"card__body\">Yes. We would be more than happy to meet with you to make an offer on your property. Contact us today to arrange an appointment for one of our representatives to come out and see you.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Does it matter if I am behind on my mortgage payments and face the risk of repossession?</h2></div><div class=\"card__body\">No. Wherever possible, we will use our strong relationship with mortgage lenders to help with any situation you might have. If the property is about to be repossessed, we suggest you call us now and act sooner rather than later.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How do I know if I am getting a fair price for my property?</h2></div><div class=\"card__body\">Fair trade is at the core of xxx. Time is also money and it must be factored in the transaction. Allow us to make an offer and find out.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How do you calculate the value of my property?</h2></div><div class=\"card__body\">We use our collective experience of 30 years and our extensive knowledge of local markets. We use our proprietary system that provides us with the most up-to-date data to help us to offer you a fair price.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How long does the entire process take?</h2></div><div class=\"card__body\">The average time to conclude the transaction is usually 2 – 3 weeks. In some cases, we have concluded the transaction in 7 days. Having said that, xxx will work with you to complete the entire process within the timeline ideal to you.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How quick will I get an offer on my property?</h2></div><div class=\"card__body\">Less than 24hrs. Submit your property on our portal or call us on xxxx for our offer.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>What type of properties do you buy?</h2></div><div class=\"card__body\">Xxx buys the following types of property: Independent Villas, Townhouses, Apartments. Commercial property and land will be on a case by case basis.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>I live in an ex council house. Can I still use your service?</h2></div><div class=\"card__body\">Yes we can buy ex council houses.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Which areas does xxx cover?</h2></div><div class=\"card__body\">All freehold and leasehold areas in the United Arab Emirates.</div></div></div><div class=\"col-md-4 rmd-sidebar-mobile\" id=\"write-to-us\"><form class=\"card\"><div class=\"card__header\"><h2>Write to us</h2><small>Aeneanquam ellentesque ornare lacinia</small></div><div class=\"card__body m-t-10\"><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Name</label></div><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Email Address</label></div><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Contact Number</label></div><div class=\"form-group form-group--float\"><textarea class=\"form-control textarea-autoheight\"></textarea><i class=\"form-group__bar\"></i><label>Message</label></div><small class=\"text-muted\">By sending us your information, you agree our Terms of Use &amp; Privacy Policy.</small></div><div class=\"card__footer\"><button class=\"btn btn-primary\">Submit</button> <button class=\"btn btn-link\">Reset</button> <button class=\"btn btn-link visible-sm-inline visible-xs-inline\" data-rmd-action=\"block-close\" data-rmd-target=\"#write-to-us\">Cancel</button></div></form></div></div></div></section></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><require from=\"./home.css\"></require><div class=\"keyart\" id=\"nonparallax\"></div><div class=\"keyart\" id=\"parallax\"><div class=\"keyart_layer parallax\" id=\"keyart-0\" data-speed=\"2\"></div><div class=\"keyart_layer parallax\" id=\"keyart-1\" data-speed=\"5\"></div><div class=\"keyart_layer parallax\" id=\"keyart-2\" data-speed=\"11\"></div><div class=\"keyart_layer parallax\" id=\"keyart-3\" data-speed=\"16\"></div><div class=\"keyart_layer parallax\" id=\"keyart-4\" data-speed=\"26\"></div><div class=\"keyart_layer parallax\" id=\"keyart-5\" data-speed=\"36\"></div><div class=\"keyart_layer parallax\" id=\"keyart-6\" data-speed=\"49\"></div><div class=\"keyart_layer\" id=\"keyart-scrim\"></div><div class=\"keyart_layer parallax\" id=\"keyart-7\" data-speed=\"69\"></div><div class=\"keyart_layer\" id=\"keyart-8\" data-speed=\"100\"><div id=\"logo-box\"><h1>REALTY</h1><h2>This is a placeholder for the logo</h2></div></div></div><div id=\"maincontain\"><div id=\"main\"></div><section class=\"section submit-ticker\"><p>Are you looking to sell your valuable property? Realty is your destination!</p><a route-href=\"route: submit\">Submit your property now!</a></section><section class=\"section info-box\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/house.png\" alt=\"\"><h3>Sed posuere consectetur</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/building.png\" alt=\"\"><h3>Donec ullamcorper nulla</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/house (1).png\" alt=\"\"><h3>Integer posuere erat</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/house (2).png\" alt=\"\"><h3>Nulla vitae elit</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/laptop.png\" alt=\"\"><h3>Libero pharetra augue</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/money-bag.png\" alt=\"\"><h3>Aenean lacinia bibendum</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div></div></div></section></div></template>"; });
define('text!submit/submit.html', ['module'], function(module) { module.exports = "<template>'<require from=\"./submit.css\"></require>'<section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Submit your property</h2><small>Praesent commodo cursus magnavel sceleris quenisl consecte turet</small></header><div class=\"submit-property\"><ul class=\"submit-property__steps\"><li class=\"active\"><a href=\"#submit-property-1\" data-toggle=\"tab\">1</a></li><li><a href=\"#submit-property-2\" data-toggle=\"tab\">2</a></li><li><a href=\"#submit-property-3\" data-toggle=\"tab\">3</a></li><li><a href=\"#submit-property-4\" data-toggle=\"tab\">4</a></li><li><a href=\"#submit-property-5\" data-toggle=\"tab\">5</a></li><li class=\"submit-property__caret\"></li></ul><div class=\"tab-content submit-property__content\"><div class=\"tab-pane fade in active\" id=\"submit-property-1\"><div class=\"card\"><div class=\"card__header\"><h2>Property Location</h2><small>Aenean lacinia bibendum nulla sed consectetur</small></div><form class=\"card__body\"><div class=\"form-group form-group--float m-b-5\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Address</label></div><div class=\"form-group form-group--float m-b-5\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Unit/Floor/Block</label></div><div class=\"form-group\"><div class=\"checkbox\"><label><input type=\"checkbox\"> <i class=\"input-helper\"></i> I currently live here</label></div></div><a href=\"#submit-property-2\" data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-2\"><div class=\"card\"><div class=\"card__header\"><h2>Contact Information</h2><small>Curabitur blandit tempus porttitor ligula malesuada</small></div><form class=\"card__body\"><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Full Name</label></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Organization Name (Opt.)</label></div><div class=\"form-group form-group--float form-group--float-center m-b-5\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Email Address</label></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Contact Number</label></div><a href=\"#submit-property-3\" data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-3\"><div class=\"card\"><div class=\"card__header\"><h2>Sale Information</h2><small>Nullam iddolor dnibh ultricies vehicula utielit</small></div><form class=\"card__body\"><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Askin Price</label></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Maintenance amount per month</label></div><div class=\"form-group\"><label>Owner Information</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\"><input type=\"radio\" name=\"advanced-search-beds\" checked=\"checked\">Agent</label><label class=\"btn\"><input type=\"radio\" name=\"advanced-search-beds\">Owner</label><label class=\"btn\"><input type=\"radio\" name=\"advanced-search-beds\">Other</label></div></div><a href=\"#submit-property-4\" data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-4\"><div class=\"card\"><div class=\"card__header\"><h2>Property Information</h2><small>Sed posuere consectetur estat lobortis ultricies</small></div><form class=\"card__body\"><div class=\"form-group\"><label>Property Type</label><select class=\"select2\"><option value=\"\">Single Family Home</option><option value=\"\">Condo</option><option value=\"\">Townhome</option><option value=\"\">Apartment Community</option><option value=\"\">Room</option></select></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Property title</label></div><div class=\"form-group form-group--float form-group--float-center\"><textarea class=\"form-control text-center textarea-autoheight\"></textarea><i class=\"form-group__bar\"></i><label>Description</label></div><div class=\"row\"><div class=\"col-sm-6\"><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Square Feet</label></div></div><div class=\"col-sm-6\"><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Lot Size</label></div></div></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Year Built</label></div><div class=\"form-group\"><label>Bedrooms</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn active\"><input type=\"radio\" name=\"inner-search-beds\" checked=\"checked\">2</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>Bathrooms</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn active\"><input type=\"radio\" name=\"inner-search-beds\" checked=\"checked\">2</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>No. of Floors</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn active\"><input type=\"radio\" name=\"inner-search-beds\" checked=\"checked\">2</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>Parking Space</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn active\"><input type=\"radio\" name=\"inner-search-beds\" checked=\"checked\">2</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3+</label></div></div><a href=\"#submit-property-5\" data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\"><i class=\"zmdi zmdi-check\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-5\"><div class=\"card\"><div class=\"submit-property__success\"><i class=\"zmdi zmdi-check\"></i><h2>Successful!</h2><p>Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p></div></div></div></div></div></div></section></template>"; });
define('text!tnc/tnc.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><div class=\"card\"><div class=\"card__header\"><h2>Terms &amp; Conditions</h2></div><div class=\"card__body\"><p>Before you instruct us to act in the sale of your property, we wish to draw your attention to our Terms of Business. The Property Buying Company can offer an average completion timescale for a standard property purchase is 3 to 4 weeks subject to survey. We have however completed purchases in as little as 7 days.</p><p>A valuation of the property will be instructed prior to the sale being completed at our cost by independent RICS surveyor. We also often also instruct a high street estate agent to give us a market appraisal for your property too.</p><p>Should it be necessary, we will also acquire a builders report at our discretion together with additional searches against the property as necessary.</p><p>As we are a trade buyer of properties we do not pay the full market value of a property. The price we can pay for a property depends on the property type, area, condition, age and construction type and is subject to final valuation of which up to 80% of the property value is paid.</p><p>Our initial offer is conditional upon final survey and is subject to any adverse entries being revealed in the searches carried out against the property and any other matters which are subsequently revealed to us which would affect the market value of the property.</p><p>Money Laundering Compliance is required by law and will be carried out as standard and on entering into the Agreement and accepting our Terms of Business you are consenting to such a check being carried out.</p><p>We will not without your consent release or misuse confidential information given by you during the property sale process unless legally required to do so.</p><p>We will keep clear records of all transactions for a period of 6 years.</p><p>You are free to use any solicitor of your choice. However, if you choose to use our recommended solicitor then we will cover your fees in relation to the sale of the property. The reason that we recommend you to use our recommended solicitor is because we are dealing with multiple transactions at any one time and to work towards a desired timescale or completion date. Our recommended solicitors are independent and abide by all Law Society guidelines and are acting on an independent basis for you the client.</p><p>Our Agreement will remain in force for a period of 4 months from the date of the Agreement signed by you.</p><p>Should the Agreement be terminated within the 4 month period then we will be at liberty to register a Unilateral Notice against the property at HM Land Registry to restrict the sale of the property within the period in which the Agreement is in force to protect our interest.</p><p>You are free to use any solicitor of your choice. However, if you choose to use our recommended solicitor then we will cover your fees in relation to the sale of the property. The reason that we recommend We will prior to entering into the Agreement verify the property information provided is correct including the ability of the Seller to sell the property without consent of any other person. to use our recommended solicitor is because we are dealing with multiple transactions at any one time and to work towards a desired timescale or completion date. Our recommended solicitors are independent and abide by all Law Society guidelines and are acting on an independent basis for you the client.</p><p>The Agreement can be cancelled within the 14 day cooling off period from the date the contract was entered into.</p><p>We will try to solve any disagreements or complaints quickly and efficiently and will acknowledge receipt of any complaint within 3 days together with a full response within 15 days. Should you wish to make a complaint please do so in writing and a response will be provided as above. If, after following our formal complaints procedure (above), you are dissatisfied with the responses from us you can direct any complaint to The Property Ombudsman.</p><p>The Property Buying Company are members agents of The Property Ombusdman scheme for dispute resolution and we are bound by their code of practice.</p><p>We will not discriminate against any person under the definitions of the Sex Discrimination Act 1975 or the Race Relations Act 1976. We will not discriminate, or threaten to discriminate against any prospective Buyer of your property because that person refuses to agree that we will (directly or indirectly) provide services to them.</p><p>Initial valuations are based on an analysis of recent transactions registered with the Land Registry and similar properties within the property area, additional factors such as décor and appearance are also taken into account. Valuations are only a recommendation to the vendor and are subject to full survey.</p><p>If the agreement is terminated within the Agreement term by the seller then we will be entitled to be reimbursed for all costs and expenses incurred by us to a maximum of £750.00 which will be chargeable at our discretion.</p></div></div></div></section></template>"; });
//# sourceMappingURL=app-bundle.js.map