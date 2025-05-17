import React from "react";

export default function OpeningCrawl({ text }) {
  return (
    <div className="opening-crawl">
      <div className="opening-crawl__content">
        {text.split("\n").map((line,i) => <p key={i}>{line}</p>)}
      </div>
    </div>
  );
}
