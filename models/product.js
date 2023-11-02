const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    value: { type: Number }
    
  },{ toJSON: { virtuals: true },
  timestamps: true,
  collection:"products"});

const product = mongoose.model("Product",productSchema)

module.exports = product