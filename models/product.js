const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  factory: {type: Number},
  value: { type: Number }
    
  },{ toJSON: { virtuals: false, versionKey: false },
  timestamps: {createdAt: true, updatedAt: false},
  collection:"products"});

const product = mongoose.model("Product",productSchema)

module.exports = product