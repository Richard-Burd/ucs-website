// Net Ninja: https://youtu.be/dlee0ESZvlc
// Custon 404 page, the component can have any name you want.

import Link from 'next/link';

// Net Ninja: https://youtu.be/O3yKwz4wRHc
// This is used to automatically redirect the user to the homepage 
// if they try to access a page that doesn't exist.
import { useEffect } from 'react';  
import { useRouter } from 'next/router';

const NotFound = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // this would take the user to the last page they viewed
      // router.go(-1)

      // this would take the user to the homepage
      router.push('/')
    }, 3000)
  }, []);

  return (
    <div>
        <h1>404</h1>
         <p>Page not found</p>
         <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}

export default NotFound;