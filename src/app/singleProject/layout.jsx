import Navbar from '../conponents/Navbar'
import Footer from '../conponents/Footer'
import Project from './page'

export const metadata = {
    title: 'About Project ',
    description: 'Details',
  }


export default function layout() {
  return (
    <div> <Navbar/> <Project/> <Footer/> </div>
  )
}
