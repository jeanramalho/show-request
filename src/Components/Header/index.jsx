import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom';
import Logo from '../Logo'

export default function Header() {
  return (
    <Container>
      <Logo />
      <Link to="/" className='link'><h1 className='title-header'><span className='show-title'>Show</span> Request</h1></Link>
    </Container>
  )
}