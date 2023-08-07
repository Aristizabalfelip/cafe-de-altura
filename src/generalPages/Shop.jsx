import React from 'react'
import { Nav } from '../pages/Nav'
import { OriginShop } from '../components/OriginShop'
import { Conditions } from '../pages/Conditions'
import { Footer } from '../pages/Footer'
import { RightsReserved } from '../components/RightsReserved'

export const Shop = () => {
  return (
    <>
      <Nav />
      <OriginShop />
      <Conditions />
     < Footer />
     < RightsReserved />
    </>
  )
}
