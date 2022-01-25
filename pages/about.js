import Navbarz from '../components/Navbarz'

// This is a "CSS Module" per Net Ninja:
// https://youtu.be/qKwnlTVAGnA?t=284
// ...this is how you import a page-specific css style shee:
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.customklass}>
      <Navbarz />
      <br></br>
      <h1>You have found your way to the "About" page!</h1>
      <br></br>
    </div>
    );
  }

export default About;