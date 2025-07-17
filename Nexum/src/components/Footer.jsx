const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-whiteFont">
      <div className="container xl:max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-row items-center justify-center">
            <a href="/">
              <div className="bg-yellowBg w-12 h-12 flex items-center justify-center mr-8">
                <img src="/logo.png" alt="logo-footer" />
              </div>
            </a>
            <p className="font-sans font-xs"> 2024 Desenvolvido com ❤ por GTI Engenharia Jr </p>
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
