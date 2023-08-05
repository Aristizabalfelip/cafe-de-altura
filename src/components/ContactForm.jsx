import React, { useState } from 'react'
import { InputForm } from './InputForm'

export const ContactForm = () => {

  const [data, setData] = useState({});

  const handleChange = (event) => {
    setData(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
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
