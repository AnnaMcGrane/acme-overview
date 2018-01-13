//instructions
//write the 4 functions below
//no third party libraries
//try not to use any forEach
//each function should be short and some functions can depend on other functions (hint no function should be more than 10 lines)

//list of products
var products = [
  {
    id: 1,
    price: 5,
    name: 'foo'
  },
  {
    id: 2,
    price: 3,
    name: 'bar' 
  },
  {
    id: 3,
    price: 9,
    name: 'bazz'
  }
];

//list of line items
var lineItems = [
   {
     productId: 1,
     quantity: 1
   },
   {
     productId: 1,
     quantity: 1
   },
   {
     productId: 2,
     quantity: 1
   },
   {
     productId: 3,
     quantity: 1
   },
];
//returns an object
//keys are the ids of products
//the values are the products themselves
function generateProductsMap(products){
  var productObj = {};
  for (var i = 0; i< products.length; i++){
    var key = products[i].id
    productObj[key] = products[i];
  }
  return productObj;
}

//returns an object
//keys are the ids of products
//value is the total revenue for that product
function salesByProduct(products, lineItems){
  var revenueObj = {};
  for (var i = 0; i < lineItems.length; i++){
    for (var j = 0; j < products.length; j++){
          if (lineItems[i].productId === products[j].id){
            var objKey = lineItems[i].productId;

            if (revenueObj[objKey] === undefined){
              revenueObj[objKey] = (lineItems[i].quantity*products[j].price);
            }
            else {
              revenueObj[objKey] += (lineItems[i].quantity*products[j].price);
            }
          }
      }
  }
  return revenueObj;
}

//return the total revenue for all products
function totalSales(products, lineItems){
  var total = 0;
  var salesRevenueObj = salesByProduct(products, lineItems);
  for (var key in salesRevenueObj){
    total += salesRevenueObj[key];
  }
  return total;
}

//return the product responsible for the most revenue
function topSellerByRevenue(products, lineItems){
  var salesByProductObj = salesByProduct(products, lineItems);
  var biggestSeller = null;
  for (var key in salesByProductObj){
    if (biggestSeller === null){
      biggestSeller = key;
    }
    else if (salesByProductObj[key] > salesByProductObj[biggestSeller]){
      biggestSeller = key;
    }
  }
  return biggestSeller;
}
console.log(`generates product map - should be
{
  1:{
    id: 1,
    name: "foo",
    price: 5
  },
  2:{
    id: 2,
    name: "bar",
    price: 3
  },
  3:{
    id: 3,
    name: "bazz",
    price: 9
  }
}

`, generateProductsMap(products));
console.log(`sales by product - should be
  {
    1: 10,
    2: 3,
    3: 9
}`, salesByProduct( products, lineItems));
console.log('total sales - should be 22', totalSales( products, lineItems));
console.log('top seller by revenue', topSellerByRevenue(products, lineItems ));
