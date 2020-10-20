import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  function toggleActive(e) {
    let footerLinks = document.querySelectorAll(".footer-link");

    footerLinks[0].classList.remove("active");
    footerLinks[1].classList.remove("active");

    e.target.classList.add("active");
  }

  return (
    <footer>
      <nav className="footer-nav">
        <Link
          to="/"
          className="footer-link active"
          onClick={(e) => toggleActive(e)}
        >
          Add Transaction
        </Link>
        <Link
          to="/transactions"
          className="footer-link"
          onClick={(e) => toggleActive(e)}
        >
          View Transaction(s)
        </Link>
      </nav>
    </footer>
  );
};
