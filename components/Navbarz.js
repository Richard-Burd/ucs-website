// Net Ninja
// https://youtu.be/MJT_WXdSPjE
import Link from 'next/link';

const Navbarz = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Ninja List Navbarz</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/standards"><a>Standards</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbarz;