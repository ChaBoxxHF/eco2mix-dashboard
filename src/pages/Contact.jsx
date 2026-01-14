import { Link, useNavigate } from "react-router-dom";
import "../styles/Contact.css";

function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Page de contact</h1>
      <div className="contact-section">
        <div className="contact-form-box">
          <h4>Contacter par email</h4>
          <form className="contact-form">
            <div className="form-group">
              <label>Objet</label>
              <input
                type="text"
                name="objet"
                className="form-input"
                placeholder="Objet"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="john.doe@mail.com"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                className="form-input"
                placeholder="Ecrivez votre message..."></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Envoyer
              </button>
            </div>
          </form>
        </div>

        <div className="contact-other">
          <h4>Autre moyen de contact</h4>
          <Link
            className="external-btn"
            to="https://www.linkedin.com/in/pascal-crochard-chaboxxhf/"
            target="_blank"
            rel="noreferrer">
            Contacter le dev
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
