import { FormEvent, useState } from "react";
import Button from "./Button";
import "./Contact.css";

export default function Contact() {
  const [input, setInput] = useState("");

  return (
    <aside className="contact-section">
      <span className="data-contact">35,000 + ALREADY JOINED</span>
      <h2 id="contact" className="title-contact">
        Stay up-to-date with what we're doing
      </h2>
      <form className="form-contact">
        <input
          type="email"
          placeholder="Enter your email address"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button title="Contact Us" color="red" />
      </form>
    </aside>
  );
}
