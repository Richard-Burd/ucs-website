import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className={"py-14 sm:max-w-screen-md lg:max-w-screen-lg mx-auto"}>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}