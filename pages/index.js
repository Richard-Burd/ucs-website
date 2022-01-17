import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <h1>Homepage</h1>
    </div>

    <div className={"gap-2 justify-center grid lg:grid-cols-3 md:grid-cols-2 bg-gray-100 p-10"}>
      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/energy" target="_blank">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>energy production, distribution, and consumption</span>
        <img className={"transform hover:scale-110 transition duration-300"} src="images/homepage-icons/energy.svg" alt="icon that is a link to the matter site"/>
      </a>


      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/foodwater" target="_blank">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>matter, food, water, and other consumables</span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/matter.svg" alt="icon that is a link to the matter site"/>
      </a>

      <a className={"transform focus:scale-110 transition duration-300"} href="http://urbancruiseship.org/site/habitat" target="_blank">
        <span className={"absolute text-purple-700 text-opacity-0 text-xs"}>habitat, perspective and perception </span>
        <img className={"transform hover:scale-110 transition duration-300"} src="/images/homepage-icons/habitat.svg" alt="icon that is a link to the habitat site"/>
      </a>












    </div>
    
    </>
  )
}
