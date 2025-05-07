function Contact() {
    return (
      <div className="container mt-5">
        <h2>Contact Me</h2>
        <form className="mt-4">
          <input type="text" className="form-control mb-3" placeholder="Your name" />
          <input type="email" className="form-control mb-3" placeholder="Your email" />
          <textarea className="form-control mb-3" rows="5" placeholder="Your message" />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
  export default Contact;
  