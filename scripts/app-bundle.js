define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';
  };
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
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
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

    AppHeader.prototype.attached = function attached() {
      this.renderUniversalSearch();
    };

    AppHeader.prototype.renderUniversalSearch = function renderUniversalSearch() {
      var me = this;

      $('#universal-search').kendoAutoComplete({
        dataTextField: 'name',
        ignoreCase: false,
        filter: 'contains',
        minLength: 3,
        placeholder: 'Search...',
        dataSource: {
          type: 'odata',
          serverFiltering: true,
          transport: {
            read: {
              type: 'GET',
              contentType: 'application/json',
              accept: 'application/json, text/plain, */*',
              dataType: 'json',
              xhrFields: { withCredentials: true },
              url: App.config.apiUrl + '/misc/find/'
            }
          }
        },
        template: '# if(data.objectType=="Asset"){ # <i class="mdi-image-flash-on tiny"></i> # } else {# <i class="mdi-communication-business tiny"></i> #}# #: data.name #',
        select: function select(e) {
          if (e.dataItem.objectType) {
            console.log(e.dataItem.objectType);
            switch (e.dataItem.objectType) {
              case 'Asset':
                me.router.navigateToRoute('asset-details', { id: e.dataItem._id });
                break;
              case 'Project':
                me.router.navigateToRoute('asset-list/:id', { id: e.dataItem._id });
                break;
              default:
                break;
            }
          }
        }
      });
    };

    AppHeader.prototype.toggleFullScreen = function toggleFullScreen() {
      console.log(document);
      if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen();
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    };

    return AppHeader;
  }()) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><h1>${message}</h1></template>"; });
define('text!app-footer/app-footer.html', ['module'], function(module) { module.exports = "<template><footer class=\"page-footer\"><div class=\"footer-copyright\"><div class=\"container\">Copyright © 2017 <a class=\"grey-text text-lighten-4\" href=\"http://razrlab.com\" target=\"_blank\">RAZRGEN</a> All rights reserved. <span class=\"right\">Design and Developed by <a class=\"grey-text text-lighten-4\" href=\"http://razrlab.com\">RAZRLAB</a></span></div></div></footer></template>"; });
define('text!app-header/app-header.html', ['module'], function(module) { module.exports = "<template><header id=\"header\" class=\"page-topbar\"><div class=\"navbar-fixed\"><nav id=\"headerNavBar\"><div class=\"nav-wrapper\"><h1 class=\"logo-wrapper\"><h1 class=\"logo-wrapper hide-on-med-and-down\"><a href=\"index.html\" class=\"brand-logo darken-1\"><img src=\"images/logo/turquoise-sm.png\" alt=\"razrlab logo\"></a><span class=\"logo-text\">RAZRLAB</span></h1><ul class=\"right hide-on-med-and-down\"><li><a href=\"javascript:void(0);\" click.delegate=\"toggleFullScreen()\" class=\"waves-effect waves-block waves-light toggle-fullscreen\"><i class=\"mdi-action-settings-overscan\"></i></a></li></ul><ul class=\"right\"><li><input id=\"universal-search\" style=\"width:100%\"></li><li><a href=\"#\" data-activates=\"chat-out\" class=\"waves-effect waves-block waves-light chat-collapse\"><i class=\"mdi-communication-chat\"></i></a></li></ul></h1></div></nav></div></header></template>"; });
//# sourceMappingURL=app-bundle.js.map