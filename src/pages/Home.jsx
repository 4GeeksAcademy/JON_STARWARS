import React from "react";
import { Link } from "react-router-dom";
import OpeningCrawl from "../components/OpeningCrawl";

export default function Home() {
  const crawlText = `
    A long time ago...
    in a galaxy far,
    far away...
  `;
  return (
    <>
      <OpeningCrawl text={crawlText} />
      <div className="container text-center mt-5">
        <Link to="/demo" className="btn btn-lg btn-primary">
          Comenzar AventurA
        </Link>
      </div>
    </>
  );
}
