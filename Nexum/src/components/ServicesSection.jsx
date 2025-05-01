const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-whiteFont font-Fraunces">Nossos Serviços</h2>
          <div className="text-yellowBg">
            {/* Ícone de martelo */}
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
              <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9"></path>
              <path d="M17.64 15L22 10.64"></path>
              <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91"></path>
            </svg>
          </div>
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
