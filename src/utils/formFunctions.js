import { v4 as uuidv4 } from 'uuid';

export const handleChange = (event, setData) => {
    setData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

// export  const handleSubmit = (event,data) => {
//     event.preventDefault();
//     try {
//       data['Id'] = uuidv4();
//       const getUsers = JSON.parse(localStorage.getItem('Users'))
//       if (getUsers) {
//         getUsers.push(data)
//           localStorage.setItem('Users', JSON.stringify(getUsers))
//       }else {
//         localStorage.setItem('Users', JSON.stringify([data]))
//     }
//       window.alert("Su petición ha sido resivida, nuestro equipo se pondrá pronto en contacto con usted");
//     } catch (error) {
//       window.alert("Se produjo un error:", error);
//     }
//   }