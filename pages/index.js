import Link from 'next/Link';

function Home() {
  return (
    <div>
      <h1>Início</h1>
      <Link href="/sobre">
        <a>Acessar página Sobre</a>
      </Link>
    </div>
  );
}

export default Home