import React, { useEffect } from "react";

export default function Starfield() {
  useEffect(() => {
    const container = document.querySelector(".starfield");
    for (let i = 0; i < 200; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${5 + Math.random() * 10}s`;
      container.appendChild(star);
    }
  }, []);
  return <div className="starfield" />;
}
