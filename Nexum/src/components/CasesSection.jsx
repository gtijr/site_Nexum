const CasesSection = () => {
  return (
    <section id="casos" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-whiteFont font-Fraunces">Casos de Sucesso</h2>
          <div className="text-yellowBg">
            {/* Ícone de prédio/tribunal */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12"
            >
              <rect x="3" y="11" width="18" height="10" rx="2"></rect>
              <circle cx="12" cy="5" r="2"></circle>
              <path d="M12 7v4"></path>
              <line x1="8" y1="16" x2="8" y2="16"></line>
              <line x1="16" y1="16" x2="16" y2="16"></line>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Caso 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-gray-300 w-full md:w-1/2 h-48 rounded-lg">{/* Placeholder para imagem */}</div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-whiteFont mb-2 font-Fraunces">Título</h3>
              <p className="text-whiteFont font-NunitoSans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
                non consequat magna. Aliquam id dictum lorem.
              </p>
            </div>
          </div>

          {/* Caso 2 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-gray-300 w-full md:w-1/2 h-48 rounded-lg">{/* Placeholder para imagem */}</div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-whiteFont mb-2 font-Fraunces">Título</h3>
              <p className="text-whiteFont font-NunitoSans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
                non consequat magna. Aliquam id dictum lorem.
              </p>
            </div>
          </div>

          {/* Caso 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-whiteFont mb-2 font-Fraunces">Título</h3>
              <p className="text-whiteFont font-NunitoSans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
                non consequat magna. Aliquam id dictum lorem.
              </p>
            </div>
            <div className="bg-gray-300 w-full md:w-1/2 h-48 rounded-lg">{/* Placeholder para imagem */}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CasesSection
