import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom';
import Logo from '../Logo'

export default function Header() {
  return (
    <Container>
      <Container>
        <Logo />
        <Link to="/" className='link'>
          <h1>Show Request</h1>
        </Link>
      </Container>
      

        <ul className='menuHeader'>
          <Link><li className='itemMenu'>Onsite</li></Link>
          <Link><li className='itemMenu'>Search</li></Link>
          <Link><li className='itemMenu'>Hotsite</li></Link>
          <Link><li className='itemMenu'>Navigates</li></Link>
        </ul>
    </Container>
  )
}