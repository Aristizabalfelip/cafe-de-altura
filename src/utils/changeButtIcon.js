import vecSub from '../assets/vecSub.jpg'
import vecSum from '../assets/vecSum.png'

export const changeIcon = (name) => {
   return name === '+' ? vecSum : vecSub
}