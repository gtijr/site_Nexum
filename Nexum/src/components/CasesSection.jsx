const CasesSection = () => {
  return (
    <section id="casos" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-6xl font-bold text-whiteFont font-Fraunces">Casos de Sucesso</h2>
          <img src="/tribunal.png" alt="tribunal" className="h-32"/>
        </div>

        <div className="flex flex-row">
          {/* Caso 1 */}
          <div className="flex flex-col gap-4 mr-10">
            <div className="bg-gray-300 w-[32rem] h-56 rounded-lg">{/* Placeholder para imagem */}</div>
            <div className="max-w-[32rem]">
              <h3 className="text-4xl font-bold text-whiteFont mb-2 font-NunitoSans">Título</h3>
              <p className="text-whiteFont font-NunitoSans text-xl text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo maximus nunc consectetur tempor. 
                Aliquam a vehicula magna, vel dictum lorem.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            {/* Caso 2 */}
            <div className="flex flex-row gap-4 mb-5">
              <div className="bg-gray-300 min-w-[15rem] h-56 rounded-lg">{/* Placeholder para imagem */}</div>
              <div className="max-w-[26rem]">
                <h3 className="text-4xl font-bold text-whiteFont mb-2 font-NunitoSans">Título</h3>
                <p className="text-whiteFont font-NunitoSans text-xl text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo maximus nunc consectetur tempor. 
                  Aliquam a vehicula magna, vel dictum lorem.
                </p>
              </div>
            </div>

            {/* Caso 3 */}
            <div className="flex flex-row gap-4">
              <div className="bg-gray-300 min-w-[15rem] h-56 rounded-lg">{/* Placeholder para imagem */}</div>
              <div className="max-w-[26rem]">
                <h3 className="text-4xl font-bold text-whiteFont mb-2 font-NunitoSans">Título</h3>
                <p className="text-whiteFont font-NunitoSans text-xl text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo maximus nunc consectetur tempor. 
                  Aliquam a vehicula magna, vel dictum lorem.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default CasesSection
