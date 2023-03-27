import { MouseEvent, useRef } from "react";
import logo from "../assets/logo-bookmark.svg";
import Button from "./Button";
import "./Header.css";

export default function Header() {
  const header = useRef(null);

  function openBurgerMenu(e: MouseEvent) {
    if (header.current !== null) {
      header.current.classList.toggle("active");
      document.body.style.overflow = header.current.classList.contains("active")
        ? "hidden"
        : "initial";
    }
  }

  return (
    <header ref={header} className="header">
      <img src={logo} alt="Logo Bookmark" />

      <nav className="navigation-header">
        <a href="#features">Features</a>
        <a href="#extension">Extension</a>
        <a href="#contact">Contact</a>
        <a href="#">
          <Button title="Login" color="red" />
        </a>
      </nav>

      <div onClick={openBurgerMenu} className="burger-menu"></div>
    </header>
  );
}
