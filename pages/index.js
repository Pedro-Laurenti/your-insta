import Link from 'next/link';

function Sobre(){
    return(
        <div>
            <h1>Hello world!</h1>
            <h2>Página principal</h2>
            <p> - Minha primeira página usando Next.js! - </p>
            <Link href="/sobre">
                <a>Página secundária</a>
            </Link>
        </div>
    )
}

export default Sobre