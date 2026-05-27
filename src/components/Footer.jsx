import { useEffect, useState } from "react"

const Footer = () => {

  const [isTop, setIsTop] = useState(true)

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 100) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  // Smart Scroll
  const handleScrollButton = () => {

    if (isTop) {

      // Scroll Bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      })

    } else {

      // Scroll Top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })

    }

  }

  return (

    <footer className="bg-slate-900 text-white pt-5 pb-4 position-relative">

      <div className="container">

        <div className="row gy-5">

          {/* About */}
          <div className="col-lg-4">

            <h2 className="fw-bold mb-3 text-info">
              Alok.dev
            </h2>

            <p className="text-light-emphasis lh-lg">

              Passionate Full Stack Developer creating
              modern responsive websites using React,
              ASP.NET Core and Bootstrap.

            </p>

          </div>

          {/* Links */}
          <div className="col-lg-4">

            <h4 className="fw-semibold mb-4">
              Quick Links
            </h4>

            <div className="d-flex flex-column gap-3">

              <a href="#home" className="footer-link">
                Home
              </a>

              <a href="#about" className="footer-link">
                About
              </a>

              <a href="#skills" className="footer-link">
                Skills
              </a>

              <a href="#projects" className="footer-link">
                Projects
              </a>

              <a href="#contact" className="footer-link">
                Contact
              </a>

            </div>

          </div>

          {/* Social */}
          <div className="col-lg-4">

            <h4 className="fw-semibold mb-4">
              Connect With Me
            </h4>

            <div className="d-flex gap-4 fs-3">

              <a
                href="https://github.com"
                target="_blank"
                className="social-icon"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="social-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">

          <p className="mb-0">
            © 2026 Alok.dev — All Rights Reserved
          </p>

        </div>

      </div>

      {/* Smart Scroll Button */}

      <button
        onClick={handleScrollButton}
        className="scroll-top-btn"
      >

        <i className={`bi ${
          isTop
            ? "bi-arrow-down"
            : "bi-arrow-up"
        }`}></i>

      </button>

    </footer>

  )
}

export default Footer