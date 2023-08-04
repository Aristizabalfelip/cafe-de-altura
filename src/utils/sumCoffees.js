export const priceCoffees = (purchase) => {

  const result = purchase.reduce((acum, obj) => {
    const multiplication = obj.price * obj.quantity;
    return acum + multiplication;
  }, 0);

  return result
}

export const coffeeBill = (setBill, shippingPrice, purchaseTotal, bill) => {

  if (purchaseTotal > 0) {
    shippingPrice === 0 ? setBill(purchaseTotal) : setBill(purchaseTotal + 9);
    return bill
  }
}