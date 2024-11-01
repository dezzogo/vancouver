// Inicializar Google Ads y GA4 gtag.js

// Crear y añadir el script de gtag.js para Google Ads
const SCRIPT_ADS = document.createElement('script');
let g__ads_id = "AW-1111111"; // Reemplaza con tu ID real de Google Ads
let g__ga4_id = "G-M1JZPK2CE9"; // Reemplaza con tu ID real de Google Analytics

// Añadir el script de Google Ads
SCRIPT_ADS.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${g__ads_id}`);
SCRIPT_ADS.setAttribute('async', '');
document.head.appendChild(SCRIPT_ADS);

// Añadir también el script de GA4
const SCRIPT_GA4 = document.createElement('script');
SCRIPT_GA4.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${g__ga4_id}`);
SCRIPT_GA4.setAttribute('async', '');
document.head.appendChild(SCRIPT_GA4);

// Inicializar dataLayer y la función gtag
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

// Inicializar gtag
gtag('js', new Date());

// Configurar gtag con tu ID de Google Ads, permitiendo conversiones mejoradas
gtag('config', g__ads_id, {
  'allow_enhanced_conversions': true
});

// Configurar gtag con tu ID de Google GA4
gtag('config', g__ga4_id);

// Definir identificadores send_to para cada evento
const send_to_purchase = `${g__ads_id}/LABEL_PURCHASE`;  
const send_to_add_to_cart = `${g__ads_id}/LABEL_ADD_TO_CART`;  
const send_to_checkout_completed = `${g__ads_id}/LABEL_CHECKOUT_COMPLETED`;   
const send_to_checkout_started = `${g__ads_id}/LABEL_CHECKOUT_STARTED`;  
const send_to_cart_viewed = `${g__ads_id}/LABEL_CART_VIEWED`;    
const send_to_product_viewed = `${g__ads_id}/LABEL_PRODUCT_VIEWED`;                   

const GOOGLE_MERCHANT_CENTER_ID = '123456789';
const ESTIMATED_SHIPPING_TIME = 5;
const GRANT_CONSENT = true; // Consent Mode siempre en 'granted'

// for the ID_TYPE, if your products look like shopify_US_123456789_123456798 add the word shopify
// if your products are sku's add the value sku -- const ID_TYPE = 'sku';
// if your products use the variant id use the value variant_id -- const ID_TYPE = 'variant_id';
// if your products use the parent id use the value parent_id -- const ID_TYPE = 'parent_id';
const ID_TYPE = 'shopify'; // Cambia según corresponda

// If you want to capitalize the SKU set CAPITALIZE_SKU to true, if you don't want to change anything set to false
const CAPITALIZE_SKU = false;

// Modo de Consentimiento de Google (siempre en 'granted')
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'analytics_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
});

// Inicializar la variable enhanced_conversion_data de manera segura
window.enhanced_conversion_data = window.enhanced_conversion_data || {};

// Función para formatear SKU (si es necesario)
function formatSKU(sku) {
  return CAPITALIZE_SKU ? sku.toUpperCase() : sku;
}

// Función corregida para manejar los IDs de los productos de manera segura
const createLineItemsData = (lineItems, ID_TYPE, PRODUCT_COUNTRY_CODE, CAPITALIZE_SKU) => {
  return lineItems.map((item) => {
    let itemId;
    let productId = item?.variant?.product?.id || "unknown_product_id"; // Valor por defecto si no hay ID de producto
    let variantId = item?.variant?.id || "unknown_variant_id"; // Valor por defecto si no hay ID de variante

    if (ID_TYPE === "shopify") {
      itemId = `shopify_${PRODUCT_COUNTRY_CODE}_${productId}_${variantId}`;
    } else if (ID_TYPE === "parent_id") {
      itemId = productId;
    } else if (ID_TYPE === "sku") {
      itemId = item?.variant?.sku || "unknown_sku"; // Valor por defecto si no hay SKU
      if (CAPITALIZE_SKU) {
        itemId = itemId.toUpperCase();
      }
    } else {
      itemId = variantId;
    }

    // Verificar y calcular el descuento
    let discount = item.discountAllocations?.reduce((total, discountAllocation) => {
      return total + parseFloat(discountAllocation.amount.amount);
    }, 0) || 0;

    // Calcular el precio final después del descuento
    let price = parseFloat(item.variant?.price?.amount) - discount;

    return {
      id: itemId,  // Este es el ID corregido que incluye 'shopify' con el número
      item_name: item.variant?.product?.title || "unknown_product_title", // Valor por defecto si no hay título
      price: price,
      quantity: item.quantity || 1 // Asumimos 1 si no hay cantidad definida
    };
  });
};

