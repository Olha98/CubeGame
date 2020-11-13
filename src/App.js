import React, { useState } from 'react'
import img2 from './assets/images/2.png'
import img3 from './assets/images/images.png'
import img1 from './assets/images/images2.png'
import styled from './App.module.css'


function App() {
  const [flippedCard, hasFlippedCard ] = useState(false)

  const handelClisk = (e) => {
  console.log(e.target)
  }


  return (
    <section className={styled.memoryGame}>
     <div className={styled.memoryCard} data-framework="react" onClick={(e) => handelClisk(e)}>
    <img className={styled.frontFace} src={img3} alt="React"/>
    <img className={styled.backFace} src={img2} alt="Memory Card"/>
  </div>
  <div className={styled.memoryCard} data-framework="angular" onClick={(e) => handelClisk(e)}>
    <img className={styled.frontFace} src={img3} alt="React"/>
    <img className={styled.backFace} src={img1} alt="Memory Card"/>
  </div>
   <div className={styled.memoryCard} data-framework="react" onClick={(e) => handelClisk(e)}>
    <img className={styled.frontFace} src={img3} alt="React"/>
    <img className= {styled.backFace} src={img2} alt="Memory Card"/>
  </div>
    </section>
   
  );
}

export default App;

