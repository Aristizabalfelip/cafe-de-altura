export const addCoffee = (img,name,price,setPurchase) => {

    const objCoffee = {
        img,
        name,
        price,
        quantity: 1

    } 

    setPurchase(prev => {

        if (!prev.some(coffe=> coffe.name === name)) {

            return[...prev, objCoffee]
        }else {
          
            const coffe = prev.find(coffe=> coffe.name === name)
            coffe.quantity += 1
            
            return [...prev]
        }
    })
}

// const handleClickDone = () => {
//     const index = memory.findIndex(taks=> taks.id === id)
//     const nuevoArray = [...memory]
//     nuevoArray[index].done = !(nuevoArray[index].done)
//     setMemory(nuevoArray)
//     setList(nuevoArray)
//  }




















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