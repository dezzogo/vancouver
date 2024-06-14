//array vazia pra usar nos pushs
var g_items = [];
var g_currency = 'BRL';
// view_item
if (window.location.href.includes('/product/')) {
  var itemName = document.querySelector('.product_title').innerText;
  var itemPrice = document.querySelector('.product .amount').innerText.replace(/\D/g, '') / 100;
  g_items.push({
    item_name: itemName,
    price: itemPrice,
    quantity: 1,
    currency: g_currency,
  });
  //GTM
  dataLayer.push({
    event: 'view_item',
    ecommerce: {
      items: g_items,
    },
    //gtag
    /*
    gtag('event', 'view_item', {items: g_items})
    */ 
  });
  g_items = [];

  //add_to_cart tela do item visualizado
  document.querySelector('.single_add_to_cart_button').addEventListener('click', function () {
    g_items.push({
      item_name: itemName,
      price: itemPrice,
      quantity: document.querySelector('.qty').innerText.replace(/\D/g, '') / 1,
      currency: g_currency,
    });
    //GTM
    dataLayer.push({
      event: 'add_to_cart',
      ecommerce: {
        items: g_items,
      },
    });
   //gtag
    /*
    gtag('event', 'add_to_cart', {items: g_items})
    */ 
    g_items = [];
  });
}

//add_to_cart home
document.querySelectorAll('.wc-block-grid__product').forEach(function (produto) {
  var itemName = produto.querySelector('.wc-block-grid__product-title').innerText;
  var itemPrice = produto.querySelector('.wc-block-grid__product ins .amount') || produto.querySelector('.wc-block-grid__product .amount');

  produto.querySelector('.wc-block-grid__product-add-to-cart').addEventListener('click', function () {
    g_items.push({
      item_name: itemName,
      price: itemPrice.innerText.replace(/\D/g, '') / 100,
      quantity: 1,
      currency: g_currency,
    });
    //GTM
    dataLayer.push({
      event: 'add_to_cart',
      ecommerce: {
        items: g_items,
      },
    });

    //ultimo print

    //gtag
    /*
    gtag('event', 'add_to_cart', {items: g_items})
    */
    g_items = [];
  });
});

//checkout
if (window.location.pathname === '/checkout/') {
  document.querySelectorAll('.wc-block-components-order-summary-item').forEach(function (produto) {
    var itemName = produto.querySelector('.wc-block-components-product-name').innerText;
    var itemPrice = produto.querySelector('.wc-block-components-order-summary-item__total-price').innerText.replace(/\D/g, '') / 100;
    var itemQuantity = produto.querySelector('.wc-block-components-order-summary-item__quantity').innerText.split('\n')[0] / 1;
    g_items.push({
      item_name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
      currency: g_currency,
    });
  });
  //GTM
  dataLayer.push({
    event: 'begin_checkout',
    ecommerce: {
      items: g_items,
    },
  });
  //gtag
    /*
    gtag('event', 'begin_checkout', {items: g_items})
    */
}

//purchase
if (window.location.href.includes('/order-received/')) {
  document.querySelectorAll('.order_item').forEach(function (produto) {
    var itemName = produto.querySelector('.product-name a').innerText;
    var itemPrice = produto.querySelector('.product-total span bdi').innerText.replace(/\D/g, '') / 100;
    var itemQuantity = produto.querySelector('.product-quantity').innerText.replace(/\D/g, '') / 1;
    g_items.push({
      item_name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
      currency: g_currency,
    });
  });
  //GTM
  dataLayer.push({
    event: 'purchase',
    ecommerce: {
    transaction_id: document.querySelector('.order strong').innerText,
    currency: g_currency,
    value: document.querySelector('.amount bdi').innerText.replace(/\D/g, '') / 100,
    items: g_items,
    },
  });
  //gtag
    /*
    gtag('event', 'purchase', {
      items: g_items,
      value: document.querySelector('.amount bdi').innerText.replace(/\D/g, '') / 100,
      transaction_id: document.querySelector('.order strong').innerText,
      currency: g_currency
    })
    */
}