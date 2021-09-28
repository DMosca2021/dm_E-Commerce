// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'product_id'
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  as: 'Tags_products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};


// Product belongs to Category, and Category has many Product models, as a category can have multiple products but a product can only belong to one category.
// Product belongs to many Tag models, and Tag belongs to many Product models. Allow products to have multiple tags and tags to have many products by using the ProductTag through model.
// Hint: Make sure you set up foreign key relationships that match the column we created in the respective models.