export class Submit {

  model = {
    location: {},
    contact: {},
    information: {}
  }

  constructor() {
  }

  attached() {
  }

  validateStep(step) {
    console.log(step);
    console.log(this.model);
    switch (step) {
      //location information
    case 1:
      if (!this.model.location.address || this.model.location.address === '') {
        alert('Please fill in the ADDRESS field');
      } else {
        if (!this.model.location.unit || this.model.location.unit === '') {
          alert('Please fill in the UNIT field');
        } else {
          $('.submit-property__steps a[href="#submit-property-2"]').tab('show');
        }
      }
      break;
      //contact information
    case 2:
      if (!this.model.contact.name || this.model.contact.name === '') {
        alert('Please fill in the NAME field');
      } else {
        if (!this.model.contact.email || this.model.contact.email === '') {
          alert('Please fill in the EMAIL field');
        } else {
          if (!this.model.contact.contactNo || this.model.contact.contactNo === '') {
            alert('Please fill in the CONTACT NUMBER field');
          } else {
            $('.submit-property__steps a[href="#submit-property-3"]').tab('show');
          }
        }
      }
      break;
      //property information
    case 3:
      if (!this.model.address || this.model.address === '') {
        alert('Please fill in the ADDRESS field');
      } else {
        if (!this.model.unit || this.model.unit === '') {
          alert('Please fill in the UNIT field');
        } else {
          $('.submit-property__steps a[href="#submit-property-4"]').tab('show');
        }
      }
      break;
    default:
        //do nothing
      break;
    }
  }


  toggleBedrooms(value) {
    this.model.information.bedrooms = value;
  }

  toggleBathrooms(value) {
    this.model.information.bathrooms = value;
  }

  toggleFloors(value) {
    this.model.information.floors = value;
  }

  toggleParkingSpaces(value) {
    this.model.information.parkingSpaces = value;
  }
}