// Función para crear datos en eventos de carrito
const createLineItemsDataCart = (lineItems, ID_TYPE, PRODUCT_COUNTRY_CODE, CAPITALIZE_SKU) => {
  return lineItems.map((item) => {
    let itemId;
    let productId = item?.merchandise?.product?.id || "unknown_product_id"; // Valor por defecto si no hay ID de producto
    let variantId = item?.merchandise?.id || "unknown_variant_id"; // Valor por defecto si no hay ID de variante

    if (ID_TYPE === "shopify") {
      itemId = `shopify_${PRODUCT_COUNTRY_CODE}_${productId}_${variantId}`;
    } else if (ID_TYPE === "parent_id") {
      itemId = productId;
    } else if (ID_TYPE === "sku") {
      itemId = item?.merchandise?.sku || "unknown_sku"; // Valor por defecto si no hay SKU
      if (CAPITALIZE_SKU) {
        itemId = itemId.toUpperCase();
      }
    } else {
      itemId = variantId;
    }

    let discount = item?.discountAllocations?.reduce((total, discountAllocation) => {
      return total + parseFloat(discountAllocation.amount.amount);
    }, 0) || 0;

    let price = parseFloat(item?.merchandise?.price?.amount) - discount;

    return {
      id: itemId,  // Este es el ID corregido que incluye 'shopify' con el número
      item_name: item?.merchandise?.product?.title || "unknown_product_title", // Valor por defecto si no hay título
      price: price,
      quantity: item.quantity || 1 // Asumimos 1 si no hay cantidad definida
    };
  });
};

// Función para calcular el descuento total
const calculateTotalDiscount = (lineItems) => {
  let totalDiscount = 0;
  lineItems.forEach(item => {
    item.discountAllocations.forEach(discount => {
      totalDiscount += parseFloat(discount.amount.amount);
    });
  });
  return totalDiscount.toFixed(2); // Convert to string with 2 decimal places
};

// Crear los datos de compra (checkout_completed)
analytics.subscribe("checkout_completed", (event) => {
  // Obtener el código de país dinámicamente
  const PRODUCT_COUNTRY_CODE = event.data?.checkout?.localization?.country?.isoCode || 'US'; // Si no está disponible, usa 'US' por defecto

  const lineItemsData = createLineItemsData(event.data?.checkout?.lineItems, ID_TYPE, PRODUCT_COUNTRY_CODE, CAPITALIZE_SKU);
  const email = event.data?.checkout?.email;
  const phone = event.data?.checkout?.phone;
  const address = event.data?.checkout?.shippingAddress;
  const totalDiscountAmount = calculateTotalDiscount(event.data?.checkout?.lineItems);

  let shopifyPixelData = {
    currency: event.data?.checkout?.subtotalPrice?.currencyCode,
    value: event.data?.checkout?.subtotalPrice?.amount,
    transaction_id: event.data?.checkout?.order?.id,
    shipping: event.data?.checkout?.shippingLine?.price?.amount,
    tax: event.data?.checkout?.totalTax?.amount,
    aw_merchant_id: GOOGLE_MERCHANT_CENTER_ID,
    aw_feed_country: PRODUCT_COUNTRY_CODE, 
    discount: totalDiscountAmount,
    estimated_shipping_time: ESTIMATED_SHIPPING_TIME,
    items: lineItemsData 
  };

  if (email) {
    shopifyPixelData.email = email;
  }

  if (phone) {
    shopifyPixelData.phone = phone;
  }

  if (address) {
    let addressData = {
      first_name: address.firstName || '',
      last_name: address.lastName || '',
      street: address.address1 || '',
      city: address.city || '',
      region: address.province || '',
      postal_code: address.zip || '',
      province_code: address.provinceCode || '',
      country: address.country || '',
      country_code: address.countryCode || ''
    };

    shopifyPixelData.address = addressData;
  }

  // Limpiar y enviar evento de compra
  dataLayer.push({ ecommerce: null });
  dataLayer.push({
    event: "purchase",
    url: event.context.document.location.href,
    ecommerce: shopifyPixelData
  });

  // Actualizar enhanced_conversion_data
  window.enhanced_conversion_data = {
    'email': shopifyPixelData.email,
    'phone_number': shopifyPixelData.phone
  };

  // Enviar datos de Enhanced Conversions
  gtag('set', 'user_data', window.enhanced_conversion_data);

  // Enviar evento de compra a GA4
  gtag("event", "purchase", {
    'send_to': g__ga4_id,
    'url': event.context.document.location.href,
    currency: event.data?.checkout?.subtotalPrice?.currencyCode,
    value: event.data?.checkout?.subtotalPrice?.amount,
    transaction_id: event.data?.checkout?.order?.id,
    shipping: event.data?.checkout?.shippingLine?.price?.amount,
    tax: event.data?.checkout?.totalTax?.amount,
    aw_merchant_id: GOOGLE_MERCHANT_CENTER_ID,
    aw_feed_country: PRODUCT_COUNTRY_CODE, 
    discount: totalDiscountAmount,
    estimated_shipping_time: ESTIMATED_SHIPPING_TIME,
    items: lineItemsData 
  });

  // Evento de conversión para Google Ads
  gtag('event', 'conversion', {
    'send_to': send_to_purchase,
    'value': shopifyPixelData.value,
    'currency': shopifyPixelData.currency,
    'transaction_id': shopifyPixelData.transaction_id
  });

  // **Agregar evento de Remarketing Dinámico**
  gtag('event', 'purchase', {
    'value': shopifyPixelData.value, 
    'items': lineItemsData.map(item => ({
      'id': item.id,  
      'google_business_vertical': 'retail'
    }))
  });
});

