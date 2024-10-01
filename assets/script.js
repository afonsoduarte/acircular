/* script */

// PAY PAL
paypal.minicart.render();

// Show basket 
$('.view-cart-btn').click( function(){
  paypal.minicart.view.show();
});

// Upate count on add and rmeove
paypal.minicart.cart.on('add', updateCartCount);
paypal.minicart.cart.on('remove', updateCartCount);

// Show basket count on load
updateCartCount();

function updateCartCount() {
  var items = paypal.minicart.cart.items(),
      cartCount = (items.length > 0)? "("+ items.length +")" : "";
  $('.cart-count').text(cartCount);
}