const mongoose = require('mongoose');
const Product = require('../models/product');

const sampleProducts = [
  {
    name: "Brake Pad Set",
    description: "High-performance ceramic brake pads for superior stopping power and reduced brake dust",
    price: 49.99,
    image: "/images/brake-pads.jpg",
    category: "Brake System",
    specifications: {
      manufacturer: "StopTech",
      modelCompatibility: ["Toyota Camry 2018-2023", "Toyota Corolla 2019-2023"],
      partNumber: "BP-1234",
      warranty: "2 years"
    },
    stock: 50,
    isAvailable: true
  },
  {
    name: "Oil Filter",
    description: "Premium quality oil filter with high filtration efficiency",
    price: 12.99,
    image: "/images/oil-filter.jpg",
    category: "Filters",
    specifications: {
      manufacturer: "Bosch",
      modelCompatibility: ["Multiple Models"],
      partNumber: "OF-5678",
      warranty: "1 year"
    },
    stock: 100,
    isAvailable: true
  },
  {
    name: "Alternator",
    description: "New OEM-quality alternator with high output capacity",
    price: 189.99,
    image: "/images/alternator.jpg",
    category: "Electrical",
    specifications: {
      manufacturer: "Denso",
      modelCompatibility: ["Honda Civic 2015-2022", "Honda Accord 2016-2022"],
      partNumber: "ALT-9012",
      warranty: "3 years"
    },
    stock: 20,
    isAvailable: true
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongo:27017/ecommerce');
    
    // Clear existing products
    await Product.deleteMany({});
    
    // Insert sample products
    await Product.insertMany(sampleProducts);
    
    console.log('Sample products have been added successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();