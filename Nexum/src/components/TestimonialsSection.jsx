const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-whiteFont mb-12 text-center font-Fraunces">Depoimentos</h2>
        <p className="text-whiteFont text-center mb-12 font-NunitoSans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia.
        </p>

        <div className="relative">
          <div className="flex overflow-x-hidden">
            <div className="flex-shrink-0 w-full md:w-1/2 p-4">
              <div className="bg-yellowBg p-6 rounded-lg">
                <p className="font-NunitoSans mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus
                  lacinia, non consequat magna. Aliquam id dictum lorem.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3">
                      {/* Placeholder para foto do cliente */}
                    </div>
                    <div>
                      <p className="font-bold font-NunitoSans">Cliente 1</p>
                      <p className="text-sm font-NunitoSans">Empresa</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-neutral-900"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-1/2 p-4">
              <div className="bg-yellowBg p-6 rounded-lg">
                <p className="font-NunitoSans mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus
                  lacinia, non consequat magna. Aliquam id dictum lorem.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3">
                      {/* Placeholder para foto do cliente */}
                    </div>
                    <div>
                      <p className="font-bold font-NunitoSans">Cliente 2</p>
                      <p className="text-sm font-NunitoSans">Empresa</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-neutral-900"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botões de navegação */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-neutral-900/50 text-whiteFont p-2 rounded-full">
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
              className="w-6 h-6"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-neutral-900/50 text-whiteFont p-2 rounded-full">
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
              className="w-6 h-6"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
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
            className="text-yellowBg w-12 h-12"
          >
            <path d="M2 12h20M2 12l10 10M2 12L12 2"></path>
            <path d="M22 12l-10 10M22 12L12 2"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
