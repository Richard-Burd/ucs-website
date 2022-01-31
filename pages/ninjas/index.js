// Net Ninja
// https://youtu.be/MJT_WXdSPjE
import Navbarz from '../../components/Navbarz'

// this is a special function that will only run at build time
// it is a Next.js feature
// https://youtu.be/zueyEdRZQlk
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

// rendering all of the ninjas from an external API
// https://youtu.be/zueyEdRZQlk
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <Navbarz />
      <br></br>
      <h1>All Ninjas</h1>
        {ninjas.map(ninja => (
          <div key={ninja.id}>
            <a>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
      <br></br>
    </div>
  );
}

export default Ninjas;

this

    