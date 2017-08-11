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

    this.marker = new google.maps.Marker({
      position: me.position,
      title: 'Cash For Property',
      map: me.googleMap
    });
  }
}
