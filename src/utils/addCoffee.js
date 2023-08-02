export const addCoffee = (img, name, price, setPurchase) => {

    const objCoffee = {
        img,
        name,
        price,
        quantity: 1

    }

    setPurchase(prev => {
        if (!prev.some(coffe => coffe.name === name)) {
            return [...prev, objCoffee]
        } else {
            const coffe = prev.find(coffe => coffe.name === name)
            coffe.quantity += 1
            return [...prev]
        }
    })
}

export const cartButtonFuntion = (action,setPurchase,name) => {
  
    if (action === '-') {
        setPurchase(prev => {
            const coffe = prev.find(coffe => coffe.name === name) 
            if (coffe.quantity < 2) {
                coffe.quantity = 0
                return prev.filter(coffe => coffe.name !== name)
            }  else {
                coffe.quantity -= 1
                return [...prev]
            } 
        } )
    }else {
        setPurchase(prev => {
            const coffe = prev.find(coffe => coffe.name === name)
            coffe.quantity += 1
            return [...prev]
        } )
    }
}






















// const handleSubmit = (event) => {

//     setList([...list, { ...data, id: genId, done: false }])

//     setTag(prev => {
//         if (!prev.includes(`${event.target.tag.value}`)) {
//             return [...prev, `${event.target.tag.value}`]
//         } else {
//             return [...prev]
//         }
//     })

//     setMemory([...memory, { ...data, id: genId, done: false }])
// }