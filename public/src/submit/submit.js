export class Submit {

  model = {
    location: {},
    contact: {},
    information: {
      type: '-',
      bedrooms: '-',
      bathrooms: '-',
      parkingSpaces: '-'
    }
  }

  validation = {
    location: {},
    contact: {},
    information: {
      type: true,
      bedrooms: true,
      bathrooms: true,
      parkingSpaces: true
    }
  }

  //some flags
  submitted = false;
  tncCheck = false;
  contactSubmitted = false;

  //placeholders
  selectedFiles;
  titleDeed;

  constructor() {
  }

  attached() {
  }

  validateContact() {
    let me = this;
    console.log(this.model);
    console.log('validateContact');
    let valid = true;

    //contact
    this.validation.contact.name = false;
    this.validation.contact.email = false;
    this.validation.contact.contactNo = false;

    //name
    if (!this.model.contact.name || this.model.contact.name === '') {
      valid = false;
      this.validation.contact.name = true;
    }

    //email
    if (!this.model.contact.email || this.model.contact.email === '') {
      valid = false;
      this.validation.contact.email = true;
    } else {
      let atpos = this.model.contact.email.indexOf('@');
      let dotpos = this.model.contact.email.lastIndexOf('.');
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.model.contact.email.length) {
        valid = false;
        this.validation.contact.email = true;
      }
    }

    //contactNo
    if (!this.model.contact.contactNo || this.model.contact.contactNo === '') {
      valid = false;
      this.validation.contact.contactNo = true;
    } else {
      let phoneno = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
      if (!this.model.contact.contactNo.match(phoneno)) {
        valid = false;
        this.validation.contact.contactNo = true;
      }
    }


    //send the contact discreetly
    if (valid) {
      if (!me.contactSubmitted) {
        me.contactSubmitted = true;
        $.ajax({
          url: '/contact/info',
          method: 'POST',
          data: me.model.contact,
          success: function(data) {
            console.log('data');
          },
          error: function(err) {
            console.log(err);
          }
        });
      }
      $('.submit-property__steps a[href="#submit-property-2"]').tab('show');
    }
  }

  validateInformation(images) {
    let me = this;
    console.log(this.model);
    console.log('validateInformation');
    let valid = true;

    this.validation.location.address = false;
    this.validation.location.unit = false;
    this.validation.information.title = false;
    this.validation.information.view = false;
    this.validation.information.squareFeet = false;
    this.validation.information.expectedPrice = false;

    //address
    // if (!this.model.location.address || this.model.location.address === '') {
    //   valid = false;
    //   this.validation.location.address = true;
    // }


    //unit
    // if (!this.model.location.unit || this.model.location.unit === '') {
    //   valid = false;
    //   this.validation.location.unit = true;
    // }


    //title
    // if (!this.model.information.title || this.model.information.title === '') {
    //   valid = false;
    //   this.validation.information.title = true;
    // }


    //view
    // if (!this.model.information.view || this.model.information.view === '') {
    //   valid = false;
    //   this.validation.information.view = true;
    // }


    // //squareFeet
    // if (!this.model.information.squareFeet || this.model.information.squareFeet === '') {
    //   valid = false;
    //   this.validation.information.squareFeet = true;
    // } else {
    //   let regex = /^[0-9]*$/;
    //   if (!this.model.information.squareFeet.match(regex)) {
    //     valid = false;
    //     this.validation.information.squareFeet = true;
    //   }
    // }


    // //description
    // if (!this.model.information.description || this.model.information.description === '') {
    //   valid = false;
    //   this.validation.information.description = true;
    // }


    // //expectedPrice
    // if (!this.model.information.expectedPrice || this.model.information.expectedPrice === '') {
    //   valid = false;
    //   this.validation.information.expectedPrice = true;
    // } else {
    //   let regex = /^[0-9]*$/;
    //   if (!this.model.information.expectedPrice.match(regex)) {
    //     valid = false;
    //     this.validation.information.expectedPrice = true;
    //   }
    // }

    if (valid) {
      //neeed to do something aboutt the images before doing this
      let formData = new FormData();
      if (me.deed) {
        formData.append('images', me.deed[0], `deed_${me.model.information.title}.jpg`);
      }
      if (me.selectedFiles && me.selectedFiles.length) {
        for (let i = 0; i < me.selectedFiles.length; i++) {
          formData.append('images', me.selectedFiles[i], `property${i}_${me.model.information.title}.jpg`);
        }
      }
      formData.append('model', JSON.stringify(me.model));
      $.ajax({
        url: '/property',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
          $('#submitted').tab('show');
        },
        error: function(err) {
          console.log(err);
        }
      });
    }
  }

  validateStep(step, callback) {
    console.log('validateStep');
    let me = this;
    let valid = true;
    switch (step) {
      //location information
    case 1:
        //not mandatory fields
        // if (!this.model.location.address || this.model.location.address === '') {
        //   valid = false;
        //   alert('Please fill in the ADDRESS field');
        // } else {
        //   if (!this.model.location.unit || this.model.location.unit === '') {
        //     valid = false;
        //     alert('Please fill in the UNIT field');
        //   } else {
        //     !callback && $('.submit-property__steps a[href="#submit-property-2"]').tab('show');
        //   }
        // }
      break;
      //contact information
    case 2:
      if (!this.model.contact.name || this.model.contact.name === '') {
        valid = false;
        alert('Please fill in the NAME field');
      } else if (!this.model.contact.email || this.model.contact.email === '') {
        valid = false;
        alert('Please fill in a valid EMAIL address');
      } else if (!this.model.contact.contactNo || this.model.contact.contactNo === '') {
        valid = false;
        alert('Please fill in the CONTACT NUMBER field');
      } else {
          //validate email
        let atpos = this.model.contact.email.indexOf('@');
        let dotpos = this.model.contact.email.lastIndexOf('.');
          //check the @ and . positions
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.model.contact.email.length) {
          alert('Please fill in a valid EMAIL address');
        } else {
          let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
          if (!this.model.contact.contactNo.match(phoneno)) {
            alert('Please enter a valid contact number');
          } else {
              //send the contact discreetly
            if (!me.contactSubmitted) {
                me.contactSubmitted = true;
                $.ajax({
                  url: '/contact/info',
                  method: 'POST',
                  data: me.model.contact,
                  success: function(data) {
                    console.log('data');
                  },
                  error: function(err) {
                    console.log(err);
                  }
                });
              }
            !callback && $('.submit-property__steps a[href="#submit-property-2"]').tab('show');
          }
        }
      }
      break;
      //property information
    case 3:
      // if (!this.model.information.title || this.model.information.title === '') {
      //   valid = false;
      //   alert('Please fill in the TITLE field');
      // } else {
      //   if (!this.model.information.view || this.model.information.view === '') {
      //       valid = false;
      //       alert('Please fill in the VIEW field');
      //     } else {
      //       if (!this.model.information.squareFeet || this.model.information.squareFeet === '') {
      //         valid = false;
      //         alert('Please fill in the SQUARE FEET field');
      //       } else {
      //         if (!this.model.information.plotSize || this.model.information.plotSize === '') {
      //           valid = false;
      //           alert('Please fill in the Plot Size field');
      //         } else {
      //           //description
      //           if (!this.model.information.description || this.model.information.description === '') {
      //             valid = false;
      //             alert('Please fill in the Description field');
      //           } else {
      //             if (!this.model.information.expectedPrice || this.model.information.expectedPrice === '') {
      //               valid = false;
      //               alert('Please fill in the Expected Price field');
      //             }
      //           }
      //         }
      //       }
      //     }
      // }
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
    if (this.tncCheck) {
      me.validateStep(1, (f1) => {
        console.log('step 1 is valid');
        f1 && me.validateStep(2, (f2) => {
          console.log('step 2 is valid');
          f2 && me.validateStep(3, (f3) => {
            console.log('step 3 is valid');
            //neeed to do something aboutt the images before doing this
            let formData = new FormData();
            if (me.deed) {
              formData.append('images', me.deed[0], `deed_${me.model.information.title}.jpg`);
            }
            if (me.selectedFiles && me.selectedFiles.length) {
              for (let i = 0; i < me.selectedFiles.length; i++) {
                formData.append('images', me.selectedFiles[i], `property${i}_${me.model.information.title}.jpg`);
              }
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
