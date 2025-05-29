
import imglogo from '../assets/amazonlogo.png'


const Navbar = ({ logo=imglogo,nav1="home",nav2="Gallery",nav3="feedback",nav4="getting started"}) => {
  return (
    <>
    <header className='header'>
    <img id='logo'src={logo} alt="logo"/>
   <nav className='navcontainer'>
    <h4>{nav1}</h4>
    <h4>{nav2}</h4>
    <h4>{nav3}</h4>
    <h4>{nav4}</h4>
    </nav>
    </header> 
    </>
  )
}

export default Navbar;