// Evento: Product Added to Cart
analytics.subscribe("product_added_to_cart", (event) => {
  dataLayer.push({ ecommerce: null });

  const PRODUCT_COUNTRY_CODE = event.data?.cartLine?.merchandise?.product?.localization?.country?.isoCode || 'US';
  const items = createLineItemsDataCart([event.data?.cartLine], ID_TYPE, PRODUCT_COUNTRY_CODE, CAPITALIZE_SKU);

  const cartData = {
    currency: event.data?.cartLine?.merchandise?.price?.currencyCode,
    value: event.data?.cartLine?.merchandise?.price?.amount,
    items: items
  };

  dataLayer.push({
    event: "add_to_cart",
    url: event.context.document.location.href,
    ecommerce: cartData
  });

  // Enviar evento a GA4
  gtag("event", "add_to_cart", {
    'send_to': g__ga4_id,
    'url': event.context.document.location.href,
    currency: cartData.currency,
    value: cartData.value,
    items: items
  });

  // Evento de conversión para Google Ads
  gtag('event', 'conversion', {
    'send_to': send_to_add_to_cart,
    'value': cartData.value,
    'currency': cartData.currency
  });

  // **Agregar evento de Remarketing Dinámico**
  gtag('event', 'add_to_cart', {
    'value': cartData.value, 
    'items': items.map(item => ({
      'id': item.id,  
      'google_business_vertical': 'retail'
    }))
  });
});

// Evento: Cart Viewed
analytics.subscribe("cart_viewed", (event) => {
  dataLayer.push({ ecommerce: null });

  const PRODUCT_COUNTRY_CODE = event.data?.cart?.localization?.country?.isoCode || 'US';
  const items = createLineItemsDataCart(event.data?.cart?.lines, ID_TYPE, PRODUCT_COUNTRY_CODE, CAPITALIZE_SKU);

  const cartData = {
    currency: event.data?.cart?.cost?.totalAmount?.currencyCode,
    value: event.data?.cart?.cost?.totalAmount?.amount,
    items: items
  };

  dataLayer.push({
    event: "view_cart",
    url: event.context.document.location.href,
    ecommerce: cartData
  });

  // Enviar evento a GA4
  gtag("event", "view_cart", {
    'send_to': g__ga4_id,
    'url': event.context.document.location.href,
    currency: cartData.currency,
    value: cartData.value,
    items: items
  });

  // Evento de conversión para Google Ads
  gtag('event', 'conversion', {
    'send_to': send_to_cart_viewed,
    'value': cartData.value,
    'currency': cartData.currency
  });

  // **Agregar evento de Remarketing Dinámico**
  gtag('event', 'view_cart', {
    'value': cartData.value,
    'items': items.map(item => ({
      'id': item.id,
      'google_business_vertical': 'retail'
    }))
  });
});

