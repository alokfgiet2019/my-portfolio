import { useEffect, useState } from "react"

const Navbar = () => {

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {

    const sections = document.querySelectorAll("section")

    const handleScroll = () => {

      sections.forEach((section) => {

        const top = window.scrollY
        const offset = section.offsetTop - 120
        const height = section.offsetHeight
        const id = section.getAttribute("id")

        if (top >= offset && top < offset + height) {
          setActiveSection(id)
        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <nav className="fixed top-0 left-0 w-full glass z-50">

      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold heading-gradient">
          Alok.dev
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <a
              href="#home"
              className={`transition ${
                activeSection === "home"
                  ? "text-red-700 font-bold"
                  : "text-slate-700"
              }`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`transition ${
                activeSection === "about"
                  ? "text-red-500 font-bold"
                  : "text-slate-700"
              }`}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={`transition ${
                activeSection === "skills"
                  ? "text-red-500 font-bold"
                  : "text-slate-700"
              }`}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={`transition ${
                activeSection === "projects"
                  ? "text-red-500 font-bold"
                  : "text-slate-700"
              }`}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={`transition ${
                activeSection === "contact"
                  ? "text-red-500 font-bold"
                  : "text-slate-700"
              }`}
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar