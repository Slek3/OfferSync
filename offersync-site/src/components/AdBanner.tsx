import React from "react";

/**
 * Área para publicidade de outro blog.
 */
export default function AdBanner() {
  return (
    <aside className="w-full bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col items-center mb-8">
      <span className="text-sm text-blue-700 font-semibold mb-1">Publicidade</span>
      <a
        href="https://seudominioblog.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-bold text-orange-400 hover:text-blue-700 transition"
      >
        Conheça também nosso blog parceiro!
      </a>
    </aside>
  );
}
