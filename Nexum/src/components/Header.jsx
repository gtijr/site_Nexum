"use client"

import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-neutral-900 w-full">
      <div className="container xl:max-w-screen-xl  mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/">
            <div className="bg-yellowBg w-12 h-12 flex items-center justify-center">
              {/* Placeholder para o ícone do logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#servicos" className="text-whiteFont hover:text-yellowBg transition-colors font-NunitoSans">
            Serviços
          </a>
          <a href="#casos" className="text-whiteFont hover:text-yellowBg transition-colors font-NunitoSans">
            Casos
          </a>
          <a href="#depoimentos" className="text-whiteFont hover:text-yellowBg transition-colors font-NunitoSans">
            Depoimentos
          </a>
          <a href="#contato" className="text-whiteFont hover:text-yellowBg transition-colors font-NunitoSans">
            Contato
          </a>
          <a href="#localizacao" className="text-whiteFont hover:text-yellowBg transition-colors font-NunitoSans">
            Localização
          </a>
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yourphonenumber"
          className="hidden md:block border border-yellowBg text-whiteFont px-4 py-2 rounded-full hover:bg-yellowBg hover:text-neutral-900 transition-colors font-NunitoSans"
        >
          Whatsapp
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-whiteFont" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {/* Ícone de menu hambúrguer simples */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <a
              href="#servicos"
              className="block text-whiteFont hover:text-yellowBg transition-colors py-2 font-NunitoSans"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#casos"
              className="block text-whiteFont hover:text-yellowBg transition-colors py-2 font-NunitoSans"
              onClick={() => setIsMenuOpen(false)}
            >
              Casos
            </a>
            <a
              href="#depoimentos"
              className="block text-whiteFont hover:text-yellowBg transition-colors py-2 font-NunitoSans"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="block text-whiteFont hover:text-yellowBg transition-colors py-2 font-NunitoSans"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <a
              href="#localizacao"
              className="block text-whiteFont hover:text-yellowBg transition-colors py-2 font-NunitoSans"
              onClick={() => setIsMenuOpen(false)}
            >
              Localização
            </a>
            <a
              href="https://wa.me/yourphonenumber"
              className="inline-block border border-yellowBg text-whiteFont px-4 py-2 rounded-full hover:bg-yellowBg hover:text-neutral-900 transition-colors mt-2 font-NunitoSans"
              onClick={() => setIsMenuOpen(false)}
            >
              Whatsapp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
