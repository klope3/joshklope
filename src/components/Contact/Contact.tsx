import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
  return (
    <section id="Contact">
      <h3>CONTACT</h3>
      <form
        action="https://getform.io/f/b8987466-dd88-489a-a0d2-db5c983d0129"
        method="POST"
      >
        <div className="contact-top-row">
          <label htmlFor="name">
            <div>Name</div>
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            <div>Email</div>
            <input type="email" name="email" id="email" />
          </label>
        </div>
        <label className="message-area" htmlFor="message">
          <div>Message</div>
          <textarea name="message" id="message"></textarea>
        </label>
        <div className="submit-row">
          <button type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
