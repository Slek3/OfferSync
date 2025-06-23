"use client";
import React, { useState } from "react";
import Banner from "@/components/Banner";
import PromotionsSection from "@/components/PromotionsSection";
import SocialIcons from "@/components/SocialIcons";
import AdBanner from "@/components/AdBanner";
import CategoryNav from "@/components/CategoryNav";
import { useParams } from "next/navigation";
import NewsletterForm from "@/components/NewsletterForm";
import TopBar from "@/components/TopBar";

const categoryNames: Record<string, string> = {
  smartphones: "Smartphones",
  eletronicos: "Eletrônicos",
  moda: "Moda",
  beleza: "Beleza",
  casa: "Casa",
  games: "Games",
  mercado: "Moveis",
};

const categoryDescriptions: Record<string, string> = {
  smartphones: "Veja as melhores promoções e cupons para smartphones das principais marcas.",
  eletronicos: "Ofertas imperdíveis em eletrônicos: TVs, fones, smartwatches e mais.",
  moda: "Descontos em roupas, calçados e acessórios para todos os estilos.",
  beleza: "Cupons e promoções em produtos de beleza, skincare e perfumaria.",
  casa: "Economize em itens para casa, decoração e utilidades domésticas.",
  games: "Jogos, consoles e acessórios gamers com preços especiais.",
  mercado: "Ofertas em móveis, decoração e utilidades para o seu lar.",
};

function PriceFilter({ price, setPrice }: { price: string; setPrice: (p: string) => void }) {
  const priceRanges = [
    { label: "Todos", value: "all" },
    { label: "Até R$100", value: "0-100" },
    { label: "R$100 a R$500", value: "100-500" },
    { label: "Acima de R$500", value: "500+" },
  ];
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {priceRanges.map((range) => (
        <button
          key={range.value}
          className={`px-4 py-2 rounded font-semibold border transition text-sm whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 ${
            price === range.value
              ? "bg-orange-400 text-white border-orange-400"
              : "bg-white text-orange-400 border-orange-200 hover:bg-blue-700 hover:text-white hover:border-blue-700"
          }`}
          onClick={() => setPrice(range.value)}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}

export default function CategoriaPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [filters, setFilters] = useState({ category: slug || "all", price: "all" });

  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-white flex flex-col items-center px-2 md:px-0 pt-16">
        <main className="w-full max-w-5xl flex flex-col gap-6 mt-6">
          <Banner />
          <SocialIcons />
          <CategoryNav />
          <h1 className="text-3xl font-bold text-blue-700 mb-2 mt-2 text-center">
            {categoryNames[slug] || "Categoria"}
          </h1>
          <p className="text-center text-gray-600 mb-4">
            {categoryDescriptions[slug] || "Confira as melhores promoções desta categoria."}
          </p>
          {/* Filtro de preço centralizado */}
          <div className="flex justify-center w-full mb-4">
            <PriceFilter price={filters.price} setPrice={(price) => setFilters(f => ({ ...f, price }))} />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Destaques do momento à esquerda */}
            <div className="flex-1 order-2 md:order-1">
              <PromotionsSection filters={filters} />
              <AdBanner />
            </div>
          </div>
        </main>
        <footer className="w-full max-w-5xl flex flex-col items-center text-center text-xs text-gray-400 py-8 mt-8 border-t gap-4">
          <NewsletterForm />
          <span>© {new Date().getFullYear()} OfferSync. Todos os direitos reservados.</span>
        </footer>
      </div>
    </>
  );
}
