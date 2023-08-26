document.getElementById('products-gallery').addEventListener('click', function (event) {
  const productElement = event.target.closest('article');
  const productTitle = productElement.querySelector('h4').innerText;
  const productPriceElement = productElement.querySelector('.price');
  const productPrice = parseFloat(productPriceElement.innerText);

  const cartProductListElement = document.getElementById('productList');
  let elementCount = cartProductListElement.childElementCount;
  const cartProduct = document.createElement('p');
  cartProduct.innerText = `${elementCount + 1}.  ${productTitle}`;
  cartProductListElement.appendChild(cartProduct);

  const subTotalElement = document.getElementById('totalProductPrice');
  const preSubTotal = parseFloat(subTotalElement.innerText);
  const subTotal = preSubTotal + productPrice;
  subTotalElement.innerText = subTotal.toFixed(2);

  const discountElement = document.getElementById('discount');
  const discountAmount = parseFloat(discountElement.innerText);

  document.getElementById('coupon').addEventListener('submit', function (event) {
    event.preventDefault();

    const couponInputField = document.getElementById('couponCode');
    const couponCode = couponInputField.value;

    if (couponCode === 'SELL200') {
      const discountElement = document.getElementById('discount');
      const discountAmount = preSubTotal * (2 / 10);
      discountElement.innerText = discountAmount.toFixed(2);
      const totalPriceElement = document.getElementById('totalPrice');
      totalPriceElement.innerText = (subTotal - discountAmount).toFixed(2);
    }
  });

  const totalPriceElement = document.getElementById('totalPrice');
  const totalPrice = subTotal - discountAmount;
  totalPriceElement.innerText = totalPrice.toFixed(2);

  if (subTotal > 0) {
    document.getElementById('purchase').removeAttribute('disabled');
  } else {
    document.getElementById('purchase').setAttribute('disabled');
  }

  if (totalPrice >= 200) {
    document.getElementById('couponSubmit').removeAttribute('disabled');
  } else {
    document.getElementById('couponSubmit').setAttribute('disabled');
  }
});