// Evento: Checkout Started
analytics.subscribe("checkout_started", (event) => {
  dataLayer.push({ ecommerce: null });

  // Obtener el código de país dinámicamente, usando la localización del checkout
  const PRODUCT_COUNTRY_CODE = event.data?.checkout?.localization?.country?.isoCode || 'US'; // Usar 'US' como valor por defecto

  const items = createLineItemsData(event.data?.checkout?.lineItems, ID_TYPE, PRODUCT_COUNTRY_CODE, CAPITALIZE_SKU);
  
  const checkoutData = {
    currency: event.data?.checkout?.currencyCode,
    value: event.data?.checkout?.subtotalPrice?.amount,
    items: items
  };

  dataLayer.push({
    event: "begin_checkout",
    url: event.context.document.location.href,
    ecommerce: checkoutData
  });

  // GA4
  gtag("event", "begin_checkout", {
    'send_to': g__ga4_id,
    'url': event.context.document.location.href,
    currency: checkoutData.currency,
    value: checkoutData.value,
    items: items
  });

  // Google Ads
  gtag('event', 'conversion', {
    'send_to': send_to_checkout_started,
    'value': checkoutData.value,
    'currency': checkoutData.currency
  });

  // Remarketing Dinámico
  gtag('event', 'begin_checkout', {
    'value': checkoutData.value,
    'items': items.map(item => ({
      'id': item.id,
      'google_business_vertical': 'retail'
    }))
  });
});

// Evento: Search Submitted
analytics.subscribe("search_submitted", (event) => {
  dataLayer.push({ ecommerce: null });
  
  const searchData = {
    query: event.data?.searchResult?.query
  };

  dataLayer.push({
    event: "search_submitted",
    url: event.context.document.location.href,
    ecommerce: searchData
  });

  // GA4
  gtag("event", "search", {
    'send_to': g__ga4_id,
    'url': event.context.document.location.href,
    query: searchData.query
  });

  // Google Ads - no suele aplicarse para búsqueda interna, pero puedes omitir si no es necesario
});

// Evento: Collection Viewed
analytics.subscribe("collection_viewed", (event) => {
  dataLayer.push({ ecommerce: null });
  
  const collectionData = {
    collection_id: event.data?.collection?.id,
    collection_title: event.data?.collection?.title
  };

  dataLayer.push({
    event: "view_collection",
    url: event.context.document.location.href,
    ecommerce: collectionData
  });

  // GA4
  gtag("event", "view_collection", {
    'send_to': g__ga4_id,
    'url': event.context.document.location.href,
    collection_id: collectionData.collection_id,
    collection_title: collectionData.collection_title
  });

  // Google Ads - generalmente no se envía como conversión, puedes omitir
});

// Evento: Product Viewed (corregido)
analytics.subscribe("product_viewed", (event) => {
  dataLayer.push({ ecommerce: null });

  const PRODUCT_COUNTRY_CODE = event.data?.productVariant?.product?.localization?.country?.isoCode || 'US'; // Código del país

  // Extraer el ID del producto y variante correctamente
  const productId = event.data?.productVariant?.product?.id || "unknown_product_id";
  const variantId = event.data?.productVariant?.id || "unknown_variant_id";

  // Construir los items con los IDs correctos
  const items = [{
    id: `shopify_${PRODUCT_COUNTRY_CODE}_${productId}_${variantId}`,  // ID de producto y variante correctamente formateado
    item_name: event.data?.productVariant?.product?.title || "unknown_product_title",
    price: parseFloat(event.data?.productVariant?.price?.amount) || 0,
    quantity: 1 // Asumimos que se está viendo 1 unidad del producto
  }];

  const productData = {
    currency: event.data?.productVariant?.price?.currencyCode,
    value: event.data?.productVariant?.price?.amount,
    items: items
  };

  dataLayer.push({
    event: "view_item",
    url: event.context.document.location.href,
    ecommerce: productData
  });

  // GA4
  gtag("event", "view_item", {
    'send_to': g__ga4_id,
    'url': event.context.document.location.href,
    currency: productData.currency,
    value: productData.value,
    items: items
  });

  // Google Ads
  gtag('event', 'conversion', {
    'send_to': send_to_product_viewed,
    'value': productData.value,
    'currency': productData.currency
  });

  // Remarketing Dinámico
  gtag('event', 'view_item', {
    'value': productData.value,
    'items': items.map(item => ({
      'id': item.id,  // ID de producto con el formato correcto
      'google_business_vertical': 'retail'
    }))
  });
});

// Evento: Page Viewed
analytics.subscribe("page_viewed", (event) => {
  window.dataLayer.push({
    event: "page_view",
    url: event.context.document.location.href
  });

  // GA4
  gtag("event", "page_view", {
    'send_to': g__ga4_id,
    'url': event.context.document.location.href
  });

  // No se envía a Google Ads ni Remarketing Dinámico
});
