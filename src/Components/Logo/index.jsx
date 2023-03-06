import React from 'react';
import Impulse from "../../Assets/Impulse.png"
import Linx from "../../Assets/Linx.png"
import { Container } from './style'


function Logo() {
  return (
    <Container>
         <img src={Linx} className="linx" />
         <img src={Impulse} className="impulse" />
    </Container>
  );
}

export default Logo;