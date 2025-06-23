import React from "react";

/**
 * Formulário de coleta de e-mails para novidades e promoções.
 * Integração futura com Mailchimp/Sendinblue.
 */
export default function NewsletterForm() {
  return (
    <section className="w-full bg-white rounded-lg shadow-md p-6 flex flex-col items-center mb-8">
      <h2 className="text-xl font-bold text-blue-700 mb-2">Receba as melhores promoções!</h2>
      <form className="flex flex-col md:flex-row gap-2 w-full max-w-md">
        <input
          type="email"
          placeholder="Seu e-mail"
          className="flex-1 px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <button
          type="submit"
          className="bg-orange-400 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded transition"
        >
          Cadastrar
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-2">Prometemos não enviar spam. Só ofertas de verdade!</p>
    </section>
  );
}
