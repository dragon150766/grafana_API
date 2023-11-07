const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema3 = new Schema({
  value: { type: Number }
    
  },{ toJSON: { virtuals: false, versionKey: false },
  timestamps: {createdAt: true, updatedAt: false},
  collection:"products3"});

const product3 = mongoose.model("Product3",productSchema3)

module.exports = product3