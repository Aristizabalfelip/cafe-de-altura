import React from 'react'
import { Nav } from '../pages/Nav'
import { Conditions } from '../pages/Conditions'
import { Hero } from '../pages/Hero'
import { Innovations } from '../pages/Innovations'
import { FrequentQuestions } from '../pages/FrequentQuestions'
import { Cafeteria } from '../pages/Cafeteria'
import { Contact } from '../pages/Contact'
import { Footer } from '../pages/Footer'

export const Home = () => {
  return (

        <>
          < Nav />
          < Hero />
          < Conditions />
          < Innovations />
          < FrequentQuestions />
          < Cafeteria />
          < Contact />
          < Footer />
        </>
 
  )
}
