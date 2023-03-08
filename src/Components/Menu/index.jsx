import React from 'react'
import { Container } from './style'
import { Link } from 'react-router-dom';


function Menu() {
  return (
    <Container>
        <ul className='lista-menu'>
            <Link className='item-menu'><ul>Onsite</ul></Link>
            <Link className='item-menu'><ul>Busca</ul></Link>
            <Link className='item-menu'><ul>Navigates</ul></Link>
            <Link className='item-menu'><ul>Hotsite</ul></Link>
        </ul>
    </Container>
  );
}

export default Menu;