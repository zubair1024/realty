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
    this.renderUniversalSearch();
  }

  /**
   * Render Universal Search box
   */
  renderUniversalSearch() {
    let me = this;
    //create AutoComplete UI component
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
      select: function(e) {
        //navigate to object
        if (e.dataItem.objectType) {
          console.log(e.dataItem.objectType);
          switch (e.dataItem.objectType) {
          case 'Asset':
            me.router.navigateToRoute('asset-details', {id: e.dataItem._id});
            break;
          case 'Project':
            me.router.navigateToRoute('asset-list/:id', {id: e.dataItem._id});
            break;
          default:
          //do nothing
            break;
          }
        }
      }
    });
  }

    // Fullscreen
  toggleFullScreen() {
    console.log(document);
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
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
  }
}
