const ContactSection = () => {
  return (
    <section id="contato" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="bg-yellowBg rounded-lg p-8 md:p-12 flex flex-row h-[35rem]">
          <form className="w-[32.8rem] h-[12.3rem] mt-24">
            <div className="mb-6">
              <label htmlFor="name" className="block text-neutral-900 font-NunitoSans font-bold">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-neutral-900 bg-transparent focus:outline-none px-2 font-NunitoSans"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-neutral-900 font-NunitoSans font-bold">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-neutral-900 bg-transparent focus:outline-none px-2 font-NunitoSans"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-neutral-900 font-NunitoSans font-bold">
                Mensagem
              </label>
              <textarea
                id="message"
                rows="1"
                className="w-full border-b border-neutral-900 bg-transparent focus:outline-none px-2 font-NunitoSans"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full text-4xl bg-neutral-900 text-whiteFont px-8 py-3 rounded font-NunitoSans hover:bg-opacity-80 transition-all"
              >
                Enviar
              </button>
            </div>
          </form>

          <div className="mt-10">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8 text-center font-Fraunces font-bold text-right">
              Entre em contato com a gente!
            </h2>

            <p className="text-neutral-950 text-center mt-6 font-NunitoSans text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
