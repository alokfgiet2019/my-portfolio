const Contact = () => {
  return (
    <section id="contact" className="py-28 gradient-bg">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold heading-gradient mb-12">
          Contact Me
        </h2>

        <div className="glass p-10 rounded-[30px]">

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="modern-input"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="modern-input"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="modern-input"
            ></textarea>

            <button className="primary-btn">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact