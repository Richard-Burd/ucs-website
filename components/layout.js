// Net NInja
// https://youtu.be/DGn25s42NvQ
// This layout.js file is called in the _app.js file that is 
// located in the root of the project.
import Head from 'next/head'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className={"py-14 sm:max-w-screen-md lg:max-w-screen-lg mx-auto"}>
      <Head>
        <title>Urban Cruise Ship</title>
        <meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"/>
        <meta charset="utf-8"/>
        
        <script src="https://kit.fontawesome.com/07a2e01765.js" crossorigin="anonymous"></script>     
      
        <style>
          @import url('https://fonts.cdnfonts.com/css/arial-rounded-mt-bold');
          @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
          @import url('https://fonts.cdnfonts.com/css/varela-round-2');
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
          @import url('https://fonts.cdnfonts.com/css/arreia-black');
          @import url('https://fonts.cdnfonts.com/css/bpg-arial');
        </style>
      </Head>
 
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}