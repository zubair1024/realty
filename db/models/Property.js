"use strict";

var mongoose = require("mongoose"),
  mongoosePaginate = require("mongoose-paginate"),
  Schema = mongoose.Schema,
  scheme = {
    objectType: { type: String, required: true, default: "Property" },
    pState: Number,
    location:{},
    information:{},
    contact:{},
    createdTime: Date,
    updatedTime: Date
  };

// db.odataServer.resource('users', scheme);

var propertySchema = new Schema(scheme);

// on every save, add the date
propertySchema.pre("save", function(next) {
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
propertySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Property", propertySchema);
