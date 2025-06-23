import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";

const categories = [
	{ label: "Smartphones", value: "smartphones" },
	{ label: "Eletrônicos", value: "eletronicos" },
	{ label: "Moda", value: "moda" },
	{ label: "Beleza", value: "beleza" },
	{ label: "Casa", value: "casa" },
	{ label: "Games", value: "games" },
	{ label: "Moveis", value: "mercado" },
];

export default function TopBar() {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [search, setSearch] = React.useState("");

	return (
		<header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
			<div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
				{/* Menu lateral */}
				<div className="flex items-center gap-2">
					<button
						className="p-2 rounded hover:bg-blue-50 focus:outline-none"
						onClick={() => setMenuOpen((v) => !v)}
						aria-label="Abrir menu"
					>
						<FaBars className="text-blue-700 text-xl" />
					</button>
					{/* Menu dropdown */}
					{menuOpen && (
						<nav className="absolute left-4 top-14 bg-white border rounded shadow-lg p-4 flex flex-col gap-2 min-w-[180px] animate-fade-in">
							{categories.map((cat) => (
								<Link
									key={cat.value}
									href={`/categoria/${cat.value}`}
									className="text-blue-700 hover:text-orange-500 font-semibold px-2 py-1 rounded transition"
									onClick={() => setMenuOpen(false)}
								>
									{cat.label}
								</Link>
							))}
						</nav>
					)}
				</div>
				{/* Barra de busca */}
				<form
					className="flex items-center gap-2 flex-1 max-w-xs mx-4"
					onSubmit={(e) => {
						e.preventDefault();
						// Redirecionar para página de busca futuramente
					}}
				>
					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Buscar produtos..."
						className="w-full px-4 py-2 border-2 border-blue-700 rounded-l-lg focus:outline-none focus:ring-4 focus:ring-blue-200 bg-white text-sm font-semibold shadow-md placeholder:text-blue-400"
						style={{ minWidth: 180 }}
					/>
					<button
						type="submit"
						className="bg-blue-700 hover:bg-orange-400 text-white px-4 py-2 rounded-r-lg transition font-bold shadow-md text-lg"
						aria-label="Buscar"
					>
						<FaSearch />
					</button>
				</form>
				{/* Logo do blog */}
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/globe.svg"
						alt="OfferSync Logo"
						width={36}
						height={36}
					/>
					<span className="font-bold text-blue-700 text-lg hidden md:inline">
						OfferSync
					</span>
				</Link>
			</div>
		</header>
	);
}
