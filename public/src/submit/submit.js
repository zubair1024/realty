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

  selectedFiles;

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
          debugger;
          if (images && images[0]) {
            let image = images[0];
            let filename;

            console.log(images[0]);

            switch (image.type) {
            case 'image/png':
              filename = this.model.loginName + '.png';
              break;

            case 'image/jpeg':
              filename = this.model.loginName + '.jpg';
              break;

            default:
              Materialize.toast('Please upload a .jpg or .png file', 3000);
              break;
            }

            //if filename exists
            if (filename) {
              let me = this;
              //form-data
              let formData = new FormData();
              formData.append('images', image, filename);
              formData.append('user', this.model.loginName);

              //use FETCH API to POST image

              this.httpclient
                .fetch(App.config.apiUrl + '/user/photo', {
                  method: 'POST',
                  body: formData
                })
                .then(response => response.json())
                .then(data => {
                  localStorage.removeItem('currentUser');
                  me.aurelia.setRoot('login/login');
                })
                .catch(error => Materialize.toast(error.message, 5000));
            }
          }
          //neeed to do something aboutt the images before doing this
          $.ajax({
            url: '/property',
            method: 'POST',
            data: me.model,
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
