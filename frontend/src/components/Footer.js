import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <nav className="footer-nav">
        <Link to="/" className="footer-link active">
          Add Transaction
        </Link>
        <Link to="/transactions" className="footer-link">
          View Transaction(s)
        </Link>
      </nav>
    </footer>
  );
};
