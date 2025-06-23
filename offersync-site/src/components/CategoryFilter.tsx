import React, { useState } from "react";

/**
 * Filtros e categorias para navegação e filtragem de promoções.
 * Paleta de cores: azul, laranja e branco.
 */
const categories = [
  { label: "Todos", value: "all" },
  { label: "Smartphones", value: "smartphones" },
  { label: "Eletrônicos", value: "eletronicos" },
  { label: "Moda", value: "moda" },
  { label: "Beleza", value: "beleza" },
  { label: "Casa", value: "casa" },
  { label: "Games", value: "games" },
  { label: "Mercado", value: "mercado" },
];

const priceRanges = [
  { label: "Todos", value: "all" },
  { label: "Até R$100", value: "0-100" },
  { label: "R$100 a R$500", value: "100-500" },
  { label: "Acima de R$500", value: "500+" },
];

interface CategoryFilterProps {
  onFilter: (filters: { category: string; price: string }) => void;
}

export default function CategoryFilter({ onFilter }: CategoryFilterProps) {
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

  function handleFilter() {
    onFilter({ category, price });
  }

  return (
    <section className="w-full flex flex-col items-center gap-4 md:gap-6 p-4 bg-white rounded-xl shadow-md border border-gray-100">
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`px-4 py-2 rounded font-semibold border transition text-sm whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
              category === cat.value
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white text-blue-700 border-blue-300 hover:bg-orange-400 hover:text-white hover:border-orange-400"
            }`}
            onClick={() => {
              setCategory(cat.value);
              setTimeout(handleFilter, 0);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 w-full">
        {priceRanges.map((range) => (
          <button
            key={range.value}
            className={`px-4 py-2 rounded font-semibold border transition text-sm whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400/50 ${
              price === range.value
                ? "bg-orange-400 text-white border-orange-400"
                : "bg-white text-orange-400 border-orange-200 hover:bg-blue-700 hover:text-white hover:border-blue-700"
            }`}
            onClick={() => {
              setPrice(range.value);
              setTimeout(handleFilter, 0);
            }}
          >
            {range.label}
          </button>
        ))}
      </div>
    </section>
  );
}
