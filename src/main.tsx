import React from "react";
import ReactDOM from "react-dom/client";
import Features from "./components/Features";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <div className="container">
         <Header />

         <main className="main-content">
            <Introduction />
            <Features />
         </main>
      </div>
   </React.StrictMode>
);
