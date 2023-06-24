import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
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
  );
}
