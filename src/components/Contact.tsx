import { FormEvent, useRef, useState } from "react";
import Button from "./Button";
import "./Contact.css";

export default function Contact() {
  const [input, setInput] = useState("");
  const wrapper = useRef(null);
  let inputDiv = wrapper.current as unknown as Element;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );

    if (!input || !validEmail.test(input)) {
      inputDiv.classList.add("error-input");
      return;
    }
    setInput("");
  }

  return (
    <aside className="contact-section">
      <span className="data-contact">35,000 + ALREADY JOINED</span>
      <h2 id="contact" className="title-contact">
        Stay up-to-date with what we're doing
      </h2>
      <form onSubmit={handleSubmit} className="form-contact">
        <div ref={wrapper} className="wrapper-input">
          <input
            type="text"
            placeholder="Enter your email address"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              inputDiv.classList.remove("error-input");
            }}
          />
        </div>
        <Button typeBtn="submit" title="Contact Us" color="red" />
      </form>
    </aside>
  );
}
