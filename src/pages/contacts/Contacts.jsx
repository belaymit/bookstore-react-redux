import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import '../../styles/contacts.scss';

const Contacts = () => (
  <section id="contacts" className="contacts">
    <h2>Contact Me</h2>
    <div className="container contact-container">
      <div className="contact-options">
        <article className="contact-option">
          <MdOutlineMail className="contact-option-icon" />
          <h4>Email</h4>
          <h5>2belamit@gmail.com</h5>
          <a href="mailto:2belamit@gmial.com">Send a message</a>
        </article>
        <article className="contact-option">
          <FaTelegramPlane className="contact-option-icon" />
          <h4>Telegram</h4>
          <h5>@Bwgwa_wa</h5>
          <a href="mailto:2belamit@gmial.com">Send a message</a>
        </article>
        <article className="contact-option">
          <BsWhatsapp className="contact-option-icon" />
          <h4>WhatsApp</h4>
          <h5>(+251)-92-xyz-abcd</h5>
          <a href="mailto:2belamit@gmial.com">Send a message</a>
        </article>
      </div>
      <form action="">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contacts;
