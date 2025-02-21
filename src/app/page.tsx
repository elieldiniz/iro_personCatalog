import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const menuItems = [
    { name: 'Veja Modelos', link: 'https://www.canva.com/design/DAGbLZT1XDc/s571J-S93NS59hMEzkk2HQ/watch?utm_content=DAGbLZT1XDc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2c7f2c0fac' },
    { name: 'Personalize do Seu Jeito', link: 'https://wa.me/5569992445784' },
    { name: 'Sobre Nós', link: '/Sobrenos' },
    { name: 'Contato', link: 'https://wa.me/5569992445784' },
    { name: 'Promoções', link: '/promocao' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-500 to-blue-900 text-white p-4">
      <div className="flex flex-col items-center mt-10">
        <Image src="/iro.png" alt="Haruko Person" width={150} height={150} className="rounded-full shadow-lg" />
      </div>
      <nav className="mt-8 w-full max-w-md">
        <ul className="space-y-4 w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="text-center w-full">
              <Link 
                href={item.link} 
                className="block w-full px-6 py-3 text-lg font-semibold bg-white text-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white active:scale-90 active:bg-blue-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}