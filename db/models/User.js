"use strict";

var mongoose = require("mongoose"),
  mongoosePaginate = require("mongoose-paginate"),
  Schema = mongoose.Schema,
  scheme = {
    name: { type: String, required: true },
    objectType: { type: String, required: true, default: "User" },
    pState: Number,
    loginName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageUrl: { type: String, default: "default.png" },
    privileges: [],
    dob: String,
    phoneNo: String,
    email: { type: String, required: true },
    //GUI controls
    timezone: { type: String, default: "Asia/Dubai" },
    dateTimeFormat: { type: String, default: "D/MM/YYYY h:mm:ss a" },
    dateFormat: { type: String, default: "D/MM/YYYY" },
    timeFormat: { type: String, default: "h:mm:ss a" },
    distance: String,
    temperature: String,
    speed: String,
    volume: String,
    pressure: String,
    createdTime: Date,
    updatedTime: Date
  };

// db.odataServer.resource('users', scheme);

var userSchema = new Schema(scheme);

// on every save, add the date
userSchema.pre("save", function(next) {
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
userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("User", userSchema);
