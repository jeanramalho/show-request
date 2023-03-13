import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom';
import Logo from '../Logo'

export default function Header() {
  return (
    <Container>
      <Logo />
      <Link to="/" className='link'>
        <h1>Show Request</h1>
        <ul>
          <Link><li>Onsite</li></Link>
          <Link><li>Search</li></Link>
          <Link><li>Hotsite</li></Link>
          <Link><li>Navigates</li></Link>
        </ul>
        </Link>
    </Container>
  )
}