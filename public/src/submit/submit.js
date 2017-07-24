export class Submit {

  model = {
    location: {},
    contact: {},
    information: {
      type: 'studio',
      bedrooms: '1',
      bathrooms: '1',
      parkingSpaces: '1'
    }
  }

  constructor() {
  }

  attached() {
  }

  validateStep(step, callback) {
    console.log(step);
    console.log(this.model);
    let valid = true;
    switch (step) {
      //location information
    case 1:
      if (!this.model.location.address || this.model.location.address === '') {
        valid = false;
        alert('Please fill in the ADDRESS field');
      } else {
        valid = false;
        if (!this.model.location.unit || this.model.location.unit === '') {
          alert('Please fill in the UNIT field');
        } else {
          !callback && $('.submit-property__steps a[href="#submit-property-2"]').tab('show');
        }
      }
      break;
      //contact information
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
      //property information
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
        //do nothing
      break;
    }
    callback && callback(valid);
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

  finalValidationAnSubmit() {
    let me = this;
    me.validateStep(1, (f1)=>{
      f1 && me.validateStep(2, (f2)=>{
        f2 && me.validateStep(3, (f3)=>{
          f3 &&  $('.submit-property__steps a[href="#submit-property-4"]').tab('show');
        });
      });
    });
  }
}
