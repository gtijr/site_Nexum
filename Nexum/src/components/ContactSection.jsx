const ContactSection = () => {
  return (
    <section id="contato" className="bg-neutral-900 py-16">
      <div className="container xl:max-w-screen-xl mx-auto px-4">
        <div className="bg-yellowBg rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center font-Fraunces">
            Entre em contato com a gente!
          </h2>

          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-neutral-900 mb-2 font-NunitoSans">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-neutral-900 bg-transparent focus:outline-none px-2 py-1 font-NunitoSans"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-neutral-900 mb-2 font-NunitoSans">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-neutral-900 bg-transparent focus:outline-none px-2 py-1 font-NunitoSans"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-neutral-900 mb-2 font-NunitoSans">
                Mensagem
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full border-b border-neutral-900 bg-transparent focus:outline-none px-2 py-1 font-NunitoSans"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-neutral-900 text-whiteFont px-8 py-3 rounded font-NunitoSans hover:bg-opacity-80 transition-all"
              >
                Enviar
              </button>
            </div>
          </form>

          <p className="text-neutral-950 text-center mt-6 font-NunitoSans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consequat magna eu tellus lacinia.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
