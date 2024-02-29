import Navbar from '../conponents/Navbar'
import Footer from '../conponents/Footer'

export const metadata = {
    title: 'Contact',
    description: 'Reach out',
  }


export default function layout({children}) {
  
  return (
    <div> <Navbar/> 
    {children}
    <Footer/> </div>
  )
}
