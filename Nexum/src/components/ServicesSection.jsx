const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <div className="flex justify-between flex-col">
          <h2 className="text-6xl font-bold text-whiteFont font-Fraunces">Nossos Serviços</h2>
        </div>

        <div className="flex flex-col items-end">

          {/* Imagem do Martelo */}
          <img src="/martelo-legal.png" alt="martelo-legal" className="h-32"/>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[31rem]">
            {/* Serviço 1 */}
            <div className="border border-yellowBg rounded-3xl p-6 hover:bg-neutral-900/30 transition-all flex flex-col items-center">
              <h3 className="text-5xl font-bold text-whiteFont mt-10 mb-40 font-Fraunces">Serviço 1</h3>
              <p className="text-whiteFont font-NunitoSans text-xl font-normal text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
                non consequat magna. Aliquam id dictum lorem.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="border border-yellowBg rounded-3xl p-6 hover:bg-neutral-900/30 transition-all flex flex-col items-center">
              <h3 className="text-5xl font-bold text-whiteFont mt-10 mb-40 font-Fraunces">Serviço 2</h3>
              <p className="text-whiteFont font-NunitoSans text-xl text-center font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
                non consequat magna. Aliquam id dictum lorem.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="border border-yellowBg rounded-3xl p-6 hover:bg-neutral-900/30 transition-all flex flex-col items-center">
              <h3 className="text-5xl font-bold text-whiteFont mt-10 mb-40 font-Fraunces">Serviço 3</h3>
              <p className="text-whiteFont font-NunitoSans text-xl text-center font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia,
                non consequat magna. Aliquam id dictum lorem.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
