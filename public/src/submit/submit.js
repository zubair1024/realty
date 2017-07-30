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

  //placeholders
  selectedFiles;
  titleDeed;

  constructor() {
  }

  attached() {
  }

  validateStep(step, callback) {
    console.log(this.model);
    let valid = true;
    switch (step) {
      //location information
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

  finalValidationAnSubmit(images) {
    let me = this;
    me.validateStep(1, (f1) => {
      console.log('step 1 is valid');
      f1 && me.validateStep(2, (f2) => {
        console.log('step 2 is valid');
        f2 && me.validateStep(3, (f3) => {
          console.log('step 3 is valid');
          //neeed to do something aboutt the images before doing this
          let formData = new FormData();
          formData.append('images', me.deed[0], `deed_${me.model.information.title}.jpg`);
          for (let i = 0; i < me.selectedFiles.length; i++) {
            formData.append('images', me.selectedFiles[i], `property${i}_${me.model.information.title}.jpg`);
          }
          formData.append('model', JSON.stringify(me.model));
          $.ajax({
            url: '/property',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
              console.log('data');
              f3 && $('#submitted').tab('show');
            },
            error: function(err) {
              console.log(err);
            }
          });
        });
      });
    });
  }
}

export class FileListToArrayValueConverter {
  toView(fileList) {
    let files = [];
    if (!fileList) {
      return files;
    }
    for (let i = 0; i < fileList.length; i++) {
      files.push(fileList.item(i));
    }
    return files;
  }
}

export class BlobToUrlValueConverter {
  toView(blob) {
    return URL.createObjectURL(blob);
  }
}
