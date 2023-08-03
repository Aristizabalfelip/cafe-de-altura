export const priceCoffees = (purchase) => {

    const result = purchase.reduce((acum, obj) => {
        const multiplication = obj.price * obj.quantity;
        return acum + multiplication;
      }, 0);

     return result
}