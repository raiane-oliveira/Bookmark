import logo from "../assets/logo-bookmark.svg";
import Button from "./Button";
import "./Header.css";

export default function Header() {
   return (
      <header className="header">
         <img src={logo} alt="Logo Bookmark" />

         <nav className="navigation-header">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <a href="">
               <Button title="Login" color="red" />
            </a>
         </nav>
      </header>
   );
}
