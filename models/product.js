const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Engine Parts', 'Brake System', 'Suspension', 'Electrical', 'Body Parts', 'Transmission', 'Filters', 'Other']
  },
  specifications: {
    manufacturer: {
      type: String,
      required: true
    },
    modelCompatibility: [{
      type: String
    }],
    partNumber: {
      type: String,
      required: true
    },
    warranty: {
      type: String
    }
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);