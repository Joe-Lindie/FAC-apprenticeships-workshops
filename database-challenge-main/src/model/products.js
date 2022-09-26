const db = require("../database/db.js");

//////////////////////////

//CHALLENGE 1: LIST ALL PRODUCTS

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

//EXPORT STATMENT AT BOTTOM ↓↓↓↓↓↓

//////////////////////////

//.run() when you don’t need a result
//.get() expect a single row
//.all() all rows matching the query.

//////////////////////////

//CHALLENGE 2: SEARCH PRODUCTS

//////////////////////////

const search_products = db.prepare(/*sql*/ `
        SELECT id, name FROM products WHERE name LIKE ? `);

// WHERE /* condition here */
// LIKE  match text values against a pattern using wildcards
// ? is a placeholder for a value
// ("%" + search_string + "%") Finds any values that have 'search_string' in any position

function searchProducts(search_string) {
  return search_products.all("%" + search_string + "%");
}

//////////////////////////

//CHALLENGE 3: SEARCH PRODUCTS

//////////////////////////

const matching_product = db.prepare(/*sql*/ `
SELECT id, name FROM products WHERE id = ?`);

function getProduct(id) {
  return matching_product.get(id);
}

// if console.log(getProduct(1)); //  { id: 1 }
// output: {name: 'chai'}
// expected output {id: 1, name: 'chai'}

module.exports = { listProducts, searchProducts, getProduct };
