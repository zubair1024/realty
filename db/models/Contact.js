"use strict";

var mongoose = require("mongoose"),
  mongoosePaginate = require("mongoose-paginate"),
  Schema = mongoose.Schema,
  scheme = {
    objectType: { type: String, required: true, default: "Contact" },
    pState: Number,
    name: String,
    contactNo: String,
    email: String,
    address: String,
    organization: String,
    createdTime: Date,
    updatedTime: Date
  };

// db.odataServer.resource('users', scheme);

var contactSchema = new Schema(scheme);

// on every save, add the date
contactSchema.pre("save", function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updatedTime = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.createdTime) this.createdTime = currentDate;
  //this is important
  next();
});

//Add pagination plugin
contactSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Contact", contactSchema);
