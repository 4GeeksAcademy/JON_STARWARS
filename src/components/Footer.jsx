import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-light py-3 mt-4">
      <small>© {new Date().getFullYear()} – Que la Fuerza te acompañe</small>
    </footer>
  );
}
