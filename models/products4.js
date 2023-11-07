const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema4 = new Schema({
  value: { type: Number }
    
  },{ toJSON: { virtuals: false, versionKey: false },
  timestamps: {createdAt: true, updatedAt: false},
  collection:"products4"});

const product4 = mongoose.model("Product4",productSchema4)

module.exports = product4