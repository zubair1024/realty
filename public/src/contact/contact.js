export class Contact {

  model = {}

  marker;

  position = {
    lat: 25.0968872,
    lng: 55.1646739
  }

  constructor() {
  }

  attached() {
    let me = this;
    //load map
    this.googleMap = new google.maps.Map(document.getElementById('listing-map'), {
      zoom: 12,
      center: me.position,
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
  }

  submit() {
    this.submitted = true;
    let query  = this.model;
    $.ajax({
      url: '/contact/query',
      method: 'POST',
      data: query,
      success: function(data) {
        console.log(data);
        alert('Your query has been submitted.');
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
}
