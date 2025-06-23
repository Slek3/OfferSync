import React from "react";

const blogPosts = [
	{
		title: "Os melhores notebooks em promoção para trabalhar e estudar",
		excerpt: "Confira nossa seleção de notebooks com descontos especiais para produtividade e estudos.",
		link: "/blog/melhores-notebooks-promocao",
		date: "2025-06-20",
		category: "Computadores",
	},
	{
		title: "Como utilizar cupons para economizar em gadgets de IA",
		excerpt: "Aprenda a aplicar cupons e economizar em dispositivos de inteligência artificial.",
		link: "/blog/cupons-gadgets-ia",
		date: "2025-06-15",
		category: "Inteligência Artificial",
	},
	{
		title: "Dicas para comprar smartphones em oferta com segurança",
		excerpt: "Veja como aproveitar promoções de smartphones sem cair em armadilhas.",
		link: "/blog/dicas-smartphones-oferta",
		date: "2025-06-10",
		category: "Smartphones",
	},
];

export default function BlogSection() {
	return (
		<section className="w-full bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl shadow-md p-6 flex flex-col gap-4">
			<h2 className="text-2xl font-bold text-blue-700 mb-2">Blog Informativo</h2>
			<div className="flex flex-col md:flex-row gap-4">
				{blogPosts.map((post) => (
					<a
						key={post.link}
						href={post.link}
						className="flex-1 bg-white rounded-lg border border-gray-100 shadow-sm p-4 hover:shadow-lg transition flex flex-col justify-between"
					>
						<div>
							<span className="text-xs text-orange-500 font-semibold uppercase">{post.category}</span>
							<h3 className="text-lg font-bold text-blue-800 mt-1 mb-2">{post.title}</h3>
							<p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
						</div>
						<span className="text-xs text-gray-400 mt-2">{post.date.replace(/-/g, "/")}</span>
					</a>
				))}
			</div>
		</section>
	);
}
