export class Contact {
  constructor() {
  }

  attached() {
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
  }
}
