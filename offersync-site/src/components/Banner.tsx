import React from "react";

/**
 * Banner chamativo para destacar a marca na página inicial.
 * Paleta de cores: azul, laranja e branco.
 */
export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-orange-400 text-white py-10 px-4 flex flex-col items-center justify-center rounded-lg shadow-lg mb-8">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg text-center">
        OfferSync
      </h1>
      <p className="text-lg md:text-2xl font-medium text-white/90 text-center max-w-2xl">
        Todas as melhores ofertas, promoções e cupons de desconto dos maiores marketplaces em um só lugar!
      </p>
    </section>
  );
}
