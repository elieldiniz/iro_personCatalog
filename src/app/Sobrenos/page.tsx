import Link from 'next/link';

export default function SobreNos() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-500 to-blue-900 text-white p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold animate-fade-in">Quem Somos</h1>
        <p className="text-lg leading-relaxed animate-slide-up">
          A <span className="font-semibold text-yellow-300">Iro Person</span> nasceu da paixão por transformar momentos em algo único.
          Nossa missão é trazer personalização e identidade a cada produto, 
          tornando suas ideias realidade com qualidade e criatividade.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">Nossa Arte</h2>
            <p className="mt-2 text-sm">
              Cada peça é feita com cuidado e dedicação, garantindo que sua 
              personalização seja única e especial.
            </p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold">Compromisso</h2>
            <p className="mt-2 text-sm">
              Trabalhamos com materiais de alta qualidade para entregar produtos 
              que encantam e duram por muito tempo.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contato" className="px-6 py-3 bg-yellow-300 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 active:scale-95">
            Entre em Contato
          </Link>
        </div>
      </div>
    </div>
  );
}
