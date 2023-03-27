import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./components/Button";
import Extensions from "./components/Extensions";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import logo from "./assets/logo-bookmark-footer.svg";
import iconFacebook from "./assets/icon-facebook.svg";
import iconTwitter from "./assets/icon-twitter.svg";

import "./global.css";
import Contact from "./components/Contact";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <Header />

      <main className="main-content">
        <Introduction />
        <Features />
        <Extensions />
        <FAQ />
      </main>
    </div>

    <Contact />

    <footer className="footer">
      <nav className="footer-nav">
        <img src={logo} alt="Logo Bookmark" />
        <a href="#features">Features</a>
        <a href="#extension">Extension</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-media">
        <img src={iconFacebook} alt="Icon Facebook" />
        <img src={iconTwitter} alt="Icon Twitter" />
      </div>
    </footer>
  </React.StrictMode>
);
