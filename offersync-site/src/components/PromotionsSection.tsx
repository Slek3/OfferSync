import React from "react";
import Image from "next/image";

/**
 * Seção de promoções e cupons em destaque.
 * Os dados podem ser integrados via API futuramente.
 */
interface PromotionsSectionProps {
  filters?: {
    category: string;
    price: string;
  };
}

export default function PromotionsSection({ filters }: PromotionsSectionProps) {
  // Exemplo de promoções estáticas
  const promotions = [
    {
      title: "Smartphone Samsung Galaxy S23",
      description: "Desconto exclusivo + cupom de R$200!",
      link: "#",
      badge: "Cupom",
      category: "smartphones",
      price: 3500,
      image: "/produtos/s23.jpg",
    },
    {
      title: "Notebook Lenovo Ideapad 3",
      description: "Oferta relâmpago com frete grátis!",
      link: "#",
      badge: "Oferta",
      category: "eletronicos",
      price: 2500,
      image: "/produtos/ideapad3.jpg",
    },
    {
      title: "Echo Dot 5ª Geração",
      description: "Compre com 30% OFF usando nosso cupom!",
      link: "#",
      badge: "Cupom",
      category: "eletronicos",
      price: 350,
      image: "/produtos/echodot5.jpg",
    },
    {
      title: "Tênis Nike Revolution",
      description: "Promoção exclusiva em moda esportiva!",
      link: "#",
      badge: "Oferta",
      category: "moda",
      price: 199,
      image: "/produtos/tenisnike.jpg",
    },
    {
      title: "Kit Skincare Completo",
      description: "Desconto especial para cuidados com a pele!",
      link: "#",
      badge: "Cupom",
      category: "beleza",
      price: 89,
      image: "/produtos/skincare.jpg",
    },
  ];

  // Filtro por categoria
  let filtered = promotions;
  if (filters?.category && filters.category !== "all") {
    filtered = filtered.filter((p) => p.category === filters.category);
  }
  // Filtro por faixa de preço
  if (filters?.price && filters.price !== "all") {
    if (filters.price === "0-100") filtered = filtered.filter((p) => p.price <= 100);
    if (filters.price === "100-500") filtered = filtered.filter((p) => p.price > 100 && p.price <= 500);
    if (filters.price === "500+") filtered = filtered.filter((p) => p.price > 500);
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Destaques do momento</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-8">Nenhuma promoção encontrada para os filtros selecionados.</div>
        ) : (
          filtered.map((promo, idx) => (
            <a
              key={idx}
              href={promo.link}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition p-5 border-t-4 border-orange-400 hover:border-blue-700"
              aria-label={promo.title}
            >
              <div className="w-full flex justify-center mb-3">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  width={180}
                  height={180}
                  className="object-contain rounded"
                />
              </div>
              <span className="inline-block bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                {promo.badge}
              </span>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">{promo.title}</h3>
              <p className="text-gray-700 mb-2">{promo.description}</p>
              <button className="mt-2 bg-blue-700 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded transition">
                Ver promoção
              </button>
            </a>
          ))
        )}
      </div>
    </section>
  );
}
