const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-whiteFont">
      <div className="container xl:max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
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

          <div className="flex space-x-6 mb-4 md:mb-0">
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
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="font-NunitoSans text-sm">© {new Date().getFullYear()} Nexum. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
