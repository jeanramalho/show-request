import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom';
import Logo from '../Logo'

export default function Header() {
  return (
    <Container>
      <Logo />
      <Link to="/" className='link'><h1><Span>Show</Span> Request</h1></Link>
    </Container>
  )
}