"use client";
import React from "react";
import Banner from "@/components/Banner";
import PromotionsSection from "@/components/PromotionsSection";
import NewsletterForm from "@/components/NewsletterForm";
import SocialIcons from "@/components/SocialIcons";
import BlogSection from "@/components/BlogSection";
import CategoryNav from "@/components/CategoryNav";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-white flex flex-col items-center px-2 md:px-0 pt-16">
        <main className="w-full max-w-5xl flex flex-col gap-6 mt-6">
          <Banner />
          <SocialIcons />
          <CategoryNav />
          {/* Prova social */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between bg-blue-50 rounded-lg p-3 mb-2 text-blue-700 text-sm font-semibold shadow-sm">
            <span>+10.000 promoções compartilhadas</span>
            <span>+5.000 membros na nossa comunidade</span>
          </div>
          <div className="w-full flex flex-col gap-8 md:gap-10">
            {/* Destaques do momento */}
            <PromotionsSection />
            {/* Botões de compartilhamento */}
            <div className="flex gap-3 justify-center mb-2">
              <a
                href="https://wa.me/?text=Confira%20as%20melhores%20promoções%20no%20OfferSync!%20https://offersync.com"
                target="_blank"
                rel="noopener"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-sm transition"
              >
                Compartilhar no WhatsApp
              </a>
              <a
                href="https://t.me/share/url?url=https://offersync.com&text=Confira%20as%20melhores%20promoções%20no%20OfferSync!"
                target="_blank"
                rel="noopener"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-sm transition"
              >
                Compartilhar no Telegram
              </a>
              <a
                href="https://www.instagram.com/OfferSync"
                target="_blank"
                rel="noopener"
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white px-4 py-2 rounded-lg font-semibold shadow-sm transition"
              >
                Instagram
              </a>
            </div>
            {/* Blog informativo substituindo publicidade */}
            <BlogSection />
          </div>
        </main>
        <footer className="w-full max-w-5xl flex flex-col items-center text-center text-xs text-gray-400 py-8 mt-8 border-t gap-4">
          <NewsletterForm />
          <span>
            © {new Date().getFullYear()} OfferSync. Todos os direitos reservados.
          </span>
        </footer>
      </div>
    </>
  );
}
