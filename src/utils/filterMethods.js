
export const innovationCoffeeFilters = (coffees, arrayProducts) => {
    return arrayProducts.filter(obj => coffees.includes(obj.brand))
}