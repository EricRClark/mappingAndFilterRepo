var filteredData = items.map(function (el) {
        return {
                  title: el.title,
                  price: el.price,
}
});
var sum = 0
filteredData.forEach(function (el){
sum += el.price;

})
/*var etsyItemsArr = items;*/
var avgPriceItem = '';

var avgPrice = sum /filteredData.length;

document.getElementById('answer1').innerHTML = avgPrice.toFixed(2);


var newArr = ' ';

var answer2items = filteredData.filter(function(el,idx) {
   return el.price > 14 && el.price < 18;
});


var itemPrice = answer2items.forEach(function(el,idx) {
  newArr += '<li>' + el.title + ' price: ' + el.price + '</li>';
});
document.getElementById('answer2').innerHTML = newArr;


var currencyCode = ' ';

var answer3items = filteredData.filter(function(el,idx) {
  return el.currency_code = "GBP";
});
var currencyCode = '<ol>' + answer3items[0].title + ' price: ' + answer3items[0].price + '</ol>';
document.getElementById('answer3').innerHTML = currencyCode;

var filteredData3 = items.filter(function (el) {
        return el.materials.includes ("wood");
});

var woodItems = ' ';

var answer4items = filteredData3.forEach(function(el,idx) {
  woodItems += '<li>' + el.materials + el.title + '</li>';
});

document.getElementById('answer4').innerHTML = woodItems;

var items8made = ' ';
var filteredData4 = items.filter(function (el) {
        return el.materials.length >= 8;
});
var answer5items = filteredData4.forEach(function(el,idx) {
  items8made += '<li>' + el.materials + el.title + '</li>';
});
document.getElementById('answer5').innerHTML = items8made;

var sellerItems = ' ';
var filteredData5 = items.filter(function (el) {
        return el.who_made === "i_did";
});
var answer6items = filteredData5.forEach(function(el,idx) {
  sellerItems += '<li>' + el.materials + '</li>';
});
document.getElementById('answer6').innerHTML = filteredData5.length;
