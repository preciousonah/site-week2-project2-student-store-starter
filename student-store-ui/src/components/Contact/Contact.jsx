import React from "react";
import "./Contact.css";

export default function Contact() {
 
return (
  <section id= "contact">
    <h3 className="contact-heading">Contact Us</h3>
    <div className="contact-container">
      <div className="contact-description">
        <p>
        Please feel free to contact us with any questions, feedback, or inquiries you may have.
        You can reach us through the following channels:
        </p>
        <ul>
        <li>
          Email:{" "}
          <a className="email-link" href="mailto:contact@example.com">
            contact@example.com
          </a>
        </li>
        <li>Phone: <a className="phone-link" href="tel:+11234567890">+1 123-456-7890</a></li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
      </div>
    </div>
  </section>
);
}


