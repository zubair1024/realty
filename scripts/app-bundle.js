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
            $('.parallax').parallaxBackground();
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
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app-header/app-header\"></require><require from=\"./app-footer/app-footer\"></require><app-header></app-header><router-view></router-view><app-footer></app-footer></template>"; });
define('text!app-header/app-header.html', ['module'], function(module) { module.exports = "<template><header id=\"header\" class=\"header--minimal\"><div class=\"header__top\"><div class=\"container\"><ul class=\"top-nav\"><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-facebook\"></i></a></li><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-twitter\"></i></a></li><li class=\"pull-right top-nav__icon\"><a href=\"\"><i class=\"zmdi zmdi-google\"></i></a></li><li class=\"pull-right hidden-xs\"><span><i class=\"zmdi zmdi-email\"></i>contact@realty.com</span></li><li class=\"pull-right hidden-xs\"><span><i class=\"zmdi zmdi-phone\"></i>Call us now on 000-000-000-0000</span></li></ul></div></div><div class=\"header__main\"><div class=\"container\"><a class=\"logo\" href=\"index.html\"><div class=\"logo__text\"><span>Realty</span> <span>This is a placeholder for the logo</span></div></a><div class=\"navigation-trigger visible-xs visible-sm\" data-rmd-action=\"block-open\" data-rmd-target=\".navigation\"><i class=\"zmdi zmdi-menu\"></i></div><ul class=\"navigation\"><li class=\"visible-xs visible-sm\"><a class=\"navigation__close\" data-rmd-action=\"navigation-close\" href=\"\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></li><li class=\"active navigation__dropdown\"><a route-href=\"route: home\" id=\"home-link\">Home</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: submit\" id=\"submit-link\">Submit</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: contact\" id=\"contact-link\">Contact</a></li><li class=\"navigation__dropdown\"><a route-href=\"route: faq\" id=\"faq-link\">FAQ</a></li></ul></div></div></header></template>"; });
define('text!app-footer/app-footer.html', ['module'], function(module) { module.exports = "<template><footer id=\"footer\"><div class=\"container hidden-xs\"><div class=\"row\"><div class=\"col-sm-4\"><div class=\"footer__block\"><a class=\"logo clearfix\" href=\"\"><div class=\"logo__text\"><span>Realty</span> <span>This is a placeholder for the logo</span></div></a><address class=\"m-t-20 m-b-20 f-14\">#230, Mira 2, Dubailand</address><div class=\"f-20\">0000-000000000</div><div class=\"f-14 m-t-5\">contact@realty.com / info@realty.com</div><div class=\"f-20 m-t-20\"><a href=\"\" class=\"m-r-10\"><i class=\"zmdi zmdi-google\"></i></a> <a href=\"\" class=\"m-r-10\"><i class=\"zmdi zmdi-facebook\"></i></a> <a href=\"\"><i class=\"zmdi zmdi-twitter\"></i></a></div></div></div><div class=\"col-sm-4 col-sm-offset-4\"><div class=\"footer__block\"><div class=\"footer__title\">Disclaimer</div><div>Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</div></div></div></div></div><div class=\"footer__bottom\"><div class=\"container\"><span class=\"footer__copyright\">© Realty</span> <a href=\"\">Terms & Conditions</a> <a href=\"\">Privacy Policy</a></div><div class=\"footer__to-top\" data-rmd-action=\"scroll-to\" data-rmd-target=\"html\"><i class=\"zmdi zmdi-chevron-up\"></i></div></div></footer></template>"; });
define('text!contact/contact.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Duis mollisest non commodo luctus nisierat porttito</h2><small>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit liberopharetra augueullamcorper nulla non metus auctor fringillaet magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare Cras justo odio, dapibus ac facilisis in, egestas eget quam.</small></header><div class=\"contact\"><div class=\"contact__map\"><div id=\"listing-map\"></div></div><div class=\"contact__inner clearfix\"><div class=\"col-sm-6\"><div class=\"contact__info\"><ul class=\"rmd-contact-list\"><li class=\"rmd-contact-list__title\"><i class=\"zmdi zmdi-home\"></i>Dubai Office</li><li><i class=\"zmdi zmdi-pin\"></i>230 Mira 2 Dubailand,<br>560030</li><li><i class=\"zmdi zmdi-phone\"></i>000-000-0000</li><li><i class=\"zmdi zmdi-email\"></i>contact@realty.com</li></ul><ul class=\"rmd-contact-list\"><li class=\"rmd-contact-list__title\"><i class=\"zmdi zmdi-home\"></i>UK Office</li><li><i class=\"zmdi zmdi-pin\"></i>7094 Blah Blah Mountain View,<br>123</li><li><i class=\"zmdi zmdi-phone\"></i>000-000-0000</li><li><i class=\"zmdi zmdi-email\"></i>info@realty.com</li></ul><div class=\"contact__social\"><a href=\"\" class=\"zmdi zmdi-facebook mdc-bg-indigo-300\"></a> <a href=\"\" class=\"zmdi zmdi-twitter mdc-bg-cyan-300\"></a> <a href=\"\" class=\"zmdi zmdi-google mdc-bg-red-300\"></a> <a href=\"\" class=\"zmdi zmdi-instagram mdc-bg-blue-grey-400\"></a></div></div></div><div class=\"col-sm-6\"><form class=\"contact__form\"><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Name</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Email Address</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><input type=\"text\" class=\"form-control\"><label>Contact Number</label><i class=\"form-group__bar\"></i></div><div class=\"form-group form-group--light form-group--float\"><textarea class=\"form-control textarea-autoheight\"></textarea><label>Message</label><i class=\"form-group__bar\"></i></div><small class=\"mdc-text-white-darker\">By sending us your information, you agree to our Terms of Use &amp; Privacy Policy.</small><div class=\"m-t-30\"><button type=\"submit\" class=\"btn brn-sm btn-default btn-static\">Send</button></div></form></div></div></div></div></section></template>"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template><div class=\"full-height parallax\" data-parallax-bg-image=\"img/stock-vector-a-real-estate-agent-holding-the-document-for-the-for-sale-house-vector-flat-design-illustration-311771255.jpg\" data-parallax-speed=\"3\" data-parallax-direction=\"down\"><div class=\"overlay\"></div><div class=\"content\" style=\"height:50rem\"><div class=\"container\"><div class=\"row\"><div class=\"col-md-12 white-content\"></div></div></div></div></div><section class=\"section submit-ticker\"><p>Are you looking to sell your valuable property? Realty is your destination!</p><a route-href=\"route: submit\">Submit your property now!</a></section><section class=\"section info-box\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/house.png\" alt=\"\"><h3>Sed posuere consectetur</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/building.png\" alt=\"\"><h3>Donec ullamcorper nulla</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/house (1).png\" alt=\"\"><h3>Integer posuere erat</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/house (2).png\" alt=\"\"><h3>Nulla vitae elit</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/laptop.png\" alt=\"\"><h3>Libero pharetra augue</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div><div class=\"col-sm-4\"><div class=\"info-box__item\"><img src=\"img/icons/money-bag.png\" alt=\"\"><h3>Aenean lacinia bibendum</h3><p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p></div></div></div></div></section></template>"; });
define('text!submit/submit.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Submit your property</h2><small>Praesent commodo cursus magnavel sceleris quenisl consecte turet</small></header><div class=\"submit-property\"><ul class=\"submit-property__steps\"><li class=\"active\"><a href=\"#submit-property-1\" data-toggle=\"tab\">1</a></li><li><a href=\"#submit-property-2\" data-toggle=\"tab\">2</a></li><li><a href=\"#submit-property-3\" data-toggle=\"tab\">3</a></li><li><a href=\"#submit-property-4\" data-toggle=\"tab\">4</a></li><li><a href=\"#submit-property-5\" data-toggle=\"tab\">5</a></li><li class=\"submit-property__caret\"></li></ul><div class=\"tab-content submit-property__content\"><div class=\"tab-pane fade in active\" id=\"submit-property-1\"><div class=\"card\"><div class=\"card__header\"><h2>Property Location</h2><small>Aenean lacinia bibendum nulla sed consectetur</small></div><form class=\"card__body\"><div class=\"form-group form-group--float m-b-5\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Address</label></div><div class=\"form-group form-group--float m-b-5\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Unit/Floor/Block</label></div><div class=\"form-group\"><div class=\"checkbox\"><label><input type=\"checkbox\"> <i class=\"input-helper\"></i> I currently live here</label></div></div><a href=\"#submit-property-2\" data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-2\"><div class=\"card\"><div class=\"card__header\"><h2>Contact Information</h2><small>Curabitur blandit tempus porttitor ligula malesuada</small></div><form class=\"card__body\"><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Full Name</label></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Organization Name (Opt.)</label></div><div class=\"form-group form-group--float form-group--float-center m-b-5\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Email Address</label></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Contact Number</label></div><a href=\"#submit-property-3\" data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-3\"><div class=\"card\"><div class=\"card__header\"><h2>Sale Information</h2><small>Nullam iddolor dnibh ultricies vehicula utielit</small></div><form class=\"card__body\"><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Askin Price</label></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Maintenance amount per month</label></div><div class=\"form-group\"><label>Owner Information</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn active\"><input type=\"radio\" name=\"advanced-search-beds\" checked=\"checked\">Agent</label><label class=\"btn\"><input type=\"radio\" name=\"advanced-search-beds\">Owner</label><label class=\"btn\"><input type=\"radio\" name=\"advanced-search-beds\">Other</label></div></div><a href=\"#submit-property-4\" data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\"><i class=\"zmdi zmdi-long-arrow-right\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-4\"><div class=\"card\"><div class=\"card__header\"><h2>Property Information</h2><small>Sed posuere consectetur estat lobortis ultricies</small></div><form class=\"card__body\"><div class=\"form-group\"><label>Property Type</label><select class=\"select2\"><option value=\"\">Single Family Home</option><option value=\"\">Condo</option><option value=\"\">Townhome</option><option value=\"\">Apartment Community</option><option value=\"\">Room</option></select></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Property title</label></div><div class=\"form-group form-group--float form-group--float-center\"><textarea class=\"form-control text-center textarea-autoheight\"></textarea><i class=\"form-group__bar\"></i><label>Description</label></div><div class=\"row\"><div class=\"col-sm-6\"><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Square Feet</label></div></div><div class=\"col-sm-6\"><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Lot Size</label></div></div></div><div class=\"form-group form-group--float form-group--float-center\"><input type=\"text\" class=\"form-control text-center\"> <i class=\"form-group__bar\"></i><label>Year Built</label></div><div class=\"form-group\"><label>Bedrooms</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn active\"><input type=\"radio\" name=\"inner-search-beds\" checked=\"checked\">2</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>Bathrooms</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn active\"><input type=\"radio\" name=\"inner-search-beds\" checked=\"checked\">2</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>No. of Floors</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn active\"><input type=\"radio\" name=\"inner-search-beds\" checked=\"checked\">2</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">4+</label></div></div><div class=\"form-group\"><label>Parking Space</label><div class=\"btn-group btn-group-justified\" data-toggle=\"buttons\"><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">1</label><label class=\"btn active\"><input type=\"radio\" name=\"inner-search-beds\" checked=\"checked\">2</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3</label><label class=\"btn\"><input type=\"radio\" name=\"inner-search-beds\">3+</label></div></div><a href=\"#submit-property-5\" data-toggle=\"tab\" class=\"btn btn--circle btn-primary submit-property__button\"><i class=\"zmdi zmdi-check\"></i></a></form></div></div><div class=\"tab-pane fade\" id=\"submit-property-5\"><div class=\"card\"><div class=\"submit-property__success\"><i class=\"zmdi zmdi-check\"></i><h2>Successful!</h2><p>Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p></div></div></div></div></div></div></section></template>"; });
define('text!faq/faq.html', ['module'], function(module) { module.exports = "<template><section class=\"section\"><div class=\"container\"><header class=\"section__title\"><h2>Frequently Asked Questions</h2><small>Duis mollis estnon commodo luctus nisierat porttitor ligula eget lacinia odio semnec</small></header><div class=\"row\"><div class=\"col-md-8 faq\"><div class=\"card faq__item\"><div class=\"card__header\"><h2>Are there any hidden fees involved?</h2></div><div class=\"card__body\">No. There are absolutely no fees involved in our service whatsoever and we even cover all of your legal fees.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Can I meet with someone face to face?</h2></div><div class=\"card__body\">Yes. The Property Buying Company has local and regional representatives across England &amp; Wales who are more than happy to come out and see you face to face to make an offer on your property. Call us today to arrange an appointment for one of our representatives to come out and see you.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Does it matter if my mortgage is in arrears?</h2></div><div class=\"card__body\">No. We have strong relationships with all major mortgage lenders and can potentially help with any situation you might have.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>My property is about to be repossessed. Can you help?</h2></div><div class=\"card__body\">If you are about to be repossessed it’s not too late but we suggest you act sooner rather than later and give one of our advisors a call now.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How do you calculate the value of my property?</h2></div><div class=\"card__body\">We have the most up to date and sophisticated valuation software available, which enables us to make an accurate valuation of your property. We also have extensive knowledge of local markets throughout England &amp; Wales from our experience of working in the house buying industry for the past 11 years. We also take in to consideration your views on your property and the local market.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How do I know i’m getting a fair price?</h2></div><div class=\"card__body\">The Property Buying Company prides itself on offering the fairest trade price for your property. Call us and give us a chance to prove this to you!</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How long does the process take?</h2></div><div class=\"card__body\">The Property Buying Company can complete in a timescale to suit you. We have completed on properties within 7 days however on average we usually take 2 – 3 weeks. We work with you to try achieve your ideal completion date.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How quickly will I get an offer on my property?</h2></div><div class=\"card__body\">A representative from The Property Buying Company will make you an offer within 24hrs. Take the next step…Call one of our representatives NOW on 0844 123456 or tap here to submit your property for a free cash offer</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>I live in an ex council house. Can I still use your service?</h2></div><div class=\"card__body\">Yes we can buy ex council houses.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>I need to sell my property before I have to withdraw my offer. Can you help?</h2></div><div class=\"card__body\">We can help you. We are able to complete quickly allowing you to make your onward purchase.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>My property is run down, will I still be able to sell it to you?</h2></div><div class=\"card__body\">We buy any property in any condition.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>What type of properties do you buy?</h2></div><div class=\"card__body\">The Property Buying Company will buy any of the following types of property: Detached, Semi Detached, Terrace, Bungalow, Flat, Maisonette, Cottage, Barn…. In essence we will offer on any type of property in any condition throughout England &amp; Wales. We will also consider commercial property and land.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>Which areas do The Property Buying Company cover?</h2></div><div class=\"card__body\">AWe cover all of England &amp; Wales.</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>How quickly will I get an offer on my property?</h2></div><div class=\"card__body\">A representative from The Property Buying Company will make you an offer within 24hrs. Take the next step…Call one of our representatives NOW on 0844 123456 or tap here to submit your property for a free cash offer</div></div><div class=\"card faq__item\"><div class=\"card__header\"><h2>You state that you are a ‘Trade Buyer’ of property. What does this actually mean?</h2></div><div class=\"card__body\">As we are a trade buyer of property we have different solutions for your property. We have the ability to buy your property for cash or source another cash or fund buyer for your home allowing us unprecedented flexibility as we are not controlled or restrained by banks or mortgages. We still insist upon having a professional survey, however the buying decision and price we are able to offer is firmly determined buy us and us only! Many of our competitors have their hands tied by the bank and if they are not happy, they will generally pull out of their purchase leaving vendors stuck with little or no options left. You can rely on The Property Buying Company to work with you to achieve your goals!</div></div></div><div class=\"col-md-4 rmd-sidebar-mobile\" id=\"write-to-us\"><form class=\"card\"><div class=\"card__header\"><h2>Write to us</h2><small>Aeneanquam ellentesque ornare lacinia</small></div><div class=\"card__body m-t-10\"><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Name</label></div><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Email Address</label></div><div class=\"form-group form-group--float\"><input type=\"text\" class=\"form-control\"> <i class=\"form-group__bar\"></i><label>Contact Number</label></div><div class=\"form-group form-group--float\"><textarea class=\"form-control textarea-autoheight\"></textarea><i class=\"form-group__bar\"></i><label>Message</label></div><small class=\"text-muted\">By sending us your information, you agree to Root’s Terms of Use & Privacy Policy.</small></div><div class=\"card__footer\"><button class=\"btn btn-primary\">Submit</button> <button class=\"btn btn-link\">Reset</button> <button class=\"btn btn-link visible-sm-inline visible-xs-inline\" data-rmd-action=\"block-close\" data-rmd-target=\"#write-to-us\">Cancel</button></div></form></div></div></div></section></template>"; });
//# sourceMappingURL=app-bundle.js.map