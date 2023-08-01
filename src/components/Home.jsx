import React from 'react'
import { Nav } from './Nav'
import { SectionCardsInno } from './SectionCardsInno'
import { Hero } from './Hero'
import { Innovations } from './Innovations'
import { FrequentQuestions } from './FrequentQuestions'
import { Cafeteria } from './Cafeteria'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <>
      < Nav />
      < Hero />
      < SectionCardsInno />
      < Innovations />
      < FrequentQuestions />
      < Cafeteria />
      < Contact />
    </>
  )
}
