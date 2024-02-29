import Navbar from '../conponents/Navbar'
import Footer from '../conponents/Footer'
import About from './page'

export const metadata = {
    title: 'Contact',
    description: 'Reach out',
  }


export default function layout() {
  return (
    <div> <Navbar/> <About /> <Footer/> </div>
  )
}
