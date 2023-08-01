import React from 'react'
import { Link } from 'react-router-dom'
import {convertPaths} from '../utils/convertPaths'

export const NavList = ({name}) => {
  return (
    <li>
        <Link to={convertPaths(name)}>{name}</Link>
    </li>
  )
}
