import Navbar from '../conponents/Navbar'
import Footer from '../conponents/Footer'

export const metadata = {
    title: 'Code journey',
    description: 'Explore my homepage',
  }


export default function layout({children}) {
  return (
    <div> <Navbar/> {children} <Footer/> </div>
  )
}
