const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <div className="flex justify-between flex-col">
          <h2 className="text-6xl font-bold text-whiteFont font-Fraunces">Nossos Serviços</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Serviço 1 */}
          <div className="border border-yellowBg rounded-lg p-6 hover:bg-neutral-900/30 transition-all">
            <h3 className="text-xl font-bold text-whiteFont mb-4 font-Fraunces">Serviço 1</h3>
            <p className="text-whiteFont font-NunitoSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
              non consequat magna. Aliquam id dictum lorem.
            </p>
          </div>

          {/* Serviço 2 */}
          <div className="border border-yellowBg rounded-lg p-6 hover:bg-neutral-900/30 transition-all">
            <h3 className="text-xl font-bold text-whiteFont mb-4 font-Fraunces">Serviço 2</h3>
            <p className="text-whiteFont font-NunitoSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
              non consequat magna. Aliquam id dictum lorem.
            </p>
          </div>
          {/* Imagem do Martelo */}
          <img src="/martelo-legal.png" alt="martelo-legal" className="h-32"/>

          {/* Serviço 3 */}
          <div className="border border-yellowBg rounded-lg p-6 hover:bg-neutral-900/30 transition-all">
            <h3 className="text-xl font-bold text-whiteFont mb-4 font-Fraunces">Serviço 3</h3>
            <p className="text-whiteFont font-NunitoSans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
              non consequat magna. Aliquam id dictum lorem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
