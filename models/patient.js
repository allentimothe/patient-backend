const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  phonenumber: String,
  birthdate: String,
  emcontact: String,
  emrelation: String,
  allergies: String,
  history: String,
  currentmeds: String,
  smoke: String,
  drink: String,
  familyhistory: String,
  healthinsurance: String,
  insurancename: String,
  insuranceaddress: String,
  policynum: String,
  policyholder: String,
  phonenum: String,
}, { timestamps: true});


module.exports = mongoose.model('Patient', patientSchema);