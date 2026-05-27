const About = () => {
  return (
    <section id="about" className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold heading-gradient mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="about"
            className="rounded-[30px] shadow-2xl"
          />

          <div>

            <p className="text-lg text-slate-600 leading-9 mb-6">
              I'm a passionate full stack developer focused on creating
              premium digital experiences.
            </p>

            <p className="text-lg text-slate-500 leading-9">
              I specialize in React, ASP.NET Core, Tailwind CSS and
              responsive UI design.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About