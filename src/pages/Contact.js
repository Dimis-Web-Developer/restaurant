import React from "react";
import PizzaLeft from "../asset/pizzaLeft.jpg";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter full name..."
            name="name"
            required
          />
          <label htmlFor="name">Email </label>
          <input
            type="email"
            placeholder="Enter email..."
            name="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows={6}
            placeholder="Enter message.."
            name="message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
