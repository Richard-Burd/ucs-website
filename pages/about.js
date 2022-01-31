import Navbarz from '../components/Navbarz'
import Head from 'next/head'

// This is a "CSS Module" per Net Ninja:
// https://youtu.be/qKwnlTVAGnA?t=284
// ...this is how you import a page-specific css style shee:
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <>
      <Head>
        <title>Urban Cruise Ship | About Page</title>
        <meta name="About Urban Cruise Ship" content="About"/>
      </Head>
      <div className={styles.customklass}>
        <Navbarz />
        <br></br>
        <h1>You have found your way to the "About" page!</h1>
        <br></br>
      </div>
    </>
    );
  }

export default About;