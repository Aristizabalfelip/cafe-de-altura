import React from 'react'
import { ContactForm } from '../components/ContactForm'
import telSilver from '../assets/telSilver.png'
import mail from '../assets/mail.png'
import { ButtonContact } from '../components/ButtonContact'



export const Contact = () => {
  return (
    <div className='flex items-center justify-center self-stretch bg-coContact'>
      <div className='flex gap-6 justify-center items-center'>
        <section className='flex flex-col gap-8 w-[588px] text-coTextCont '>
          <header className='flex flex-col gap-3 '>
            <h3 className='text-lg font-semibold text-black'>Entra en contacto con nosotros</h3>
            <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
          </header>
          <div className='flex flex-col gap-6'>
            <p>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
            <article>
              <p>742 Evergreen Terrace</p>
              <p>Springfield, OR 12345</p>
            </article>
            < ButtonContact name={'+1 (555) 123-4567'} img={telSilver} styleBu={'flex items-center gap-3'} />
            < ButtonContact name={'support@example.com'} img={mail} styleBu={'flex items-center gap-3'} />
            <p>¿Buscas un trabajo? Ver nuestras ofertas.</p>
          </div>
        </section>
        <section>
          < ContactForm />
        </section>
      </div>
    </div>
  )
}
