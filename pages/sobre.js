import Link from 'next/link';

function Sobre(){
    return(
        <div>
            <h1>Hello world!</h1>
            <h2>Página secundária</h2>
            <p> - Next.js é muito legal!! - </p>
            <Link href="/">
                <a>Página principal</a>
            </Link>
        </div>
    )
}

export default Sobre