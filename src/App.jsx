import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/card'
import img1 from './assets/acc.jpg'
import img2 from './assets/fridge.jpg'
import img3 from './assets/cover.png'
import img4 from './assets/microwave.jpg'
import img5 from './assets/light.png'
import img6 from './assets/storage.png'
import img7 from './assets/vase.png'
import img8 from './assets/washmach.jpg'

function App() {
 
  return (
  
    <>
   <Navbar
         nav1={"Home"}
         nav2={"About Us"}
         nav3={"Our Products"}
         nav4={<button>login</button>}
       />
       <div  style={{display: "flex", gap: "20px"}} >
       <Card
         title={"Appliances for your home | Up to 55% off"}
         ig1= {img1}
         ig2= {img2}
         ig3= {img3}
         ig4= {img4}
         subtitle1={"Air conditioners"}
         subtitle2={"Refrigerators"} 
         subtitle3={"Microwaves"}
         subtitle4={"Washing Machine"}
       />
       <Card
         title={"Appliances for your home | Up to 55% off"}
         ig1= {img5}
         ig2= {img6}
         ig3= {img7}
         ig4= {img8}
         subtitle1={"Air conditioners"}
         subtitle2={"Refrigerators"} 
         subtitle3={"Microwaves"}
         subtitle4={"Washing Machine"}
       /> </div>
   {/* <div style={{display: "flex", gap: "20px"}}>
       <Card
         title={"Appliances for your home | Up to 55% off"}
         ig1={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
         }
         ig2={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
         }
         ig3={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
         }
         ig4={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
         }
         subtitle1={"Air conditioners"}
         subtitle2={"Refrigerators"}
         subtitle3={"Microwaves"}
         subtitle4={"Washing Machine"}
       />
       <Card
         title={"Revamp your home in style"}
         ig1={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
         }
         ig2={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
         }
         ig3={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
         }
         ig4={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
         }
         subtitle1={"Cushion covers,bedsheets & more"}
         subtitle2={"Figurines, vases & more"}
         subtitle3={"Home storage"}
         subtitle4={"Lighting solutions"}
       />
       <Card
         title={"Revamp your home in style"}
         ig1={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
         }
         ig2={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg"
         }
         ig3={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg"
         }
         ig4={
           "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg"
         }
         subtitle1={"Cushion covers,bedsheets & more"}
         subtitle2={"Figurines, vases & more"}
         subtitle3={"Home storage"}
         subtitle4={"Lighting solutions"}
       />
       </div> */}
       
   </>
  )
}

export default App
