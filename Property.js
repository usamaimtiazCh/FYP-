const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  fullName: String,
  emailAddress: String,
  phoneNumber: String,
  contactMethod: String,
  city: String,
  address: String,
  minPrice: Number,
  maxPrice: Number,
  minSquareFootage: Number,
  maxSquareFootage: Number,
  propertyType: [String],
  condition: String,
  numRooms: Number,
  numWashrooms: Number,
  gatedCommunity: Boolean,
  garage: Boolean,
  garden: Boolean,
  swimmingPool: Boolean,
  balcony: Boolean,
  additionalRequirements: String,
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
