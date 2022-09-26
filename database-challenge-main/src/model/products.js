const db = require("../database/db.js");

//////////////////////////

//Challenge 1: List all products

//////////////////////////

const retrieve_products = db.prepare(/*sql*/ `
  
SELECT 
      id, 
      name, 
      quantity_per_unit, 
      unit_price, 
      units_in_stock,
      units_on_order FROM products 
`);

function listProducts() {
  return retrieve_products.all();
}

module.exports = { listProducts };

//write a function listProducts
//Export a function listProducts
// Retrieve all products from the 'products' DB

//////////////////////////

//.run() when you don’t need a result
//.get() expect a single row
//.all() all rows matching the query.
