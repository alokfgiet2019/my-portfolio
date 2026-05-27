const Skills = () => {

  const skills = [
    "React",
    "ASP.NET Core",
    "JavaScript",
    "Tailwind CSS",
    "SQL Server",
    "GitHub"
  ]

  return (
    <section id="skills" className="py-28 gradient-bg">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold heading-gradient mb-14">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((skill,index)=>(
            <div
              key={index}
              className="glass card-hover p-10 rounded-[30px]"
            >

              <h3 className="text-2xl font-semibold text-slate-800">
                {skill}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills