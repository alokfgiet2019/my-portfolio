const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center"
    >

      <div className="container">

        <div className="row align-items-center min-vh-100">

          {/* Left Side */}
          <div className="col-lg-6">

            <p className="hero-subtitle">
              Welcome To My Portfolio
            </p>

            <h1 className="hero-title">

              Full Stack <br />

              <span className="gradient-text">
                Developer
              </span>

            </h1>

            <p className="hero-desc">

              I create modern, responsive and beautiful
              web applications using React and ASP.NET Core.

            </p>

            <div className="d-flex gap-4 mt-5 flex-wrap">

              <a
                href="#projects"
                className="hero-btn-primary text-decoration-none"
                > 
                Explore Projects
            </a>

            <a
                href="#contact"
                className="hero-btn-secondary text-decoration-none"
            >
                Contact Me
            </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center">

            <div className="hero-image-box">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="profile"
                className="img-fluid hero-image"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero