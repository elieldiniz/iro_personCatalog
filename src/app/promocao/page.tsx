'use client'; // Adicione esta linha no topo

import Image from 'next/image'; // Corrigir o caminho de importação
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Promocoes() {
  const promocoes = [
    {
      id: 1,
      nome: "Caneca Exclusiva em Promoção! + Brind",
      preco: "R$ 40,00",
      imagem: "/cafe.png",
    },
    {
      id: 2,
      nome: "Caneca Personalizada - Edição Limitada + Brind",
      preco: "R$ 38,90",
      imagem: "/msc.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-600 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-white mb-8">Promoções</h2>
      <div className="w-full max-w-lg">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          navigation
          pagination={{ clickable: true }}
          effect="fade"
          speed={600}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {promocoes.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white flex flex-col items-center p-6">
                <div className="relative h-64 w-full">
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.nome}
                  </h3>
                  <p className="mt-2 text-xl text-gray-600">{item.preco}</p>
                  <div className="mt-4 flex justify-center gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition duration-300">
                      Comprar Agora
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full shadow hover:bg-green-600 transition duration-300">
                      Entrar em Contato
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}