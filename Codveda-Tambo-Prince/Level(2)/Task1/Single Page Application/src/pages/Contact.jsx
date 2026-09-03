function Contact() {
    return ( 
        <section className="page">

            <h1>Contact Me</h1>

                <p>
                    Have a project in mind? Feel free to get in touch.
                </p>

        <form className="contact-form">

            <input
                type="text"
                placeholder="Your Name"
            />

            <input
                type="email"
                placeholder="Your Email"
            />

         <textarea
            placeholder="Your Message"
            rows="5"
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>
     );
}

export default Contact;