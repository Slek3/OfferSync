import React from "react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

/**
 * Ícones de redes sociais com links.
 */
export default function SocialIcons() {
  return (
    <div className="flex gap-4 justify-center my-4">
      <a
        href="https://t.me/sua_comunidade"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="text-blue-700 hover:text-orange-400 text-2xl transition"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="https://instagram.com/sua_pagina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-orange-400 hover:text-blue-700 text-2xl transition"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
