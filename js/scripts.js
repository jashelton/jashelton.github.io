window.location="http://www.sheltonjs.com";
$(function() {
  'use strict'


var quotesArr = new Array();

  quotesArr[0] = 'You cant look at the competition and say youre going to do it better.  You have to look at the competition and say youre going to do it differently. - Steve Jobs';
  quotesArr[1] = 'Its through mistakes that you actually can grow. You have to get bad in order to get good. – Paula Scher';
  quotesArr[2] = 'Digital design is like painting, except the paint never dries. - Neville Brody'
  quotesArr[3] = 'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away. – Antoine de Saint-Exupéry'

// $(document).load(function() {
  var randomQuote = Math.floor(Math.random()*quotesArr.length);
  $('.quote-content').html(quotesArr[randomQuote]);
// });


});
