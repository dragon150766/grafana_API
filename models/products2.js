const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema2 = new Schema({
  value: { type: Number }
    
  },{ toJSON: { virtuals: false, versionKey: false },
  timestamps: {createdAt: true, updatedAt: false},
  collection:"products2"});

const product = mongoose.model("Product2",productSchema2)

module.exports = product