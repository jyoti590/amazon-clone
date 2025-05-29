import React from 'react'
// import img1 from '../assets/acc.jpg'
// import img2 from '../assets/fridge.jpg'
// import img3 from '../assets/cover.png'
// import img4 from '../assets/microwave.jpg'
// import img5 from '../assets/light.png'
// import img6 from '../assets/storage.png'
// import img7 from '../assets/vase.png'
// import img8 from '../assets/washmach.jpg'
const Card = ( {title, ig1, ig2, ig3, ig4, subtitle1,subtitle2,subtitle3,subtitle4}) => {
  return (
    <>
    
             { <div id="div1">
            <h3>{title}</h3>
            <div id="div2">
            <div class="section1"> <img src={ig1} alt="img1"/>
             <h5>{subtitle1}</h5></div>
             <div class="section1"><img  src={ig2} alt="img1"/>
             <h5>{subtitle2}</h5></div>
              <div class="section1"><img  src={ig3} alt="img1"/>
              <h5>{subtitle3}</h5></div>
              <div class="section1"> <img src={ig4} alt="img1"/>
              <h5>{subtitle4}</h5></div>
              </div>
              <a style={ {textDecorationLine:"none"}}href="www.google.com"><h4 >See More</h4></a>
          </div> }
          
    </>
  )
}

export default Card;