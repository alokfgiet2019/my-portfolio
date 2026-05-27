const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold heading-gradient mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[1,2,3].map((item,index)=>(
            <div
              key={index}
              className="glass card-hover rounded-[30px] overflow-hidden"
            >

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="project"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  Portfolio Website
                </h3>

                <p className="text-slate-500 mb-6">
                  Modern responsive website built using React.
                </p>

                <button className="primary-btn">
                  View Project
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects