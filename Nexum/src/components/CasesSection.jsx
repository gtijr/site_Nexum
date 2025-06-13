const CasesSection = () => {
  return (
    <section id="casos" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-6xl font-bold text-whiteFont font-Fraunces">Casos de Sucesso</h2>
          <img src="/tribunal.png" alt="tribunal" className="h-32"/>
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
