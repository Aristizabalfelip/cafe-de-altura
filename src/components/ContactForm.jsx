import React, { useState } from 'react'
import { InputForm } from './InputForm'
import { v4 as uuidv4 } from 'uuid';

export const ContactForm = () => {

  const [data, setData] = useState({});

  const handleChange = (event) => {
    setData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      data['Id'] = uuidv4();
      const getUsers = JSON.parse(localStorage.getItem('Users'))
      if (getUsers) {
        getUsers.push(data)
          localStorage.setItem('Users', JSON.stringify(getUsers))
      }else {
        localStorage.setItem('Users', JSON.stringify([data]))
    }
      window.alert("Su petición ha sido resivida, nuestro equipo se pondrá pronto en contacto con usted");
    } catch (error) {
      window.alert("Se produjo un error:", error);
    }
  }

  return (
    <div className='py-8 pl-12 pr-8 w-[588px] bg-white'>
        <form className='flex flex-col gap-6 items-start' onSubmit={handleSubmit}>
          <InputForm type='text' text='Nombre completo' name='name' value={data?.name} onChange={handleChange} />
          <InputForm type='email' text='Email' name='email' value={data.email} onChange={handleChange} />
          <InputForm type='tel' text='Teléfono' name='tel' value={data.tel} onChange={handleChange} />
          <InputForm type='text' text='' name='textArea' value={data.textArea} onChange={handleChange} />
          <InputForm type='checkbox' text='Acepto la Política de Privacidad y los Términos y condiciones.' name='check' value={true} onChange={handleChange} />
          <input className='py-3 px-6 bg-greenNoHover rounded text-white' type="submit" value="Enviar" />
        </form>
  
    </div>
  )
};


